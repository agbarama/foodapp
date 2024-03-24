import styles from "../styles/instructions.module.css";

const Instructions = ({ food, isLoading }) => {
  return (
    <>
      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {/* Ternary operator to watch for the api request and display the recipe instrutions */}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </>
  );
};

export default Instructions;
