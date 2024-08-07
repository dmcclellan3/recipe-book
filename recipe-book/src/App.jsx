import React, { useState } from 'react';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="App">
      <h1>Dish Depot</h1>
      <RecipeForm addRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
