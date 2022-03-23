import React from "react";

const Card = ({ discount, img, imgAlt, title, costPrice, sellingPrice }) => {
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
        </div>
      </div>
      <div className="card-buttons flex-row justify-center align-center flex-wrap">
        <button className="btn btn-primary text-btn">ADD TO CART</button>
        <button className="btn btn-outline-secondary text-btn">WISHLIST</button>
      </div>
    </div>
  );
};

export default Card;
