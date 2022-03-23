import React from "react";

const SearchBar = () => {
  return (
    <div className="search flex-row align-center space-between">
      <input type="text" placeholder="Looking for something?" />
      <i className="fas fa-search"></i>
    </div>
  );
};

export default SearchBar;
