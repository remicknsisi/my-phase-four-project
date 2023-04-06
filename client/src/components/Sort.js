import React from "react";

function Sort({ onCheck, isChecked }) {

  return (
    <div className="filter">
      <label>Sort Teachers by Ratings High to Low: </label>
      <input type="checkbox" value={isChecked} onChange={() => onCheck()}>
      </input>
    </div>
  );
}

export default Sort;