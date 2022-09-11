import React from "react";
import { Grid } from "@mui/material";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div id="welcome-box" style={{ backgroundImage: "url(/mesh-gradient_1.png)" }}>
      <div id = "welcome-content">
        <h2 id = "Bingus">
          Hello, Bingus! </h2>
            <h2>
            Time to get productive, bestie!
          </h2>
      </div>
    </div>
  );
}