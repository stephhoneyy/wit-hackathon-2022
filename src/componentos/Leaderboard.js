import React from "react";
import Card from './Card';
import LeaderboardList from "./LeaderboardList";

import "./Leaderboard.css";

export default function Leaderboard({ cards }) {
    return (
        <div className="leaderboardItem">
            <Card title="leaderboard">
                <LeaderboardList cards={cards} />
            </Card>
        </div>
    )
}