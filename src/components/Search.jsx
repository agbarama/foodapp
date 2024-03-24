import { useEffect, useState } from "react";
import styles from "../styles/search.module.css";

const Search = ({ foodData, setFoodData }) => {
  // We can either copy the whole url or we save them in a variable seperatly which is the best practice
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_Key = "a7291dffeb224058bb95201b135c244a";

  const [query, setQuery] = useState("pizza");

  // syntax of the useEffect hook. Whatever state we pass on the dependency array triggers the callback function
  useEffect(() => {
    async function fetchFood() {
      // using a react fetch function, we now we added the whole url, query and string like on the postman using a dynamic string.
      // The fetch function will return a response saved on the res variable. The response will be on json format
      // We then need to decode the res varaible into proper json and save on data variable
      // We get an error because 'res.json()' dose not with for the fetch to properly make a request to the api before executing, so we need to make our code wait for a while until the api request is done before running using 'async' on the function and 'await' on the fetch variable
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_Key}`);
      console.log(res);
      const data = await res.json();

      // We use data.result to get direct access to the objects of the array
      console.log(data.results);

      // set foodData state to data.results
      setFoodData(data.results);
      console.log(foodData);
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
