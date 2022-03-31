import React from "react";
import {
  FilterButtons,
  FilterContainer,
  FilterHeader,
} from "./FilterComponents";

const Filter = ({ showFilter, setShowFilter, applyFilters }) => {
  return (
    <div
      className={
        showFilter
          ? "filters-section show-filters"
          : "filters-section hide-filters"
      }
      id="filters-section"
    >
      <FilterHeader setShowFilter={setShowFilter} />
      <FilterContainer />
      <FilterButtons applyFilters={applyFilters} />
    </div>
  );
};

export default Filter;
