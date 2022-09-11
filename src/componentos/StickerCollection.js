import React from "react";
import Card from "./Card";
import "./StickerCollection.css";
import joemama from "./joemama.jpg";
import amogus from "./amogus.jpg";
import birb from "./birb.jpg";
import cat from "./cat.jpg";
import elmo from "./elmo.jpg";
import frug from "./frug.jpg";
import kermit from "./kermit.jpg";
import uhhh from "./uhhh.jpg";

export default function StickerCollection(){
    return (
        <div className="stickers-container">
            <h2>Sticker Collection</h2>
            <hr/>
            <div className="row">
                <img src={joemama} alt="Joe mama"/>
                <img src={amogus} alt="amogus"/>
                <img src={birb} alt="birb"/>
                <img src={cat} alt="cat"/>
            </div>
            <div className="row">
                <img src={elmo} alt="elmo"/>
                <img src={frug} alt="frug"/>
                <img src={kermit} alt="kermit"/>
                <img src={uhhh} alt="uhhh"/>
            </div>    


            {/* <div class="button-container">
            <button>Draw 1</button>
            <button>Draw 10</button>
            </div> */}
        </div>
            
        

    )

}