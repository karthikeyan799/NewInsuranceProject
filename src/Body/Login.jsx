import React, { useContext, useState } from 'react'
// import './Body/Login.css'
import '../Body/Login.css'
import { AuthContext } from './AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");

    const { login, isLoggedIn,  error,setError, setIsLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
   
    const handleChangelog = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    }
    const handleChange=(e)=>{
        setError({...error,[e.target.name]:e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const success = login(userName,password);
        // const success = login(log);
        if (success ) {
            navigate("/");
            // alert("Valid crenditial");
            setIsLoggedIn(true);
        }
        else alert("Invalid crenditial");
    };
    // const userLogin = async () => {
    //     try {
    //         const res = await axios.post('http://localhost:8080/loginUser', users)
    //         // alert("login successfull")
    //         if (res.data.message === "Login Success") {
    //             navigate("/dashboard");
    //             setIsLoggedIn(true);
    //             // setUsers(res.data.message);
    //             console.log(res.data);
    //         } else if (res.data.message === "Email not exits") {
    //             alert("email not exits");
    //         }
    //         else if (res.data.message === "password not match") {
    //             alert("password not match")
    //         }
    //     } catch (e) {
    //         console.log("erros on login : " + e)
    //     }
    // }
    // ConstantSourceNode 
    return (
        <div className='container-fluid log'>

            {/* <form className='form row' onSubmit={userLogin}> */}
            <div className='form row' >
                <div className='col-6 dimg'>
                    <img className="img" src="src/assets/3d-cartoon-baby-genius-photo.jpg" alt="bad" /> </div>
                <div className='col-6 dform'>
                    <h2 className='login'>Login</h2><hr />
                    <div className='row'>
                        <label htmlFor="" className='control-label'>UserName</label>
                        <div className='input-group-container'>

                            <input type="text" placeholder='User Name'
                                value={error.userName}
                                // onChange={(e) => setUsername(e.target.value)}
                                // value={username}
                                onChange={handleChange}
                                className='form-control' name="userName" id="userName"  />
                            {!error.userName && (
                                <span className="text-danger">{error.usernameError}</span>
                            )}
                        </div>

                    </div>
                    <div className='row mt-2'>
                        <label htmlFor="">password</label>
                        <div className='input-group-container'>
                            <input type="text" className='form-control'
                                value={error.password}
                                // onChange={(e) => setPassword(e.target.value)} 
                                // value={password}
                                onChange={handleChange}
                                placeholder='Password' name="password" id="password" />
                           {!error.password && (
                                <span className="text-danger">{error.passwordError}</span>
                            )}
                        </div>

                    </div>
                    <p className='p'>
                        Don't have an Account? <a href="#">Register</a>
                    </p>
                    <div>
                        <button className='btn btn-success' onClick={handleSubmit} type='submit'>LogIn</button>
                    </div>
                </div>
            </div>

        </div >
    )
}
