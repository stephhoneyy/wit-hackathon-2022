import LeaderboardEntry from './LeaderboardEntry';
import './LeaderboardList.css';

// component for the list of leaderboard cards
export default function LeaderboardList( { cards } ){

    return (
        <div className = "leaderboard-list">
            {cards.map(c => (
                <LeaderboardEntry key={c.id} card={c} /> /* c is each individual row of cardInput*/
                ))}  
            <div className="name-container">
                <img src="/joemama.jpg" alt="Joe Mama"/>
                    <h3>Joe mama</h3>
            </div>

        </div>
    )
}