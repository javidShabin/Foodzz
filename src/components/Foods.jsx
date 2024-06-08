import React from "react";
import Header from "./Header";
import Home from "./Home";
import cardData from "./CardData";
import Catagory from "./Catagory";

export default function Foods() {
  // Get card data  from cardData
  let home = cardData.map((item) => {
    return <Home key={item.id} cardContent={{ imgSrc: item.imgSrc }} />;
  });
  return (
    <div>
      <Header />
      {/* Home section */}
      <div className="home">
        <div className="container">{home}</div>
      </div>
      {/* Catagory section */}
      <Catagory/>
    </div>
  );
}
