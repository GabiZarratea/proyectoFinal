export { url, imprimirTarjetas, crearPlantillaCarrito, imprimirTarjetasCarrito, imprimirDatosCarrito, };

const url = "https://mindhub-xj03.onrender.com/api/petshop";

const crearPlantilla= (producto) => {

const articulosSeleccionados = JSON.parse(localStorage.getItem("seleccionados"))
  
  let href = location.pathname.includes("index")
    ? "./assets/pages/details.html"
    : "./details.html"

  return `<div class="card" style="width: 20rem; text-align: center;" >
                      <img src="${producto.imagen}" class="img_cards rounded-top-2">
                      <div class="card-body">
                          <h5 class="card-title">${producto.producto}</h5>
                          <p>Price: $ ${producto.precio}</p>      
                      </div>
                      <div class="card-body d-flex justify-content-around">
                          <button data-id="${producto._id}" class="btn btn-carrito btn-success ${articulosSeleccionados ? 'btn-danger' : 'btn-success'}"></button>
                          <a href="${href} " class="btn btn-details"> Ver más </a>
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

//-------------funciones para carrito------------/////

const crearPlantillaCarrito = (producto) => {

  const articulosSeleccionados = JSON.parse(localStorage.getItem("seleccionados"))
    
    let href = location.pathname.includes("index")
      ? "./assets/pages/details.html"
      : "./details.html"
  
    return `<div class="card" style="width: 20rem; text-align: center;" >
                        <img src="${producto.imagen}" class="img_cards rounded-top-2">
                        <div class="card-body">
                            <h5 class="card-title">${producto.producto}</h5>
                            <p>Price: $ ${producto.precio}</p>      
                        </div>
                        <div class="card-body d-flex justify-content-around">
                            <button data-id="${producto._id}" class="btn btn-carrito btn-success ${articulosSeleccionados ? 'btn-danger' : 'btn-success'}"></button>
                            <a href="${href} " class="btn btn-details"> Ver más </a>
                        </div>
                                                
                        <div>
                        <button data-action="menos" data-disponibles=${producto.disponibles}>-</button>
                        <span id="text">1</span>
                        <button data-action="mas" data-disponibles=${producto.disponibles}>+</button>
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
    
      searchButton.addEventListener("click", filterCards);
}

function imprimirDatosCarrito(array, lugar) {
  let template = "";

  for (let event of array) {
    template += crearPlantillaCarrito(event);
  }

  lugar.innerHTML += template;
}




