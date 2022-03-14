import "./App.css";

import { Navbar } from "./components/components";
import { Authentication, Browse, Cart, Home, Wishlist } from "./pages/pages";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Authentication" element={<Authentication />} />
          <Route path="/Browse" element={<Browse />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Wishlist" element={<Wishlist />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
