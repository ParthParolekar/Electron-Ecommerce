import React from "react";
import { useState } from "react";

const CartInfo = ({ cartItems }) => {
  const initialValue = { costPrice: 0, sellingPrice: 0 };

  const total = cartItems.reduce(
    (previous, current) => ({
      ...previous,
      costPrice: previous.costPrice + current.costPrice * current.qty,
      sellingPrice: previous.sellingPrice + current.sellingPrice * current.qty,
    }),
    initialValue
  );

  return (
    <div className="cart-info">
      <p className="text-lg total">Total</p>
      <div className="cart-total-price">
        <span className="selling-price black text-md">
          ₹{total.sellingPrice}
        </span>
        <span className="cost-price">₹{total.costPrice}</span>
        {/* <span>50% off</span> */}
      </div>
      <button className="btn btn-secondary">Checkout</button>
    </div>
  );
};

export default CartInfo;
