import React from "react";
import { Link } from "react-router-dom";

export default function Restaurents({rescontents}) {
  
  return (
    <Link to="topRestaurents">
    <div className="card">
      <div className="left">
        <img src={rescontents.imgSrc} />
      </div>
      <div className="right">
        <h3>{rescontents.name}</h3>
        <p>{rescontents.desc}</p>
        <div className="icon">
        <span><img src={rescontents.starImg}/><b> 4.5</b></span>
        <span><img src={rescontents.clockImg}/><b> 30 mins</b></span>
        </div>
        <span className="dicImg"><img src={rescontents.discountImg}/><b> **UPTO 40% DICOUND</b></span>
      </div>
    </div>
    </Link>
  );
}
