import React, { useState } from "react";
import bigLogo from "../../assets/20220206_152352.png";
import logo from "../../assets/20220203_122320.png";

const Navbar = () => {
  const [navLinksVisible, setNavLinksVisible] = useState(false);

  console.log(navLinksVisible);

  return (
    <nav className="navigation flex-row space-between align-center">
      <div className="left-navigation flex-row align-center">
        <i
          onClick={() => setNavLinksVisible(!navLinksVisible)}
          className="fas fa-bars hamburger"
          id="hamburger"
        ></i>

        <img src={bigLogo} className="big-logo" alt="logo" />
        <img src={logo} className="logo" alt="logo" />
      </div>

      <div
        className={
          navLinksVisible === false
            ? "nav-links nav-links-not-visible"
            : "nav-links nav-links-visible"
        }
      >
        <a href="#">Home</a>
        <a href="./Components/product/product.html">Browse</a>
      </div>

      <div className="right-navigation navigation-icons flex-row align-center">
        <a href="./authentication.html">
          <button className="btn btn-primary">Login</button>
        </a>

        <a href="./Components/wishlist/wishlist.html" className="badge-on-icon">
          <i className="far fa-bookmark"></i>
          <span className="badge badge-primary icon-badge">4</span>
        </a>

        <a href="./Components/cart/cart.html" className="badge-on-icon">
          <i className="fas fa-shopping-cart"></i>
          <span className="badge badge-primary icon-badge">4</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
