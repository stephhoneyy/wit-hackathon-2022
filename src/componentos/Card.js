import React from 'react';
import './Card.css';
// import phoyo from "../../manifest.json"
// import { FaTrash } from 'react-icons/fa';
// import CardDropDown from './CardDropDown';

export default function Card({ card }) {
    // const currency = '$'
    
    return (
        <div className="card">
            <img src = "/joemama.jpg" alt ="joemmama"></img>

            <div>Image here pls</div>
            <div className="card-name">
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