import React from "react";

import "./CardHeader.css";

export function CardHeader({ title }) {
  return (
    <div className="card-header">
      <h2>{title}</h2>
    </div>
  );
}