import Card from './Card';
import './CardList.css';

export default function CardList( { cards } ){

    return (
        <div className = "card-list">
            {cards.map(c => (
                <Card key={c.id} card={c} /> /* c is each individual row of cardInput*/
                ))}  
        </div>
    )
}