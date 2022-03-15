import React, { useState } from "react";
import bigLogo from "../../assets/20220206_152352.png";
import logo from "../../assets/20220203_122320.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [navLinksVisible, setNavLinksVisible] = useState(false);

  return (
    <nav className="navigation flex-row space-between align-center">
      <div className="left-navigation flex-row align-center">
        <i
          onClick={() => setNavLinksVisible(!navLinksVisible)}
          className="fas fa-bars hamburger"
          id="hamburger"
        ></i>

        <Link to="/">
          <img src={bigLogo} className="big-logo" alt="logo" />
        </Link>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
      </div>

      <div
        className={
          navLinksVisible === false
            ? "nav-links nav-links-not-visible"
            : "nav-links nav-links-visible"
        }
      >
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/browse">
          Browse
        </Link>
      </div>

      <div className="right-navigation navigation-icons flex-row align-center">
        <Link to="/authentication">
          <button className="btn btn-primary">Login</button>
        </Link>

        <Link to="/wishlist">
          <p className="badge-on-icon">
            <i className="far fa-bookmark"></i>
            <span className="badge badge-primary icon-badge">4</span>
          </p>
        </Link>

        <Link to="/cart">
          <p className="badge-on-icon">
            <i className="fas fa-shopping-cart"></i>
            <span className="badge badge-primary icon-badge">4</span>
          </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
