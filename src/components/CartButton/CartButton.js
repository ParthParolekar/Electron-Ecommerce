import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { useUser } from "../../Context/UserContext/UserContext";

const CartButton = ({ product }) => {
  const [authState] = useAuth();
  const [userState, userDispatch] = useUser();
  const navigate = useNavigate();

  const addToCart = async () => {
    if (authState.encodedToken === null) {
      navigate("/login");
    } else {
      try {
        await axios
          .post(
            "/api/user/cart",
            {
              product,
            },
            {
              headers: { authorization: authState.encodedToken },
            }
          )
          .then((res) => {
            userDispatch({
              type: "CART_HANDLER",
              payload: res.data.cart,
            });
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeFromCart = async () => {
    try {
      await axios
        .delete(
          `/api/user/cart/${product._id}`,
          {
            headers: { authorization: authState.encodedToken },
          },
          {
            product,
          }
        )
        .then((res) => {
          userDispatch({
            type: "CART_HANDLER",
            payload: res.data.cart,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
  return !userState.cart.find((item) => item._id === product._id) ||
    !authState.encodedToken ? (
    <button className="btn btn-primary text-btn" onClick={addToCart}>
      ADD TO CART
    </button>
  ) : (
    <button className="btn btn-primary text-btn" onClick={removeFromCart}>
      REMOVE FROM CART
    </button>
  );
};
export default CartButton;
