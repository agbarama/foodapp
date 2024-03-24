import React from "react";

const Ingredients = ({ food, isLoading }) => {
  console.log(food);
  return (
    <>
      <h2>Ingredients</h2>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <div>
            <img
              src={
                `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
              }
              alt=""
            />
            <h3>{item.name}</h3>
            <h3>
              {item.amount} {item.unit}
            </h3>
          </div>
        ))
      )}
    </>
  );
};

export default Ingredients;
