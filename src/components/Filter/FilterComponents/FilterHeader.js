import React from "react";

const FilterHeader = ({ setShowFilter }) => {
  return (
    <div className="filter-header">
      <h2>Filter</h2>
      <i
        onClick={() => setShowFilter(false)}
        className="fas fa-times filter-exit-btn"
        id="filter-exit-btn"
      ></i>
    </div>
  );
};

export default FilterHeader;
