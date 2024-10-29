import React, { useEffect } from "react";
import ShopCartTem from "./View/Product/ShopCart.html";
import { mostrarCarrito, hiddenProduct } from "./Js/ShopCart";

const ShopCart = () => {
  useEffect(() => {

    const initCartDisplay = () => {
      mostrarCarrito();  // Muestra los productos en el carrito
      hiddenProduct();    // Agrega los productos como campos ocultos
    };
    initCartDisplay();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: ShopCartTem }} />;
};

export default ShopCart;
