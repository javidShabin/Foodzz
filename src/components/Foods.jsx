import React from "react";
import Header from "./Header";
import Home from "./Home";
import cardData from "./CardData";
import Catagory from "./Catagory";
import catData from "./CatagoriData";

export default function Foods() {
  // Get card data  from cardData
  let home = cardData.map((item) => {
    return <Home key={item.id} cardContent={{ imgSrc: item.imgSrc }} />;
  });

//   Get All catagory datas
let catagoriData = catData.map((item) => {
    return <Catagory key={item.id} catagoryItems={{imgSrc: item.imgSrc, name: item.name}} />
})
  return (
    <div>
      <Header />
      {/* Home section */}
      <div className="home">
        <div className="container">{home}</div>
      </div>
      {/* Catagory section */}
      <div className="catagory">
        <h4>What's on your mind</h4>
      <div className="catagory-wrapper">
        <div className="container">
        {catagoriData}
        </div>
      </div>
      </div>
    </div>
  );
}
