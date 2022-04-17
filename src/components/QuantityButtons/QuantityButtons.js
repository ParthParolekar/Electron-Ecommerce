import axios from "axios";
import React from "react";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { useUser } from "../../Context/UserContext/UserContext";

const QuantityButtons = ({ qty, _id }) => {
  const [authState] = useAuth();
  const [userState, userDispatch] = useUser();

  const increaseQuantity = async () => {
    try {
      await axios
        .post(
          `/api/user/cart/${_id}`,
          {
            action: {
              type: "increment",
            },
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
    } catch {
      (error) => console.log(error);
    }
  };
  const decreaseQuantity = async () => {
    try {
      await axios
        .post(
          `/api/user/cart/${_id}`,
          {
            action: {
              type: "decrement",
            },
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
    } catch {
      (error) => console.log(error);
    }
  };

  return (
    <div className="flex-row justify-center align-center">
      <button className="btn btn-primary qty-btn" onClick={decreaseQuantity}>
        -
      </button>
      <span>{qty}</span>
      <button className="btn btn-primary qty-btn" onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
};

export default QuantityButtons;
