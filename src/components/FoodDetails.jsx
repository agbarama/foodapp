import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/fooddetails.module.css";
import RecipeCard from "./RecipeCard";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const FoodDetails = ({ foodId }) => {
  // state to save the recipe
  const [food, setFood] = useState({});

  // state to enable us watch when the recipe api request is successful
  const [isLoading, setIsLoading] = useState(true);

  // const API_Key = process.env.API_KEY
  const API_Key = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${API_Key}`
      )
      .then((res) => {
        setFood(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("error fetching data:", err);
      });
  }, [foodId]);

  return (
    <div>
      <RecipeCard food={food} />
      <Ingredients food={food} isLoading={isLoading} />
      <Instructions food={food} isLoading={isLoading} />
    </div>
  );
};

export default FoodDetails;
