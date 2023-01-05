import React from "react";
import { useFilter } from "../../Context/FilterContext/FilterContext";

const SearchBar = () => {
  const [filterState, filterDispatch] = useFilter();

  const searchInputHandler = (e) => {
    setTimeout(() => {
      filterDispatch({ type: "FILTER_BY_SEARCH", payload: e.target.value });
    }, 500);
  };
  return (
    <div className="search flex-row align-center space-between">
      <input
        type="text"
        placeholder="Looking for something?"
        onChange={(e) => searchInputHandler(e)}
      />
      <i className="fas fa-search"></i>
    </div>
  );
};

export default SearchBar;
