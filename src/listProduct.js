import React, { useEffect, useState } from "react";
import productListT from "../src/View/Product/ProductList.html";
import { loadProducts } from "./Js/cargarProd";
import { loadCategory } from "./Js/cargarProd";

const ProductList = () => {
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

const listCategory = () => {
    loadCategory();
  };

  useEffect(() => {
    listCategory();
  }, []);

  useEffect(() => {
    loadProducts(category, subCategory);
  }, [category, subCategory]);

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      dangerouslySetInnerHTML={{ __html: productListT }}
    />
  );
};

export default ProductList;
