import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <li>
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </li>
  );
};

export default Recipe;
