import React, { useEffect, useState } from "react";
import productListT from "../src/View/Product/ProductList.html";
import { loadProducts } from "./Js/cargarProd";
import { loadCategory } from "./Js/cargarProd";
import { loadSubCategory } from "./Js/cargarProd";

const ProductList = () => {
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  const listCategory = () => {
    loadCategory();
  };

  const listSubCategory = (category) => {
    loadSubCategory(category);
  };

  useEffect(() => {
    listCategory();
  }, []);

  useEffect(() => {
    loadProducts(category, subCategory);
  }, [category, subCategory]);

  useEffect(() => {
    if (category) {
      listSubCategory(category);
    }
  }, [category]);

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      dangerouslySetInnerHTML={{ __html: productListT }}
    />
  );
};

export default ProductList;
