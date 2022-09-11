import LeaderboardEntry from './LeaderboardEntry';
import "./LeaderboardList.css";

import joemama from "./joemama.jpg"

// component for the list of leaderboard cards
export default function LeaderboardList( { cards } ){

    return (
        <div className = "leaderboard-list">
            {cards.map(c => (
                <LeaderboardEntry key={c.id} card={c} /> /* c is each individual row of cardInput*/
                ))}  
            <div className="name-container">
                <img src={joemama} alt="Joe Mama"/>
                <div>
                    <h3>Joe mama</h3>
                    <p>Current Ranking: #1</p>
                </div>
            </div>

        </div>
    )
}