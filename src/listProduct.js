import React, { useEffect, useState } from "react";
import productListT from "../src/View/Product/ProductList.html";
import { loadProducts } from "./Js/cargarProd";
import { loadCategory } from "./Js/cargarProd";
import { loadSubCategory } from "./Js/cargarProd";
import { agregarAlCarrito } from "./Js/ShopCart";

const ProductList = () => {
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);

  const listCategory = () => {
    loadCategory();
  };

  const listSubCategory = (category) => {
    loadSubCategory(category);
  };

  const handleAddToCart = (event) => {
    if (event.target.classList.contains("add-to-cart")) {
      const productId = event.target.getAttribute("data-id");
      const productName = event.target.getAttribute("data-nombre");
      const productPrice = event.target.getAttribute("data-precio");

      agregarAlCarrito({ id: productId, nombre: productName, precio: parseFloat(productPrice), cantidad: 1 });
    }
  };

  useEffect(() => {
    listCategory();
  }, []);

  useEffect(() => {
    loadProducts(category, subCategory);
    // Añade el event listener para los botones "Añadir al carrito"
    document.querySelector(".Product").addEventListener("click", handleAddToCart);

    // Limpia el event listener cuando el componente se desmonte
    return () => document.querySelector(".Product").removeEventListener("click", handleAddToCart);
  }, [category, subCategory]);

  return (
    <div
      style={{ height: "100%", width: "100%" }}
      dangerouslySetInnerHTML={{ __html: productListT }}
    />
  );
};

export default ProductList;
