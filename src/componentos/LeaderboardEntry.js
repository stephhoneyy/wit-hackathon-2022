import React from 'react';
import './LeaderboardEntry.css';
// import { FaTrash } from 'react-icons/fa';
// import CardDropDown from './CardDropDown';

// components for the leaderboard cards
export default function LeaderboardEntry({ card }) {
    
    return (
        <div className="entry">
            <img src = {card.img} alt ="joemmama"></img>

            <div className="entry-name">
                {card.name}
            </div>
            
            {/* <div className="card-price"> */}
                {/* {currency}{card.price} */}
                {/* .toFixed(2) */}
            {/* </div> */}
            {/* <FaTrash className="button card-drop-down" onClick={() => onDelete(card.id)}/> */}
            {/* <CardDropDown onDelete={onDelete} card={card}/> */}
        </div>
    )
}