import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Card from '../componentos/Card.js'
import Welcome from '../componentos/Welcome.js';
import Profile from '../componentos/Profile.js';
import Leaderboard from '../componentos/Leaderboard.js';
import WishBanner from '../componentos/WishBanner.js';
import Assignments from '../componentos/Assignments.js';
import StickerCollection from '../componentos/StickerCollection.js'

import joemama from "../componentos/joemama.jpg";
import bingusbingus from "../componentos/bingus bingus.png";
import amogus from "../componentos/amogus.jpg";

import './Home.css';

const cardInput = [
    {id: 1, name:"joe mama", img: joemama},
    {id: 2, name:"bingus bingus", img: bingusbingus},
    {id: 3, name:"amogus", img: amogus}
    // {id: 4, name:"joe mama", img: "joemama.jpg"},
];

export default function Home() {
    return (
        <>
             <div>
                <Link to="/login"> Login</Link>
                <Link to="/signup"> Register</Link>
            </div>
            <div className="home">
            {/* <h2>project name heherjeh</h2> */}
            <Welcome />
            <Profile />
            <Assignments />
            <div><WishBanner /><StickerCollection/></div>
            <Leaderboard cards={cardInput}/>
            </div>
        </>
    )
}