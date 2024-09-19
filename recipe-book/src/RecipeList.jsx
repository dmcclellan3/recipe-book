import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipes">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-item">
          <h3>{recipe.name}</h3>
          <p><strong>Category:</strong> {recipe.category}</p>
          <p><strong>Description:</strong> {recipe.description}</p>
          <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
