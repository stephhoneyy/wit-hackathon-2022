import React from "react";
import { Grid } from "@mui/material";
import "./Profile.css";
import Card from "./Card";

import joemama from "./joemama.jpg";
import bingusbingus from "./bingus bingus.png";


export default function Profile() {
  return (
    <Card title="Profile" id="profile-container">
      <article>
      <div className="name-container">
          <img src={bingusbingus} alt="bingusbingus" />
          <h3>bingusbingus</h3>
      </div>
      <hr />
      <div className="stats">
          <Grid container spacing={2}>
              <Grid item xs={4}><div>Friends</div><div>10</div></Grid>
              <Grid item xs={4}><div>Stickers</div><div>30</div></Grid>
              <Grid item xs={4}><div>Ranking</div><div>#1</div></Grid>
          </Grid>
      </div>
      </article>
    </Card>
  );
}
