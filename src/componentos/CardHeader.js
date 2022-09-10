import React from "react";

import "./CardHeader.css";

export default function CardHeader({ title }) {
  return (
    <div className="card-header">
      <h2>{title}</h2>
    </div>
  );
}