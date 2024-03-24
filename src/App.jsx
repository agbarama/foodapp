import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import FoodList from "./components/FoodList";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState(656329);
  return (
    <>
      <Navbar />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodId={setFoodId} />
        </InnerContainer>
      </Container>
    </>
  );
}

export default App;
