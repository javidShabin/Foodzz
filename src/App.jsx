
import "./App.css";
import Foods from "./components/Foods";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import TopRestaurent from "./components/TopRestaurent";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Foods />} />
        <Route path="topRestaurents" element={<TopRestaurent/>} />
      </Routes>
    </>
  );
}

export default App;
