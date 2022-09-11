import React from "react";
import Card from "./Card";
import "./WishBanner.css";

import joemama from "./joemama.jpg";

export default function WishBanner(){
    return (
        <>
            <Card id = "wishbanner" title="Standard Wish Banner">
                <div className="wishbanner-container">
                    <img src={joemama} alt="Joe mama"/>
                    <img src={joemama} alt="Joe mama"/>
                    <img src={joemama} alt="Joe mama"/>
                    <img src={joemama} alt="Joe mama"/>
                </div>

                <div className="button-container">
                    <button>Draw 1</button>
                    <button>Draw 10</button>
                </div>
            </Card>
        
        </>
    )

}