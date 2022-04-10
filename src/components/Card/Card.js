import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/AuthContext";
import { useUser } from "../../Context/UserContext/UserContext";
import CartButton from "../CartButton/CartButton";
import QuantityButtons from "../QuantityButtons/QuantityButtons";
import WishlistButton from "../WishlistButton/WishlistButton";

const Card = ({ product }) => {
  const {
    _id,
    discount,
    img,
    imgAlt,
    title,
    costPrice,
    sellingPrice,
    rating,
    qty,
  } = product;

  return (
    <div className="card card-shadow vertical-card">
      <div className="card-header">
        <span className="badge badge-primary">{`${discount}% off`}</span>
        <img src={img} alt={imgAlt} className="card-image" />
      </div>
      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="card-subtext">
          <span className="cost-price">₹{costPrice}</span>
          <span className="selling-price">₹{sellingPrice}</span>
          <div>{rating}/5</div>
        </div>
      </div>
      <div className="card-buttons flex-row justify-center align-center flex-wrap">
        {qty > 0 && <QuantityButtons qty={qty} _id={_id} />}
        <CartButton product={product} />
        <WishlistButton product={product} />
      </div>
    </div>
  );
};

export default Card;
