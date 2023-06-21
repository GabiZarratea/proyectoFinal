export { url, imprimirTarjetas, createCarouselItems, imprimirTarjetasCarrito};

const url = "https://mindhub-xj03.onrender.com/api/petshop";

let articulosSeleccionados = JSON.parse(localStorage.getItem("seleccionados")) || []

const crearPlantilla = (producto) => {
  const seleccionados = localStorage.getItem("seleccionados")
  const articulosSeleccionados = seleccionados ? JSON.parse(seleccionados).find(prod => prod._id == producto._id) : null

  let href = location.pathname.includes("index")
    ? "./assets/pages/details.html"
    : "./details.html"

  return `<div class="card" style="width: 20rem; text-align: center;" >
            <img src="${producto.imagen}" class="img_cards">
            <div class="card-body d-flex flex-column justify-content-center">
              <h5 class="card-title text-white fs-2 d-flex justify-content-center">${producto.producto}</h5>
              <p class="text-white card-title">Price: $ ${producto.precio}</p>      
            </div>
            <div class="card-body d-flex justify-content-around">
              <button data-id="${producto._id}" class="btn btn-carrito ${articulosSeleccionados ? 'btn-danger' : 'btn-success'}"></button>
              <a href="${href}?id=${producto._id}" class="btn btn-details"> <p class="detalles">Detalles </p></a>
            </div>
            <div>
              ${producto.disponibles < 5 ? "<p class='bg-danger text-white b'><img src='../images/advertencia.svg'></img> Pocas unidades disponibles </p>" : "<br><br>"} 
            </div>
          </div>`;
          
};

function imprimirTarjetas(productos, container) {
  imprimirDatos(productos, container);

  function filterCards() {
    const inputValue = searchInput.value.toLowerCase().trim();

    const filteredCards = productos.filter(function (prod) {
      return (
        (inputValue === "" || prod.producto.toLowerCase().includes(inputValue))
      );
    });

    container.innerHTML = "";
    imprimirDatos(filteredCards, container);
  }   

  searchButton.addEventListener("click", filterCards);
}

function imprimirDatos(array, lugar) {
  let template = "";

  for (let event of array) {
    template += crearPlantilla(event);
  }

  lugar.innerHTML += template;
}

function createCarouselItems(images, carpetadeimágenesRuta, $contenedor) {
  let carouselInstance;

  $contenedor.innerHTML = "";
  let index = 0;

  for (const imageName of images) {

      const carouselItem = document.createElement("div");
      carouselItem.classList.add("carousel-item");

      if (index === 0) {
          carouselItem.classList.add("active");
      }

      const image = document.createElement("img");
      image.src = imageName.src;
      image.alt = "Slide " + (index + 1);
      image.classList.add("d-block", "mx-auto");

      carouselItem.appendChild(image);
      $contenedor.appendChild(carouselItem);

      index++;
  }

  // Inicializar el carrusel de Bootstrap
  if (carouselInstance) {
      carouselInstance.dispose(); // Eliminar la instancia existente del carrusel
  }
  carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 4000,
      pause: "hover"
  });
}
const crearPlantillaCarrito = (producto) => {

  const seleccionados = localStorage.getItem("seleccionados")
  const articulosSeleccionados = seleccionados ? JSON.parse(seleccionados).find(prod => prod._id == producto._id) : null

    return `<div class="card" style="width: 20rem; text-align: center;" >
                        <img src="${producto.imagen}" class="img_cards rounded-top-2">
                        <div class="card-body">
                            <h5 class="card-title">${producto.producto}</h5>
                            <p class="card-title">($<span>${producto.precio}</span> x u.)</p>      
                        </div>
                        <div class="card-body d-flex justify-content-around flex-row-reverse">

                            <h5>Total: $<span data-total>${producto.precio}</span></h5>
                        </div>                      
                        <div class="p-4">
                        <button class="btn btn-danger" data-action="menos" data-disponibles=${producto.disponibles}>-</button>
                        <span id="text">1</span>
                        <button class="btn btn-success" data-action="mas" data-disponibles=${producto.disponibles}>+</button>
                        <button id="boton" data-id="${producto._id}" class="ms-5 btn btn-carrito-vacio btn-success ${articulosSeleccionados ? 'btn-danger' : 'btn-success'}"></button>
                        </div> 
                      </div>`;
  };
  
function imprimirTarjetasCarrito(productos, container) {
      imprimirDatosCarrito(productos, container);
    
      function filterCards() {
        const inputValue = searchInput.value.toLowerCase().trim();
    
        const filteredCards = productos.filter(function (prod) {
          return (
            (inputValue === "" || prod.producto.toLowerCase().includes(inputValue))
          );
        });
    
        container.innerHTML = "";
        imprimirDatosCarrito(filteredCards, container);
      }
}

function imprimirDatosCarrito(array, lugar) {
  let template = "";

  for (let event of array) {
    template += crearPlantillaCarrito(event);
  }

  lugar.innerHTML += template;
}