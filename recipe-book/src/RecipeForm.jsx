import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({ name, description, ingredients: ingredients.split(',') });
    setName('');
    setDescription('');
    setIngredients('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Recipe</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Ingredients:
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
      </label>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
