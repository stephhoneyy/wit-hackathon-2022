import LeaderboardEntry from './LeaderboardEntry';
import "./LeaderboardList.css";

import joemama from "./joemama.jpg";
import bingusbingus from "./bingus bingus.png";


// component for the list of leaderboard cards
export default function LeaderboardList( { cards } ){

    return (
        <div className = "leaderboard-list">
            {cards.map(c => (
                <LeaderboardEntry key={c.id} card={c} /> /* c is each individual row of cardInput*/
                ))}  
            <div className="name-container">
                <img src={bingusbingus} alt="bingusbingus"/>
                <div>
                    <h3>bingusbingus</h3>
                    <p>Current Ranking: #1</p>
                </div>
            </div>

        </div>
    )
}