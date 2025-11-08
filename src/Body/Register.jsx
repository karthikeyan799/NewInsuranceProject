import axios from 'axios';
import React, { useState } from 'react'
import { API_BASE_LINE } from '../API';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate = useNavigate()
    const [register, setRegister] = useState({
        userId: '',
        userName: '',
        password: '',
        eMail: '',
        confirmPassword: ''
    });
    const [error, setError] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value });
    }
    const submit = async (e) => {
        e.preventDefault();
        const validationError = validation(register);
        if (Object.keys(validationError.length === 0)) {
            console.log("Form data is valid: ", register);
        } else {
            setError(validationError);
        }
        try {
            await axios.post(`${API_BASE_LINE}save`, register)
            alert("Register Successfully...")
            navigate("/login")

        } catch (err) {
            // alert(err)
            setError(validationError);
            console.log(err);
        }
    }
    return (
        <div className="conatainer ">
            <div className="row ">
                <div className="offset-md-5 bg-light border 
          rounder p-4 mt-3 shadow"  style={{ width: "400px", }}>
                    <form
                        onSubmit={submit}
                    >
                        <h2 style={{
                            textAlign: "center",
                            fontFamily: "cursive",
                            fontSize: "40px",
                        }} className="text-center m-1"> SignIn</h2>
                        <hr></hr>


                        <div className="mb-3 ">
                            <div className="inputGroupContainer mb-3">
                                <label className="form-label" htmlFor="form2Example1">
                                    UserName
                                </label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                        <i class="fa fa-user-circle-o"></i>
                                    </span>
                                    <input
                                        type={"text"}
                                        id="form2Example1"
                                        className="form-control"
                                        placeholder="Enter your userName"
                                        name="userName"
                                        value={register.userName}
                                        onChange={handleChange}

                                    />
                                </div>
                                {error.userName && (
                                    <span className="text-danger">{error.userName}</span>
                                )}
                            </div>
                        </div>
                        <div className="mb-3 ">
                            <div className="inputGroupContainer mb-3">
                                <label className="form-label" htmlFor="form2Example1">
                                    E-Mail :
                                </label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                        <i class="fa fa-user-circle-o"></i>
                                    </span>
                                    <input
                                        type={"email"}

                                        className="form-control"
                                        placeholder="Enter your userName"
                                        name="eMail"
                                        value={register.eMail}
                                        onChange={handleChange}

                                    />
                                </div>
                                {error.eMail && (
                                    <span className="text-danger">{error.eMail}</span>
                                )}
                            </div>
                        </div>
                        <div className="mb-3 ">
                            <div className="inputGroupContainer mb-3">
                                <label className="form-label" htmlFor="form2Example1">
                                    Password :
                                </label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                        <i class="fa fa-user-circle-o"></i>
                                    </span>
                                    <input
                                        type={"text"}

                                        className="form-control"
                                        placeholder="Enter your userName"
                                        name="password"
                                        value={register.password}
                                        onChange={handleChange}

                                    />
                                </div>
                                {error.password && (
                                    <span className="text-danger">{error.password}</span>
                                )}
                            </div>
                        </div>
                        <div className="mb-3 ">
                            <div className="inputGroupContainer mb-3">
                                <label className="form-label" htmlFor="form2Example1">
                                    Confirm Password :
                                </label>
                                <div class="input-group">
                                    <span class="input-group-text">
                                        <i class="fa fa-user-circle-o"></i>
                                    </span>
                                    <input
                                        type={"text"}

                                        className="form-control"
                                        placeholder="Enter your userName"
                                        name="confirmPassword"
                                        value={register.confirmPassword}
                                        onChange={handleChange}

                                    />
                                </div>
                                {error.confirmPassword && (
                                    <span className="text-danger">{error.confirmPassword}</span>
                                )}
                            </div>
                        </div>
                        <p className='text-center'>Already Have an account ? <Link to={'/login'}>Login</Link></p>
                        <button type='submit' className='btn btn-success'>Register</button>

                    </form>
                </div>
            </div>
        </div>
    )

    function validation() {
        let errors = {};
        if (register.userName === "") {
            errors.userName = "UserName is Required"
        } else if (!register.userName.match("^[A-Za-z]+$")) {
            errors.userName = "User Name is doesn't match"
        }
        if (register.password !== register.confirmPassword) {
            errors.password = "password not match"
        }
        if (register.password === "") {
            errors.password = "Password is required"
        } if (register.eMail === "") {
            errors.eMail = "E-Mail is reqired";
        }else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/i.test(register.eMail)){
        // } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(register.eMail)) {
            errors.eMail = "Invalid E-Mail address";
        }
        if (register.confirmPassword === "") {
            errors.confirmPassword = "ConfirmPassword is required";
        }
        return errors;
    }
}