import { useEffect, useState } from "react";
import styles from "../styles/fooddetails.module.css";
import RecipeCard from "./RecipeCard";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const FoodDetails = ({ foodId }) => {
  // state to save the recipe
  const [food, setFood] = useState({});

  // state to enable us watch when the recipe api request is successful
  const [isLoading, setIsLoading] = useState(true);

  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_Key = process.env.VITE_SOME_KEY;

  // const API_Key = process.env.API_KEY
  // const API_Key = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?apiKey=${API_Key}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      // the setFood state use changes when the api request is through so we add the isLoang code here
      setIsLoading(false);
    }
    fetchRecipe();
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
