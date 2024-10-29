import React, { useEffect } from "react";
import LoginTemplate from "./View/user/login.html";
import { loginR } from "./Js/UserControl.js";


const Login = () => {
  useEffect(() => {
    // Escucha el evento de clic solo después de que el componente ha cargado
    const submitButton = document.getElementById("is");
    if (submitButton) {
      submitButton.addEventListener("click", (event) => {
        event.preventDefault(); // Evita el envío automático
        loginR(); // Llama a la función de login solo cuando se hace clic
      });
    }

    // Limpieza del evento para evitar duplicados
    return () => {
      if (submitButton) {
        submitButton.removeEventListener("click", loginR);
      }
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: LoginTemplate }} />;
};

export default Login;
