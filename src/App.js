// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./HomeMain";
import Login from "./login";
import ProductList from "./listProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productList" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
