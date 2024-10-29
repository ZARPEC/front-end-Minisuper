import React, { useEffect, useState } from "react";
import sidebarTemplate from "./View/Partials/SideBar.html";

const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  useEffect(() => {
    // Agrega el evento al enlace de "Cerrar Sesión" después de cada renderizado
    if (isLoggedIn) {
      const logoutLink = document.getElementById("logout-link");
      if (logoutLink) {
        logoutLink.addEventListener("click", (event) => {
          event.preventDefault(); // Evita la navegación
          handleLogout(); // Llama a la función de logout
        });
      }
      return () => {
        // Limpia el evento al desmontar o cambiar isLoggedIn
        if (logoutLink) {
          logoutLink.removeEventListener("click", handleLogout);
        }
      };
    }
  }, [isLoggedIn]);

  return (
    <div
      style={{ height: "100%" }}
      dangerouslySetInnerHTML={{
        __html: sidebarTemplate.replace(
          '<a href="/login"><i class="fa-solid fa-star"></i> iniciar Sesión</a>',
          isLoggedIn
            ? `<a href="#" id="logout-link"><i class="fa-solid fa-star"></i> Cerrar Sesión</a>`
            : `<a href="/login"><i class="fa-solid fa-star"></i> Iniciar Sesión</a>`
        ),
      }}
    />
  );
};

export default Sidebar;
