import axios from 'axios';
import React, { createContext, useEffect, useRef, useState } from 'react'
import { API_BASE_LINE } from '../API';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const username = useRef(null);
    const [error, setError] = useState({
        usernameError: '',
        passwordError: '',
        userName: '',
        password: ''
    })
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const login = (username,password) => {
    //     if (username === "karthi" && password === "1234") {
    //         const loggedUser = { username };
    //         setUser(loggedUser);
    //         setIsLoggedIn(true);
    //         localStorage.setItem("user", JSON.stringify(loggedUser));
    //         return true;
    //     }
    //     return false;
    // };
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [log, setLog] = useState({
    //     userName: '',
    //     password: ''
    // }
    // )
    const login = async (e) => {
        const { userName, password } = error;
        try {
            // const result = await axios.post('http://localhost:8080/loginUser', { userName, password });
            const result = await axios.post(`${API_BASE_LINE}loginUser`, { userName, password });
            const datas = result.data.message;
            // const users = result.data.message === "Email not exits";
            // const pass = result.data.message === "Login Success";

            console.log("try block in login");
            console.log(datas);

            if (datas === "Email not exits") {
                setError({
                    usernameError: "Invalid UserName",
                    passwordError: "Invalid Password "
                });
                // alert("email not match");
                console.log('try blocklog')
                setIsLoggedIn(false);
                return false;
            } else if (datas === "password Not Match") {
                setError({
                    usernameError: " ",
                    passwordError: "Invalid Password "
                });
                alert("password not match");
                setIsLoggedIn(false);
                return false;
            }

            else if (datas === "Login Success") {

                const loggedUser = { userName };
                // localStorage.setItem("user", JSON.stringify(loggedUser));cmd
                setIsLoggedIn(true);
                setUser(loggedUser);

                // props.onLogin(true);
                alert("login succesfull");
                console.log("login succesfull");
                // props.onLogin(fetch);
                // navigate('/dashboard/' + userName);
                return true;
            }

        } catch (e) {
            if (!userName) {
                setError(
                    // usernameError:
                    "enter username");
            }
            if (!password) {
                setError({
                    passwordError: "enter password", usernameError: "enter username password"
                });
            }
            console.log("catch block")
            console.log(e);
            alert("catch ")
            setIsLoggedIn(false)
            return false;
        } finally {

        }
    }
    const logout = () => {
        setIsLoggedIn(false);
        setUser(null);
        alert("logout");
        localStorage.removeItem("user");//cmd
    }
    const handleChange = (e) => {
        setError({ ...error, [e.target.name]: e.target.value });
    }
    return (
        // <div>AuthContext</div>
        <AuthContext.Provider value={{ user, login, logout, error,setError, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    )
}
