import React from "react";
import Card from "./Card";
import "./StickerCollection.css";

export default function StickerCollection(){
    return (
        <div className="stickers-container">
            <h2>Sticker Collection</h2>
            <hr/>
            <div class="row">
                <img src="/joemama.jpg" alt="Joe mama"/>
                <img src="/joemama.jpg" alt="Joe mama"/>
                <img src="/joemama.jpg" alt="Joe mama"/>
                <img src="/joemama.jpg" alt="Joe mama"/>
            </div>
            <div class="row">
                <img src="/joemama.jpg" alt="Joe mama"/>
                <img src="/joemama.jpg" alt="Joe mama"/>
                <img src="/joemama.jpg" alt="Joe mama"/>
                <img src="/joemama.jpg" alt="Joe mama"/>
            </div>    


            {/* <div class="button-container">
            <button>Draw 1</button>
            <button>Draw 10</button>
            </div> */}
        </div>
            
        

    )

}