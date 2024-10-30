import React, { useEffect, useState } from "react";
import { mostrarCarrito, hiddenProduct } from "./Js/ShopCart";

const ShopCart = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verifica el estado de sesión al cargar el componente
    const user = JSON.parse(localStorage.getItem("userSes"));
    setIsLoggedIn(!!user); // Actualiza el estado si hay usuario en sesión
  }, []);

  useEffect(() => {
    const initCartDisplay = () => {
      const cartItems = document.getElementById("cart-items");
      if (cartItems) {
        try {
          mostrarCarrito(); // Muestra los productos en el carrito
          hiddenProduct(); // Agrega los productos como campos ocultos
        } catch (error) {
          console.error("Error al mostrar el carrito:", error);
        }
      } else {
        console.error("El elemento 'cart-items' no se encontró en el DOM.");
      }
    };

    // Usa setTimeout para asegurar que el DOM esté completamente renderizado
    const timeoutId = setTimeout(initCartDisplay, 0);

    return () => clearTimeout(timeoutId); // Limpia el timeout al desmontar el componente
  }, []); // Solo ejecuta este efecto una vez al montar el componente

  return (
    <div id="mainCart" className="mt-5">
      <div id="cart">
        <div className="container" style={{ width: "100%", height: "100%" }}>
          {/* Tabla del carrito de compras */}
          <div className="row">
            <div>
              <table className="table table-bordered">
                <thead className="table-light">
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unitario</th>
                    <th>Subtotal</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody id="cart-items">
                  {/* Aquí se mostrarán los productos del carrito */}
                </tbody>
              </table>
            </div>

            {/* Resumen del pedido */}
            <div>
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Resumen del Pedido</h4>
                  <hr />
                  <p>
                    <strong>Subtotal:</strong> <span id="subtotal">Q0.00</span>
                  </p>
                  <h5>
                    <strong>Total:</strong> <span id="total">Q0.00</span>
                  </h5>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Datos del Cliente */}
      <div id="datosCl">
        <div className="container" style={{ width: "90%", height: "95%" }}>
          {isLoggedIn ? (
            <form>
              <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
                <label htmlFor="nombreCl" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombreCl" name="nombreCl" required />
              </div>
              <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="apellido" name="apellido" required />
              </div>
              <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input type="number" className="form-control" id="telefono" name="telefono" maxLength="8" required />
              </div>
            </form>
          ) : (
            // en caso de no estar loggeado se muestra un mensaje y un boton para iniciar sesion
            <div style={{ display: "flex", alignItems: "center", height: "1rem", justifyContent: "flex-start", flexDirection: "column" }}>
              <h4>Para continuar con el pago, por favor inicie sesión</h4>
              <a href="/login">
                <button type="button" className="btn btn-primary btn-lg" style={{ width: "auto" }}>Iniciar Sesión</button>
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Datos de Envío */}
      <div id="datosEnvio">
        <div className="container" style={{ width: "90%", height: "95%" }}>
          {isLoggedIn && (
            <form>
              <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
                <label htmlFor="departamento" className="form-label">Departamento</label>
                <select className="form-select" id="departamento" name="departamento" required>
                  <option value="" disabled selected>Seleccione un departamento</option>
                </select>
              </div>
              <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
                <label htmlFor="municipio" className="form-label">Municipio</label>
                <select className="form-select" id="municipio" name="municipio" required>
                  <option value="" disabled selected>Seleccione un municipio</option>
                </select>
              </div>
              <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
                <label htmlFor="direccion" className="form-label">Dirección de Envío</label>
                <input type="text" className="form-control" id="direccion" name="direccion" required />
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Detalle de Pagos */}
      <div id="detaPagos">
        <div className="container" style={{ width: "90%", height: "95%" }}>
          {isLoggedIn && (
            <form id="checkout-form">
              <div id="payment-details" className="DetallePago">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label htmlFor="nombreTarjeta" className="form-label">Nombre en la Tarjeta</label>
                  <input type="text" className="form-control" id="nombreTarjeta" name="nombreTarjeta" />
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <label htmlFor="numeroTarjeta" className="form-label">Número de Tarjeta</label>
                  <input type="text" className="form-control" id="numeroTarjeta" name="numeroTarjeta" />
                </div>
                <div style={{ display: "flex" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label htmlFor="vencimiento" className="form-label">Fecha de Vencimiento (MM/AA)</label>
                    <input type="text" className="form-control" id="vencimiento" name="vencimiento" />
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label htmlFor="cvv" className="form-label">CVV</label>
                    <input type="text" className="form-control" id="cvv" name="cvv" />
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", height: "1rem", justifyContent: "center" }}>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: "auto" }}>Finalizar Compra</button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
