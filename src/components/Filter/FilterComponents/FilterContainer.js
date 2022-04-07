import React from "react";
import { useState } from "react";
import { useFilter } from "../../../Context/FilterContext/FilterContext";
import CategoryFilter from "./FilterContainerComponents/CategoryFilter";
import PriceSorting from "./FilterContainerComponents/PriceSorting";
import RatingFilter from "./FilterContainerComponents/RatingFilter";

const FilterContainer = () => {
  const [showRatingFilter, setShowRatingFilter] = useState(false);
  const [showPriceSorting, setShowPriceSorting] = useState(false);
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);

  const [filterState, filterDispatch] = useFilter();

  return (
    <>
      <PriceSorting
        showPriceSorting={showPriceSorting}
        setShowPriceSorting={setShowPriceSorting}
        filterDispatch={filterDispatch}
      />

      <RatingFilter
        showRatingFilter={showRatingFilter}
        setShowRatingFilter={setShowRatingFilter}
        filterDispatch={filterDispatch}
      />

      <CategoryFilter
        showCategoryFilter={showCategoryFilter}
        setShowCategoryFilter={setShowCategoryFilter}
        filterDispatch={filterDispatch}
      />
    </>
  );
};

export default FilterContainer;
