export const initialState = {
  sortByPrice: false,
  filterByCategories: [],
  filterByRating: 0,
  search: "",
};

export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "SORT_BY_PRICE":
      return { ...state, sortByPrice: payload };
    case "FILTER_BY_CATEGORIES":
      return { ...state, filterByCategories: payload };
    case "FILTER_BY_RATING":
      return { ...state, filterByRating: payload };
    case "FILTER_BY_SEARCH":
      return { ...state, search: payload };
    case "CLEAR_FILTERS":
      return {
        ...state,
        sortByPrice: false,
        filterByCategories: [],
        filterByRating: 0,
        search: "",
      };

    default:
      return state;
  }
};
