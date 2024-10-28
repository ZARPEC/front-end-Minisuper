document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementById("is");
  if (submit) {
    submit.addEventListener("click", (event) => {
      event.preventDefault();
      loginR();
    });
  }
});
 


export function loginR() {
  let apiUrl = "http://127.0.0.1:82/minisuper/api.php";
  let user = document.getElementsByName("user")[0].value;
  let password = document.getElementsByName("password")[0].value;

  let data = {
    user: user,
    password: password,
  };
  console.log(JSON.stringify(data));

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
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
