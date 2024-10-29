// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./HomeMain";
import Login from "./login";
import ProductList from "./listProduct";
import SignupT from "./signup";
import ShopCart from "./ShopCart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/signup" element={<SignupT />} />
        <Route path="/shopCart" element={<ShopCart />} />
      </Routes>
    </Router>
  );
}

export default App;
