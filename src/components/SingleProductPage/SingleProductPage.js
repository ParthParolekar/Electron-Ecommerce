import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import CartButton from "../CartButton/CartButton";
import WishlistButton from "../WishlistButton/WishlistButton";

const SingleProductPage = () => {
  const [product, setProduct] = useState();
  const { productId } = useParams();
  useEffect(async () => {
    try {
      const response = await axios.get(`/api/products/${productId}`);
      setProduct(response.data.product);
    } catch (error) {
      console.log(error);
    }
  }, []);
  console.log(product);
  return (
    <div className="single-product">
      {product && <Card product={product} singleProduct={true} />}
      {product && (
        <div className="product-info">
          <h3>{product.title}</h3>
          <div className="card-subtext">
            <span className="cost-price">₹{product.costPrice}</span>
            <span className="selling-price">₹{product.sellingPrice}</span>
            <div>{product.rating}/5</div>
          </div>
          <WishlistButton product={product} />
          <CartButton product={product} />
        </div>
      )}
    </div>
  );
};

export default SingleProductPage;
