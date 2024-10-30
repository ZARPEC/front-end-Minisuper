import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Verifica el estado de sesión al cargar el componente
    const user = JSON.parse(localStorage.getItem("userSes"));
    setIsLoggedIn(!!user); // Actualiza el estado si hay usuario en sesión
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userSes");
    setIsLoggedIn(false);
    window.location.href = "/"; // Redirige a la página de inicio
  };

  // Función para alternar la visibilidad del sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Cambia el estado de la visibilidad
  };

  return (
    <div className="MainSideBar">
      {/* Botón para abrir/cerrar sidebar */}
      <div className="toggle-btn" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Sidebar */}
      <div id="sidebar" className={isSidebarOpen ? "active" : ""}>
        <div className="elemenBar">
          <ul>
            <li>
              <a href="/">
                <i className="fa-solid fa-star"></i>Inicio
              </a>
            </li>
            <li>
              <a href="/productList">
                <i className="fa-solid fa-star"></i>Categorias
              </a>
            </li>
            <li>
              <a href="/shopCart">
                <i className="fa-solid fa-star"></i>Carrito
              </a>
            </li>
            <li>
              {isLoggedIn ? (
                <a
                  href="/logout"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                >
                  <i className="fa-solid fa-star"></i> Cerrar Sesión
                </a>
              ) : (
                <a href="/login">
                  <i className="fa-solid fa-star"></i> Iniciar Sesión
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
