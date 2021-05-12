import React from "react";
import Classes from "../Pagination/Pagination.module.css";

function Pagination(props) {
  const paginationItems = [];
  for (let i = 1; i <= props.totalPages; i++) {
    paginationItems.push(i);
  }

  return (
    <div className={Classes.Box}>
      {paginationItems.map((item) => {
        return (
          <button
            key={item}
            className={Classes.Pagination}
            onClick={() => props.onChange(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
