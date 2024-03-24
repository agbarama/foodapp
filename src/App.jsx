import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <>
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer></InnerContainer>
      </Container>
    </>
  );
}

export default App;
