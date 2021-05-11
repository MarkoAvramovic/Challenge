import React, { useState } from "react";
import axios from "axios";
import "./RecipeList/RecipeList.css";

function RecipeListItem(props) {
  const [deleted, setDeleted] = useState(0);

  const deleteRecipe = async (id) => {
    await axios.delete(`http://localhost:8081/recipes/${id}`);
    setDeleted(deleted + 1);
  };

  return (
    <div className="Item">
      <div className="recipeTitle">
        <h3>{props.title}</h3>
      </div>
      <div className="button">
        <button onClick={() => deleteRecipe(props.id)} className="deleteButton">
          Delete
        </button>
      </div>
      <div className="recipeDescription">{props.description}</div>
    </div>
  );
}

export default RecipeListItem;
