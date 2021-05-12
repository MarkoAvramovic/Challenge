import React from "react";
import axios from "axios";
import "./RecipeList/RecipeList.css";

function RecipeListItem(props) {
  const deleteRecipe = async (id) => {
    await axios.delete(`http://localhost:8081/recipes/${id}`);
  };

  return (
    <div className="Item">
      <div className="button">
        <div className="recipeTitle">
          <h3>{props.title}</h3>
        </div>
        <button onClick={() => deleteRecipe(props.id)} className="deleteButton">
          Delete
        </button>
      </div>

      <div className="recipeDescription">{props.description}</div>
    </div>
  );
}

export default RecipeListItem;
