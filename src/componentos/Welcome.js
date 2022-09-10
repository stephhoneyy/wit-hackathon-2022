import React from "react";
import { Grid } from "@mui/material";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div id="welcome-box" style={{ backgroundImage: "url(/mesh-gradient_1.png)" }}>
      <div id = "welcome-content">
        <h2>
          Hello, Bingus 
          </h2>
          <h2>
          Time to get productive, whore!
        </h2>
      </div>
    </div>
  );
}