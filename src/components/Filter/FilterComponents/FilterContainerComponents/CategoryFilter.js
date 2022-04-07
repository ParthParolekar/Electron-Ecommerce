import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFilter } from "../../../../Context/FilterContext/FilterContext";

const CategoryFilter = ({ setShowCategoryFilter, showCategoryFilter }) => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);

  const [filterState, filterDispatch] = useFilter();

  useEffect(async () => {
    try {
      const response = await axios.get("/api/products");
      setProductList(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setCategories(
      productList.reduce((prev, curr) => {
        if (!prev.includes(curr.categoryName)) {
          prev.push(curr.categoryName);
        }
        return prev;
      }, [])
    );
  }, [productList]);

  const categoryClickHandler = (e) => {
    if (e.target.checked) {
      filterDispatch({
        type: "FILTER_BY_CATEGORIES",
        payload: filterState.filterByCategories.concat(e.target.value),
      });
    } else {
      filterDispatch({
        type: "FILTER_BY_CATEGORIES",
        payload: filterState.filterByCategories.filter(
          (category) => category !== e.target.value
        ),
      });
    }
  };

  return (
    <div className="filter-container">
      <div
        className="filter"
        id="genre-filter"
        onClick={() => setShowCategoryFilter(!showCategoryFilter)}
      >
        <h3 className="filter-name">Category</h3>
        <i className="fas fa-chevron-down"></i>
      </div>

      <div
        className={
          showCategoryFilter
            ? "filter-dropdown filter-dropdown-show"
            : "filter-dropdown filter-dropdown-hide"
        }
      >
        {categories.map((category, index) => {
          return (
            <label htmlFor={category} key={index}>
              <input
                type="checkbox"
                value={category}
                name={category}
                onChange={categoryClickHandler}
                checked={
                  filterState.filterByCategories &&
                  filterState.filterByCategories.includes(category)
                }
              />
              {category}
            </label>
          );
        })}
        {/* <label htmlFor="adventure">
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
        </label> */}
      </div>
    </div>
  );
};

export default CategoryFilter;
