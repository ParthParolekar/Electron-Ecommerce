import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./Context/AuthContext/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./Context/FilterContext/FilterContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <FilterProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FilterProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
