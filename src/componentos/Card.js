import React from "react";
import CardHeader from "./CardHeader";

import "./Card.css";

export default function Card({ title, component }) {
    return (
        <div className="card">
            <CardHeader title={title} />
            {component}
        </div>
    )
}
