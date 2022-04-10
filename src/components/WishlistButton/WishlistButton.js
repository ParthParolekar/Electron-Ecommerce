import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { useUser } from "../../Context/UserContext/UserContext";

const WishlistButton = ({ product }) => {
  const [authState] = useAuth();
  const [userState, userDispatch] = useUser();
  const navigate = useNavigate();

  const addToWishlist = async () => {
    if (authState.encodedToken === null) {
      navigate("/login");
    } else {
      try {
        await axios
          .post(
            "/api/user/wishlist",
            {
              product,
            },
            {
              headers: { authorization: authState.encodedToken },
            }
          )
          .then((res) => {
            userDispatch({
              type: "WISHLIST_HANDLER",
              payload: res.data.wishlist,
            });
          });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeFromWishlist = async () => {
    try {
      await axios
        .delete(
          `/api/user/wishlist/${product._id}`,
          {
            headers: { authorization: authState.encodedToken },
          },
          {
            product,
          }
        )
        .then((res) => {
          userDispatch({
            type: "WISHLIST_HANDLER",
            payload: res.data.wishlist,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return !userState.wishlist.find((item) => item._id === product._id) ? (
    <button
      className="btn btn-outline-secondary text-btn"
      onClick={addToWishlist}
    >
      WISHLIST
    </button>
  ) : (
    <button
      className="btn btn-outline-secondary text-btn"
      onClick={removeFromWishlist}
    >
      REMOVE FROM WISHLIST
    </button>
  );
};

export default WishlistButton;
