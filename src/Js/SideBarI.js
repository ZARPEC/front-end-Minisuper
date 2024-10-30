export function toggleSidebar(ref){
  document.getElementById("sidebar").classList.toggle('active');
}
let slideIndex = 1;
showSlides(slideIndex);

export function plusSlides(n) {
  showSlides(slideIndex += n);
}

export function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  // Asegúrate de que el valor de n esté dentro del rango válido
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Oculta todas las diapositivas
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // Actualiza el número de diapositiva visible
    slides[i].getElementsByClassName("numbertext")[0].innerHTML = (i + 1) + " / " + slides.length;
  }

  // Muestra la diapositiva actual
  slides[slideIndex - 1].style.display = "block";
}

// Asegúrate de que el evento onclick esté asignado correctamente
document.querySelectorAll('.prev').forEach(element => {
  element.addEventListener('click', function() {
    plusSlides(-1);
  });
});

document.querySelectorAll('.next').forEach(element => {
  element.addEventListener('click', function() {
    plusSlides(1);
  });
});
