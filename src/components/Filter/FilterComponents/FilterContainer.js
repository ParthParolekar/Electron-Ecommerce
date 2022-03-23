import React from "react";
import { useState } from "react";

const FilterContainer = () => {
  const [showRatingFilter, setShowRatingFilter] = useState(false);
  const [showPriceSorting, setShowPriceSorting] = useState(false);
  const [showGenreFilter, setShowGenreFilter] = useState(false);
  return (
    <>
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
            <input type="radio" name="price" id="high-to-low" /> High to Low
          </label>

          <label htmlFor="low-to-high">
            <input type="radio" name="price" id="low-to-high" /> Low to High
          </label>
        </div>
      </div>

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
            <input type="radio" name="rating" id="5-stars" /> 5 stars
          </label>

          <label htmlFor="4+stars">
            <input type="radio" name="rating" id="4+stars" /> 4+ stars
          </label>

          <label htmlFor="3+stars">
            <input type="radio" name="rating" id="3+stars" /> 3+ stars
          </label>

          <label htmlFor="2+stars">
            <input type="radio" name="rating" id="2+stars" /> 2+ stars
          </label>

          <label htmlFor="1+stars">
            <input type="radio" name="rating" id="1+stars" /> 1+ stars
          </label>
        </div>
      </div>

      <div className="filter-container">
        <div
          className="filter"
          id="genre-filter"
          onClick={() => setShowGenreFilter(!showGenreFilter)}
        >
          <h3 className="filter-name">Genre</h3>
          <i className="fas fa-chevron-down"></i>
        </div>

        <div
          className={
            showGenreFilter
              ? "filter-dropdown filter-dropdown-show"
              : "filter-dropdown filter-dropdown-hide"
          }
          id="genre-filter-options"
        >
          <label htmlFor="adventure">
            <input type="checkbox" name="genre" id="adventure" />
            Adventure
          </label>
          <label htmlFor="action">
            <input type="checkbox" name="genre" id="action" />
            Action
          </label>

          <label htmlFor="indie">
            <input type="checkbox" name="genre" id="indie" />
            Indie
          </label>

          <label htmlFor="rpg">
            <input type="checkbox" name="genre" id="rpg" />
            RPG
          </label>

          <label htmlFor="open-world">
            <input type="checkbox" name="genre" id="open-world" />
            Open World
          </label>
        </div>
      </div>
    </>
  );
};

export default FilterContainer;
