import React from "react";
import Card from './Card';
import LeaderboardList from "./LeaderboardList";

import "./Leaderboard.css";

export default function Leaderboard({ cards }) {
    return (
        <>
            <Card title="leaderboard">
                <LeaderboardList cards={cards} />
            </Card>
        </>
    )
}