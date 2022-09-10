import React from "react";
import CardHeader from "./CardHeader";
import CardList from "./CardList";

import "./Leaderboard.css";

export function Leaderboard({ cards }) {
    return (
        <div id="leaderboard">
            <CardHeader  title="leaderboard" />
            <CardList cards={cards} />
        </div>
    )
}