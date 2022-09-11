import React from "react";
import Card from "./Card";
import "./WishBanner.css";

export default function WishBanner(){
    return (
        <>
            <Card id = "wishbanner" title="Standard Wish Banner">
                <div className="wishbanner-container">
                    <img src="/joemama.jpg" alt="Joe mama"/>
                    <img src="/joemama.jpg" alt="Joe mama"/>
                    <img src="/joemama.jpg" alt="Joe mama"/>
                    <img src="/joemama.jpg" alt="Joe mama"/>
                </div>

                <div class="button-container">
                    <button>Draw 1</button>
                    <button>Draw 10</button>
                </div>
            </Card>
        
        </>
    )

}