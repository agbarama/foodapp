import styles from "../styles/recipecard.module.css";

const RecipeCard = ({ food }) => {
  return (
    <div className={styles.recipeCard}>
      <h1 className={styles.recipeName}>{food.title}</h1>
      <img className={styles.recipeImage} src={food.image} alt="" />
      <div className={styles.recipeDetails}>
        <span>
          <strong>⌚{food.readyInMinutes} Minutes</strong>
        </span>
        <span>
          👪<strong>Serves {food.servings}</strong>
        </span>
        <span>
          <strong>
            {food.vegetarian ? "🥕 Vergeterian" : "🍖 Non-vergeterian"}
          </strong>
        </span>
        <strong>
          <span>{food.vegan ? "🐮 Vegan" : ""}</span>
        </strong>
      </div>
      <div>
        <strong>
          <span>${food.pricePerServing / 100} Per serving</span>
        </strong>
      </div>
    </div>
  );
};

export default RecipeCard;
