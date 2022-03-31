import React from "react";
import { useEffect } from "react";
import { useFilter } from "../../../Context/FilterContext/FilterContext";

const FilterButtons = ({ applyFilters }) => {
  const [filterState, dispatchFilter] = useFilter();
  const clearFilters = () => {
    dispatchFilter({ type: "CLEAR_FILTERS" });
  };
  return (
    <div className="filter-btns">
      {/* <button className="btn abcd btn-primary" onClick={applyFilters}>
        Apply
      </button> */}
      <button className="btn btn-primary" onClick={clearFilters}>
        Clear
      </button>
    </div>
  );
};

export default FilterButtons;
