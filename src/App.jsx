import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
    </>
  );
}

export default App;
