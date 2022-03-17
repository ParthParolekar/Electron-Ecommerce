import "./App.css";
import Mockman from "mockman-js";

import { Navbar } from "./components/";
import { Authentication, Browse, Cart, Home, Wishlist } from "./pages";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "./Context/AuthContext/AuthContext";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState();
  const [authState] = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (authState.encodedToken === null) {
      setUserLoggedIn(false);
    } else {
      setUserLoggedIn(true);
    }
  }, [authState]);

  return (
    <div className="App">
      {/* <BrowserRouter>  */}
      <Navbar userLoggedIn={userLoggedIn} />
      <Routes>
        <Route path="/mock" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/browse" element={<Browse />} />

        <Route
          path="/cart"
          element={
            userLoggedIn ? (
              <Cart />
            ) : (
              <Navigate
                to="/authentication"
                state={{ from: location }}
                replace
              />
            )
          }
        />
        <Route
          path="/wishlist"
          element={
            userLoggedIn ? (
              <Wishlist />
            ) : (
              <Navigate
                to="/authentication"
                state={{ from: location }}
                replace
              />
            )
          }
        />
      </Routes>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
