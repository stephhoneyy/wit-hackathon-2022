import React from "react";
import { Grid } from "@mui/material";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div id="welcome-box" style={{ backgroundImage: "url(/mesh-gradient_1.png)" }}>
      <div id = "welcome-content">
        <text id>
          Hello, Bingus 
          </text>
          <text>
          Time to get productive, whore!
        </text>
      </div>
      <img id = "bingus" src = "/unknown.png" alt ="bingus"></img>
    </div>
  );
}