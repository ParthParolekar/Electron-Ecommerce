import React, { useState } from "react";
import bigLogo from "../../assets/20220206_152352.png";
import logo from "../../assets/20220203_122320.png";

import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/AuthContext";

const Navbar = ({ userLoggedIn }) => {
  const [navLinksVisible, setNavLinksVisible] = useState(false);
  const [, dispatch] = useAuth();

  const loggedOutUser = {
    foundUser: {
      _id: null,
      firstName: null,
      lastName: null,
      email: null,
      cart: [],
      wishlist: [],
      id: null,
    },
    encodedToken: null,
  };

  const logOutHandler = () => {
    dispatch({ type: "LOGOUT_USER", payload: loggedOutUser });
    localStorage.removeItem("jwt");
  };
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
        {!userLoggedIn ? (
          <Link to="/authentication">
            <button className="btn btn-primary">Login</button>
          </Link>
        ) : (
          <button onClick={logOutHandler} className="btn btn-primary">
            Logout
          </button>
        )}

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
