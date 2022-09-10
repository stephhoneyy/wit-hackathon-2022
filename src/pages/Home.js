import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function Home() {
    return (
        <div className="home">
            <Grid container>
                <Grid item xs={5.3}></Grid>
                <Grid className="homeContent" item xs={6.2}>
                    <h2>Home</h2>
                </Grid>
            </Grid>
        </div>
    )
}