import React from "react";

import RecipeListItem from "./RecipeListItem";

const RecipeListitems = (props) => {
  return (
    <div type="flex" justify="center">
      <div>
        <ul>
          {props.recipes.recipes.map((item) => (
            <RecipeListItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeListitems;
