import React from "react";
import { useFilter } from "../../Context/FilterContext/FilterContext";
import { useNavigate } from "react-router-dom";

const CategoryCard = ({ categoryName }) => {
  const navigate = useNavigate();
  const [filterState, filterDispatch] = useFilter();

  const categoryClickHandler = (categoryName) => {
    filterDispatch({
      type: "FILTER_BY_CATEGORIES",
      payload: filterState.filterByCategories.concat(categoryName),
    });
    navigate("/browse");
  };
  return (
    <div
      onClick={() => categoryClickHandler(categoryName)}
      className="category-card card-shadow flex-column justify-center align-center"
    >
      <h3>{categoryName}</h3>
    </div>
  );
};

export default CategoryCard;
