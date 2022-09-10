import Card from './Card'
import './CardList.css';

// component for the list of leaderboard cards
export default function CardList( { cards } ){

    return (
        <div className = "card-list">
            {cards.map(c => (
                <Card key={c.id} card={c} /> /* c is each individual row of cardInput*/
                ))}  
            <div className="name-container">
                <img src="/joemama.jpg" alt="Joe Mama"/>
                    <h3>Joe mama</h3>
            </div>

        </div>
    )
}