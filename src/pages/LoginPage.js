import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import './LoginSignupPage.css';

export default function LoginPage({ user }) {
    
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate();
    if (user) {
        return <Navigate to="/" />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/");
    }

    return (
        <div className="login">
            <h2>Welcome Back!</h2>
            <form onSubmit={handleSubmit} >
                <p>
                    <label className="email">email</label><br/>
                    <input type="text" name="email" onChange={(e)=>{setEmail(e.currentTarget.value)}} value={email} required />
                </p>
                <p>
                    <label className="password">password</label>
                    {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
                    <br/>
                    <input type="password" name="password" onChange={(e)=>{setPassword(e.currentTarget.value)}} value={password} required />
                </p>
                <div className='buttonGroup'>
                    <button className="buttonlogin" variant="contained" id="/" type="submit">Login</button>
                    <p></p>
                    <p className="linktoSignUp">Don't have an account? <Link to="/signup">Register</Link></p>
                </div>
            </form>
        </div>
    )
}