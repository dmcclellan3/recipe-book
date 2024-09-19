import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [category, setCategory] = useState('');

  // State to manage whether the form is valid
  const [isFormValid, setIsFormValid] = useState(false);

  // State to manage display of the required fields message
  const [showRequiredMessage, setShowRequiredMessage] = useState(false);

  // Function to check if all fields are filled
  const checkFormValidity = () => {
    if (name.trim() && description.trim() && ingredients.trim() && category) {
      setIsFormValid(true);
      setShowRequiredMessage(false); // Hide message when form is valid
    } else {
      setIsFormValid(false);
      setShowRequiredMessage(true); // Show message if form is invalid
    }
  };

  // Update fields and check form validity
  const handleNameChange = (e) => {
    setName(e.target.value);
    checkFormValidity();
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    checkFormValidity();
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
    checkFormValidity();
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    checkFormValidity();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      addRecipe({ name, description, ingredients, category });
      setName('');
      setDescription('');
      setIngredients('');
      setCategory('');
      setIsFormValid(false); // Reset form validity after submission
      setShowRequiredMessage(false); // Hide message after successful submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
        required
      />
      <input
        type="text"
        placeholder="Ingredients"
        value={ingredients}
        onChange={handleIngredientsChange}
        required
      />
      <select value={category} onChange={handleCategoryChange} required>
        <option value="">Select Category</option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Dessert">Dessert</option>
      </select>

      {showRequiredMessage && (
        <p style={{ color: 'red' }}>All fields are required to add a recipe.</p>
      )}

      <button type="submit" disabled={!isFormValid}>
        Add Recipe
      </button>
    </form>
  );
};

export default RecipeForm;
