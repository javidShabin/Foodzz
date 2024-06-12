import "./App.css";
import Foods from "./components/Foods";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Foods />} />
      </Routes>
    </>
  );
}

export default App;
