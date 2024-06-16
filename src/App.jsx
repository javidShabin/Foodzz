import "./App.css";
import Foods from "./components/Foods";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import TopRestaurent from "./components/TopRestaurent";
import Cart from "./components/Cart";
import React, {useState} from "react";


let myContext = React.createContext()

function App() {

    let [itemsImg, setItemsImg] = useState()

    // Add to cart function it called in child element
    const addItemsToCart = (itemsImg) => {
        setItemsImg(itemsImg)
    }

  return (
    <>
    <myContext.Provider value={addItemsToCart}>
      <Header />
      <Routes>
        <Route path="/" element={<Foods />} />
        <Route path="topRestaurents" element={<TopRestaurent />} />
        <Route path="cartPage" element={<Cart itemsImg={itemsImg} />} />
      </Routes>
    </myContext.Provider>
    </>
  );
}

export default App;
export {myContext}