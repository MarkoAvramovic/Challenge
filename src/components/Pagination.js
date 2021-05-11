import React from "react";

function Pagination(props) {
  return (
    <div>
      <button onClick={props.onChange}>1</button>
      <button onClick={props.onChange}>2</button>
      <button onClick={props.onChange}>3</button>
      <button onClick={props.onChange}>4</button>
      <button onClick={props.onChange}>5</button>
      <button onClick={props.onChange}>6</button>
      <button onClick={props.onChange}>7</button>
      <button onClick={props.onChange}>8</button>
      <button onClick={props.onChange}>9</button>
      <button onClick={props.onChange}>10</button>
    </div>
  );
}

export default Pagination;
