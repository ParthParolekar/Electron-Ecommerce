import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Card, Filter, SearchBar } from "../../components";

const Browse = () => {
  const [productList, setProductList] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  useEffect(async () => {
    try {
      const response = await axios.get("/api/products");
      setProductList(response.data.products);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <Filter showFilter={showFilter} setShowFilter={setShowFilter} />
      <SearchBar />
      <section className="product-list">
        <div className="product-list-title filter-btn-container">
          <h3>Browse</h3>
          <button
            className="btn btn-outline-secondary filter-btn flex-row align-center"
            id="filter-btn"
            onClick={() => setShowFilter(true)}
          >
            <h4>Filter</h4>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div className="card-container flex-row align-center justify-center flex-wrap">
          {productList.map((product) => (
            <Card
              key={product._id}
              discount={product.discount}
              img={product.img}
              imgAlt={product.imgAlt}
              title={product.title}
              costPrice={product.costPrice}
              sellingPrice={product.sellingPrice}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Browse;
