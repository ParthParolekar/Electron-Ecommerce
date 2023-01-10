import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { products } from "../../backend/db/products";
import { Card, Filter, SearchBar } from "../../components";
import { useFilter } from "../../Context/FilterContext/FilterContext";

const Browse = () => {
  const [showFilter, setShowFilter] = useState(false);

  const [filterState, filterDispatch] = useFilter();
  const [productList, setProductList] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/products");
      setProductList(response.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filterState]);

  useEffect(() => {
    setFilteredProducts(productList);
    applyFilters();
  }, [productList]);

  const applyFilters = () => {
    const { sortByPrice, filterByCategories, filterByRating, search } =
      filterState;
    let displayProducts = productList;

    if (search.length > 0) {
      displayProducts = displayProducts.filter(
        (product) =>
          product.title.slice(0, search.length).toLowerCase() ===
          search.toLowerCase()
      );
    }

    if (filterByCategories.length > 0) {
      displayProducts = [].concat.apply(
        [],
        filterByCategories.map((category) =>
          displayProducts.filter((product) => product.categoryName === category)
        )
      );
    }
    if (filterByRating) {
      displayProducts = displayProducts.filter(
        (product) => product.rating >= filterByRating
      );
    }

    if (sortByPrice) {
      displayProducts =
        sortByPrice === "lowToHigh"
          ? [...displayProducts].sort((a, b) => a.sellingPrice - b.sellingPrice)
          : [...displayProducts].sort(
              (a, b) => b.sellingPrice - a.sellingPrice
            );
    }

    setFilteredProducts(displayProducts);
  };

  return (
    <div>
      <Filter
        applyFilters={applyFilters}
        showFilter={showFilter}
        setShowFilter={setShowFilter}
      />
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
          {loading && <h3>Loading...</h3>}
          {!loading && filteredProducts.length === 0 && (
            <h3>No results found</h3>
          )}
          {filteredProducts.map((product) => (
            <Card
              product={product}
              _id={product._id.toString()}
              discount={product.discount}
              img={product.img}
              imgAlt={product.imgAlt}
              title={product.title}
              costPrice={product.costPrice}
              sellingPrice={product.sellingPrice}
              rating={product.rating}
              key={product._id}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Browse;
