import React from "react";
import Card from "./Card";
import "./WishBanner.css";

import joemama from "./joemama.jpg";
import kermit from "./kermit.jpg";
import uhhh from "./uhhh.jpg";
import amogus from "./amogus.jpg";

export default function WishBanner(){
    return (
        <>
            <Card id = "wishbanner" title="Standard Wish Banner">
                <div className="wishbanner-container">
                    <img src={amogus} alt="amogus"/>
                    <img src={uhhh} alt="uhhh"/>
                    <img src={joemama} alt="Joe mama"/>
                    <img src={kermit} alt="kermit"/>
                </div>

                <div className="button-container">
                    <button>Draw 1</button>
                    <button>Draw 10</button>
                </div>
            </Card>
        
        </>
    )

}