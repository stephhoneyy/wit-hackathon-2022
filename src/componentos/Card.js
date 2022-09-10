import React from "react";
import CardHeader from "./CardHeader";

import "./Card.css";

export default function Card(props) {
    return (
        <div className="card">
            <CardHeader title={props.title} />
            <div className="card-content">
                {props.children}
            </div>
        </div>
    )
}
