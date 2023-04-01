import React from "react";

function Filter({ selectedHouse, onNewSelection }) {

  return (
    <div className="filter">
      <label>Search Students by House: </label>
      <select value={selectedHouse} onChange={e => onNewSelection(e.target.value)}>
        <option value="All">All</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
    </div>
  );
}

export default Filter;