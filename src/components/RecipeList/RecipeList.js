import React, { useEffect, useState } from "react";
import RecipeListitems from "../RecipeListitems";
import "./RecipeList.css";
import axios from "axios";
import Pagination from "../Pagination";

function RecipeList() {
  const [recipes, setRecipes] = useState({
    currentPage: 0,
    totalPages: 0,
    recipes: [],
  });
  const [filter, setFilter] = useState("");
  const [currentPage, setPage] = useState(1);

  const fetchRecipes = async () => {
    const fetchedRecipes = await axios(
      `http://localhost:8081/recipes/?page=${currentPage}&search=${filter}`
    );
    setRecipes(fetchedRecipes.data);
  };

  useEffect(() => {
    fetchRecipes();
  }, [currentPage, filter, recipes]);

  return (
    <div className="listItem">
      <div className="listItem1">
        <h1>Recipes Overview</h1>
        <input
          className="input"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          placeholder="filter"
        ></input>

        <RecipeListitems recipes={recipes}></RecipeListitems>
        <Pagination></Pagination>
      </div>
    </div>
  );
}

export default RecipeList;
