import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <header className="banner">
      <img
        src="https://burgeebyte.in/wp-content/uploads/2021/08/websites-to-download-games.jpg"
        alt="Banner-image"
      />
      <div className="banner-cover"></div>
      <h1 className="banner-heading">
        One stop for all of your gaming needs
        <Link to="/Browse">
          <button className="btn btn-secondary">
            See Products <i className="fas fa-arrow-right"></i>
          </button>
        </Link>
      </h1>
    </header>
  );
};

export default Banner;
