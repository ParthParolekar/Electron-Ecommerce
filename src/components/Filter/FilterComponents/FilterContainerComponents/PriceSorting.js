import React from "react";
import { useFilter } from "../../../../Context/FilterContext/FilterContext";

const PriceSorting = ({
  setShowPriceSorting,
  showPriceSorting,
  filterDispatch,
}) => {
  const [filterState] = useFilter();
  return (
    <div className="filter-container">
      <div
        onClick={() => setShowPriceSorting(!showPriceSorting)}
        className="filter"
        id="price-filter"
      >
        <h3 className="filter-name">Price</h3>
        <i className="fas fa-chevron-down"></i>
      </div>

      <div
        className={
          showPriceSorting
            ? "filter-dropdown filter-dropdown-show"
            : "filter-dropdown filter-dropdown-hide"
        }
        id="price-filter-options"
      >
        <label htmlFor="high-to-low">
          <input
            type="radio"
            name="price"
            onChange={() =>
              filterDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
            }
            checked={filterState.sortByPrice === "highToLow"}
          />{" "}
          High to Low
        </label>

        <label htmlFor="low-to-high">
          <input
            type="radio"
            name="price"
            onChange={() =>
              filterDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
            }
            checked={filterState.sortByPrice === "lowToHigh"}
          />{" "}
          Low to High
        </label>
      </div>
    </div>
  );
};

export default PriceSorting;
