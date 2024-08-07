import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <Recipe key={index} recipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
