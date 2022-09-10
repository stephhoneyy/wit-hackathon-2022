import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Card from '../componentos/Card.js'

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
            <Card card = {{name: "joe mama"}}/>
            <Grid container>
                    <Grid item xs={5.3}></Grid>
                    <Grid className="loginContent" item xs={6.2}>
                        <h2>Welcome Back!</h2>
                        <form onSubmit={handleSubmit} >
                            <p>
                                <label className="email">Email:</label><br/>
                                <input type="text" name="email" onChange={(e)=>{setEmail(e.currentTarget.value)}} value={email} required />
                            </p>
                            <p>
                                <label className="password">Password:</label>
                                {/* <Link to="/forget-password"><label className="right-label">Forget password?</label></Link> */}
                                <br/>
                                <input type="password" name="password" onChange={(e)=>{setPassword(e.currentTarget.value)}} value={password} required />
                            </p>
                            <div className='buttonGroup'>
                                <Button className="buttonlogin" variant="contained" id="/" type="submit">Login</Button>
                                <p></p>
                                <Button className="buttonlogin">Login with Facebook</Button> 
                                <Button className="buttonlogin">Login with Twitter</Button> 
                                <p className="linktoSignUp">Don't have an account? <Link to="/signup">Register</Link></p>
                            </div>
                        </form>
                </Grid>
            </Grid>
        </div>
    )
}