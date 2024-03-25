import { useEffect, useState } from "react";
import styles from "../styles/search.module.css";

const Search = ({ foodData, setFoodData }) => {
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_Key = process.env.API_KEY;

  // const API_Key = import.meta.env.VITE_SOME_KEY;

  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_Key}`);
      const data = await res.json();

      // set foodData to data.results
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
};

export default Search;
