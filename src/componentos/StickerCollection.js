import React from "react";
import Card from "./Card";
import "./StickerCollection.css";
import joemama from "./joemama.jpg";

export default function StickerCollection(){
    return (
        <div className="stickers-container">
            <h2>Sticker Collection</h2>
            <hr/>
            <div className="row">
                <img src={joemama} alt="Joe mama"/>
                <img src={joemama} alt="Joe mama"/>
                <img src={joemama} alt="Joe mama"/>
                <img src={joemama} alt="Joe mama"/>
            </div>
            <div className="row">
                <img src={joemama} alt="Joe mama"/>
                <img src={joemama} alt="Joe mama"/>
                <img src={joemama} alt="Joe mama"/>
                <img src={joemama} alt="Joe mama"/>
            </div>    


            {/* <div class="button-container">
            <button>Draw 1</button>
            <button>Draw 10</button>
            </div> */}
        </div>
            
        

    )

}