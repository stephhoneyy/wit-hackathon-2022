import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Card from '../componentos/Card.js'
import Welcome from '../componentos/Welcome.js';
import Profile from '../componentos/Profile.js';
import CardList from '../componentos/CardList.js'

const cardInput = [
    {id: 1, name:"joe mama", img: "joemama.jpg"},
    {id: 2, name:"bingus bingus", img: "bingus bingus.png"}
    // {id: 3, name:"joe mama", img: "joemama.jpg"},
    // {id: 4, name:"joe mama", img: "joemama.jpg"},
];

export default function Home() {
    return (
        <div className="home">
          <h2>project name heherjeh</h2>
          <CardList cards={cardInput}/>
          <Welcome />
          <Profile />
            <Profile />
        </div>


    )
}