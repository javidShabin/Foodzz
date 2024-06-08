import React from "react";
import Header from "./Header";
import Home from "./Home";
import cardData from "./CardData";


export default function Foods() {
    let home = cardData.map((item) => {
        return(
            <Home/>
        )
    })
  return (
    <div>
      <Header />
      {home}
    </div>
  );
}
