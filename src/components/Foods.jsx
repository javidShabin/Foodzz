import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Catagory from "./Catagory";
import catData from "./CatagoriData";
import Restaurents from "./Restaurents";
import resData from "./ResData";
import PopUp from "./PopUp";

export default function Foods() {
    let [popUpMenu, setPopUpMenu] = useState(false)

    const showPopUpHandler = () => {
        setPopUpMenu(true)
    }

  //   Get All catagory datas
  let catagoriData = catData.map((item) => {
    return (
      <Catagory
        key={item.id}
        catagoryItems={{ imgSrc: item.imgSrc, name: item.name }}
        showPopUpHandler={showPopUpHandler}
      />
    );
  });

  //   Get restaurent datas
  let restaurents = resData.map((item) => {
    return (
      <Restaurents
        key={item.id}
        rescontents={{
          imgSrc: item.imgSrc,
          name: item.name,
          desc: item.desc,
          starImg: item.starImg,
          clockImg: item.clockImg,
          discountImg: item.discountImg,
        }}
      />
    );
  });

  return (
    <div>
      <Header />
      {/* PopUp Component */}
      {popUpMenu && <PopUp setPopUpMenu={setPopUpMenu} />}
      {/* Home section */}
      <Home/>
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
          <div className="container">{restaurents}</div>
        </div>
      </div>
    </div>
  );
}
