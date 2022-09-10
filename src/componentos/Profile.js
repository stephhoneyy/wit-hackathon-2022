import React from "react";
import { Grid } from "@mui/material";
import "./Profile.css";
import Card from "./Card";

export default function Profile() {
  return (
    <Card title="Profile" id="profile-container">
      <article>
      <div className="name-container">
          <img src="/joemama.jpg" alt="Joe Mama" />
          <h3>Joe Mama</h3>
      </div>
      <hr />
      <div className="stats">
          <Grid container spacing={2}>
              <Grid item xs={4}><div>Friends</div><div>10</div></Grid>
              <Grid item xs={4}>Stickers 30</Grid>
              <Grid item xs={4}>Ranking #1</Grid>
          </Grid>
      </div>
      </article>
    </Card>
  );
}
