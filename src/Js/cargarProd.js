export function loadProducts(category = null, subCategory = null) {
  // Construir la URL de la API con los parámetros necesarios
  let apiUrl = "http://127.0.0.1:82/minisuper/api.php?action=getProducts"; // Asegúrate de ajustar la ruta según tu proyecto
  if (category) {
    apiUrl += `&category=${category}`;
    if (subCategory) {
      apiUrl += `&SubCat=${subCategory}`;
    }
  }

  // Hacer una solicitud GET a la API usando fetch
  console.log("Cargando productos desde:", apiUrl);
  fetch(apiUrl)
    .then((response) => response.json())
    .then((products) => {
      // Seleccionar el contenedor donde se mostrarán los productos
      const productList = document.querySelector(".Product");
      productList.innerHTML = ""; // Limpiar el contenido antes de agregar nuevos productos
      console.log(products);
      const rowDiv = document.createElement("div");
      rowDiv.classList.add("row", "justify-content-center", "p-2");
      if (products.length > 0) {
        products.forEach((product) => {
          const productDiv = document.createElement("div");
          productDiv.classList.add("col-md-4", "mb-4");

          productDiv.innerHTML = `
            <a href='?action=ProductView&idProduct=${product.idProducto}' class='card-link' style='text-decoration: none; color: inherit;'>
              <div class='card hover-effect'>
                <img src='Assets/Img/Category/SubCategory/Deportes/Products/${product.NombreProd}.png' class='card-img-top' alt='${product.NombreProd}'>
                <div class='card-body text-center'>
                  <h5 class='card-title'>${product.NombreProd}</h5>
                  <p class='card-text'>${product.CantMedida} ${product.UNIDADMEDIDA}</p>
                  <p class='card-text'>Q${product.precio}</p>
                  <a href='#' class='btn btn-primary' onclick='agregarAlCarrito({"id": ${product.idProducto}, "precio": ${product.precio}, "nombre": "${product.NombreProd}", "cantidad": 1});'>Añadir al carrito</a>
                </div>
              </div>
            </a>
          `;
          // Añadir cada producto al rowDiv
          rowDiv.appendChild(productDiv);
        });

        // Añadir el rowDiv a la lista de productos
        productList.appendChild(rowDiv);
      } else {
        productList.innerHTML = "<p>No se encontraron productos.</p>";
      }
    })
    .catch((error) => console.error("Error al cargar los productos:", error));
}

export function loadCategory() {
  // URL de la API
  let url = "http://127.0.0.1:82/minisuper/api.php?action=getCategories";

  fetch(url)
    .then((response) => response.json())
    .then((categories) => {
      const categoryList = document.getElementById("listCat");
      categoryList.innerHTML = "";

      if (categories.length > 0) {
        categories.forEach((category) => {
          // Crear el elemento <li> para cada categoría
          const categoryLi = document.createElement("li");
          categoryLi.classList.add("list-group-item");
          categoryLi.setAttribute("data-category-id", category.idCatProd); // ID de categoría

          // Agregar enlace y nombre de la categoría
          categoryLi.innerHTML = `<a href="#">${category.Categoria}</a>`;

          // Agregar evento de clic para cargar productos de la categoría
          categoryLi.addEventListener("click", (event) => {
            event.preventDefault();
            loadProducts(category.Categoria, null); // Llama a loadProducts con el ID de categoría
            loadSubCategory(category.Categoria);
          });


          // Añadir el elemento <li> al contenedor de categorías
          categoryList.appendChild(categoryLi);
        });
      }
    })
    .catch((error) => console.error("Error al cargar las categorías:", error));
}

export function loadSubCategory(category) {
  let url = "http://127.0.0.1:82/minisuper/api.php?action=getCategories";

  url += '&category=' + category;

  console.log("Cargando subcategorías desde:", url);

  fetch(url)
    .then(response => response.json())
    .then(subCategories => {
      const carouselInner = document.querySelector('.carousel-inner');
      carouselInner.innerHTML = ""; // Limpiar el contenido antes de agregar nuevas subcategorías
      const blockSize = 4; // Número de elementos por "slide" del carrusel
      let isFirst = true;

      for (let i = 0; i < subCategories.length; i += blockSize) {
        // Crea el elemento "carousel-item", activando el primero
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (isFirst) {
          carouselItem.classList.add("active");
          isFirst = false;
        }
        carouselItem.style.backgroundColor = "#ffffff00";

        // Crea el contenedor "row" para el conjunto de subcategorías
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (let j = i; j < i + blockSize && j < subCategories.length; j++) {
          const subCat = subCategories[j];
          console.log(subCat);

          // Crea la estructura HTML de cada subcategoría
          const colDiv = document.createElement("div");
          colDiv.classList.add("col", "text-center");

          colDiv.innerHTML = `
            <div class="col rounded">
              <a class='SubCatLink' href="?action=products&category=${subCat.categoryId}&SubCat=${subCategories.Nsubcategoria}">
                <div class="category-circle">
                  <img src="Assets/Images/Category/SubCategory/${subCategories.categoryId}/${subCategories.Nsubcategoria}.png" alt="${subCategories.Nsubcategoria}">
                </div>
              </a>
              <p class="category-text">${subCat.Nsubcategoria }</p>
            </div>
          `;

          colDiv.addEventListener("click", (event) => {
            event.preventDefault();
            loadProducts(category, subCat.Nsubcategoria); // Llama a loadProducts con el ID de categoría
            loadSubCategory(category.Categoria);
          });
          
          rowDiv.appendChild(colDiv);
        }

        // Añade el "row" al "carousel-item"
        carouselItem.appendChild(rowDiv);
        // Añade el "carousel-item" al carrusel
        carouselInner.appendChild(carouselItem);
      }
    })

}


