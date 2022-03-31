import React from "react";
import { useFilter } from "../../../../Context/FilterContext/FilterContext";

const RatingFilter = ({ setShowRatingFilter, showRatingFilter }) => {
  const [filterState, filterDispatch] = useFilter();
  return (
    <div className="filter-container">
      <div
        className="filter"
        id="rating-filter"
        onClick={() => setShowRatingFilter(!showRatingFilter)}
      >
        <h3 className="filter-name">Rating</h3>
        <i className="fas fa-chevron-down"></i>
      </div>

      <div
        className={
          showRatingFilter
            ? "filter-dropdown filter-dropdown-show"
            : "filter-dropdown filter-dropdown-hide"
        }
        id="rating-filter-options"
      >
        <label htmlFor="5-stars">
          <input
            type="radio"
            name="rating"
            onChange={() =>
              filterDispatch({ type: "FILTER_BY_RATING", payload: 5 })
            }
            checked={filterState.filterByRating === 5}
          />{" "}
          5 stars
        </label>

        <label htmlFor="4+stars">
          <input
            type="radio"
            name="rating"
            onChange={() =>
              filterDispatch({ type: "FILTER_BY_RATING", payload: 4 })
            }
            checked={filterState.filterByRating === 4}
          />{" "}
          4+ stars
        </label>

        <label htmlFor="3+stars">
          <input
            type="radio"
            name="rating"
            onChange={() =>
              filterDispatch({ type: "FILTER_BY_RATING", payload: 3 })
            }
            checked={filterState.filterByRating === 3}
          />{" "}
          3+ stars
        </label>

        <label htmlFor="2+stars">
          <input
            type="radio"
            name="rating"
            onChange={() =>
              filterDispatch({ type: "FILTER_BY_RATING", payload: 2 })
            }
            checked={filterState.filterByRating === 2}
          />{" "}
          2+ stars
        </label>

        <label htmlFor="1+stars">
          <input
            type="radio"
            name="rating"
            onChange={() =>
              filterDispatch({ type: "FILTER_BY_RATING", payload: 1 })
            }
            checked={filterState.filterByRating === 1}
          />{" "}
          1+ stars
        </label>
      </div>
    </div>
  );
};

export default RatingFilter;
