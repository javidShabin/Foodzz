import React from "react";

export default function Restaurents(props) {
  let resItems = props.rescontents;
  return (
    <div className="card">
      <div className="left">
        <img src={resItems.imgSrc} />
      </div>
      <div className="right">
        <h3>{resItems.name}</h3>
        <p>{resItems.desc}</p>
        <div className="icon">
        <span><img src={resItems.starImg}/><b> 4.5</b></span>
        <span><img src={resItems.clockImg}/><b> 30 mins</b></span>
        </div>
        <span className="dicImg"><img src={resItems.discountImg}/><b> **UPTO 40% DICOUND</b></span>
      </div>
    </div>
  );
}
