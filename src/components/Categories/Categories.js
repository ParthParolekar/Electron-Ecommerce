import axios from "axios";
import React, { useState, useEffect } from "react";

import CategoryCard from "../CategoryCard/CategoryCard";

const Categories = () => {
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get("/api/products");
      setProductList(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    setCategories(
      productList.reduce((prev, curr) => {
        if (!prev.includes(curr.categoryName)) {
          prev.push(curr.categoryName);
        }
        return prev;
      }, [])
    );
  }, [productList]);
  return (
    <>
      <section className="product-list">
        <div className="product-list-title">
          <h3>Categories</h3>
        </div>
        <div className="card-container flex-row align-center justify-center flex-wrap mg-lg-top-bottom">
          {categories.map((category) => {
            return <CategoryCard key={category} categoryName={category} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Categories;
