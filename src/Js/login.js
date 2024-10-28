
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
        alert("Bienvenido " + data.user);
        window.location.href = "/productList";
      } else {
        alert("Usuario o contraseña incorrectos.");
      }
    })
    .catch((error) => console.error("Error al iniciar sesión:", error));
}
