//  Funciones para el control de usuarios
export function signup() {
  let apiUrl = "http://127.0.1.1:82/minisuper/api.php?action=signup";
  let user = document.getElementsByName("user")[0].value;
  let password = document.getElementsByName("password")[0].value;
  let nombre = document.getElementsByName("nombre")[0].value;
  let apellido = document.getElementsByName("apellido")[0].value;
  let email = document.getElementsByName("email")[0].value;

  let data = {
    user: user,
    password: password,
    nombre: nombre,
    apellido: apellido,
    email: email,
  };
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud"); // Maneja errores de estado HTTP
      }
      return response.json();
    })
    .then((data) => {
      if (data.status === "success") {
        alert("Usuario registrado correctamente.");
        window.location.href = "/login";
      } else {
        alert("Error al registrar usuario.");
      }
    })
    .catch((error) => console.error("Error al registrar usuario:", error));
}

export function loginR() {
  let apiUrl = "http://127.0.0.1:82/minisuper/api.php?action=login";
  let user = document.getElementsByName("user")[0].value;
  let password = document.getElementsByName("password")[0].value;

  let data = {
    user: user,
    password: password,
  };

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud"); // Maneja errores de estado HTTP
      }
      return response.json();
    })
    .then((data) => {
      if (data.status === "success") {
        alert("Bienvenido " + data.user["nombre"]);
        localStorage.setItem("userSes", JSON.stringify(data.user));
        window.location.href = "/productList";
      } else {
        alert("Usuario o contraseña incorrectos.");
      }
    })
    .catch((error) => console.error("Error al iniciar sesión:", error));
}

export function logout() {
  localStorage.removeItem("user");
  window.location.href = "/login"; // Redirigir a la página de inicio de sesión
}
