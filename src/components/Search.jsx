import { useEffect, useState } from "react";
import styles from "../styles/search.module.css";
import axios from "axios";

const Search = ({ foodData, setFoodData }) => {
  const [query, setQuery] = useState("pizza");
  const API_Key = import.meta.env.VITE_SOME_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_Key}`
      )
      .then((res) => {
        setFoodData(res.data.results);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
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
