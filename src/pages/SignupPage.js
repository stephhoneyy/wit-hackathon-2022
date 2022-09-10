import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './LoginSignupPage.css';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

    const handleSubmit =  (e) => {
        e.preventDefault();
        navigate("/login");
    }

    return (
        <div className="signup">
            <div className='signupForm'>
            <div className='signupHeader'><p>sign up!</p></div>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>full name</label><br/>
                    <input type="text" name="full_name" required />
                </p>
                <p>
                    <label>username</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label className="email">email address</label><br/>
                    <input type="email" name="email" onChange={(e)=>{setEmail(e.currentTarget.value)}} value={email} required />
                </p>
                <p>
                    <label>password</label><br/>
                    <input type="password" name="password" onChange={(e)=>{setPassword(e.currentTarget.value)}} value={password} required />
                </p>
                <p>
                    <label>confirm password</label><br/>
                    <input type="password" name="password" onChange={(e)=>{setConfirmPass(e.currentTarget.value)}} value={confirmPass} required />
                </p>
                <p className="buttonGroup">
                    <button className="buttonsignup" variant="contained" id="sub_btn" type="submit">sign up!</button>
                </p>
                <div className='linktoLogin'><p className="links">already have an account? <Link to="/login">login here</Link></p></div>
            </form>
            </div>
        </div>
    )
}

export default SignUpPage;

