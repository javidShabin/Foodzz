import React from "react";
import Header from "./Header";
import Home from "./Home";
import cardData from "./CardData";
import Catagory from "./Catagory";
import catData from "./CatagoriData";
import Restaurents from "./Restaurents";
import resData from "./ResData";

export default function Foods() {
  // Get card data  from cardData
  let home = cardData.map((item) => {
    return <Home key={item.id} cardContent={{ imgSrc: item.imgSrc }} />;
  });

  //   Get All catagory datas
  let catagoriData = catData.map((item) => {
    return (
      <Catagory
        key={item.id}
        catagoryItems={{ imgSrc: item.imgSrc, name: item.name }}
      />
    );
  });

  //   Get restaurent datas
  let restaurents = resData.map((item) => {
    return(
        <Restaurents key={item.id} rescontents={
            {
                imgSrc: item.imgSrc,
                name: item.name,
                desc: item.desc,
                starImg: item.starImg,
                clockImg: item.clockImg,
                discountImg: item.discountImg
            }
        } />
    )
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
          <div className="container">{catagoriData}</div>
        </div>
      </div>
      {/* Restaurent section */}
      <div className="restaurent">
        <h4>Top restaurents</h4>
        <div className="wrapper">
        <div className="container">
        {restaurents}
        </div>
        </div>
      </div>
    </div>
  );
}
