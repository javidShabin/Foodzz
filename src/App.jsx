
import "./App.css";
import Foods from "./components/Foods";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import TopRestaurent from "./components/TopRestaurent";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Foods />} />
        <Route path="topRestaurents" element={<TopRestaurent/>} />
        <Route path="cartPage" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
