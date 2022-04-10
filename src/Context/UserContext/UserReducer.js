export const initialState = { cart: [], wishlist: [] };

export const userReducer = (state, action) => {
  switch (action.type) {
    case "CART_HANDLER":
      return { ...state, cart: action.payload };
    case "WISHLIST_HANDLER":
      return { ...state, wishlist: action.payload };
    default:
      return state;
  }
};
