import { url } from "../JS/functions.js";

const container = document.getElementById("container");
let productos = [];
let articulosSeleccionados =
  JSON.parse(localStorage.getItem("seleccionados")) || [];
let cantidadDeProductosPorID = JSON.parse(localStorage.getItem("cantidadDeProductosPorID")) || {};

fetch(url)
  .then((response) => response.json())
  .then((res) => {
    productos = res.filter((producto) => producto._id);

    imprimirTarjetasCarrito(articulosSeleccionados, container);
    agregarEscuchadoresATarjetasCarrito();
  })
  .catch((error) => console.log(error));

function agregarEscuchadoresATarjetasCarrito() {
  document.getElementsByName("mas").forEach((element) => 
    element.addEventListener("click", (event)=>{
      const idProducto = event.target.dataset.id;
      if (idProducto) {
        const producto = productos.find((producto) => producto._id == idProducto)
        cantidadDeProductosPorID[idProducto] = Math.min(cantidadDeProductosPorID[idProducto]+1, producto.disponibles);
        localStorage.setItem("cantidadDeProductosPorID", JSON.stringify(cantidadDeProductosPorID))
        document.getElementById(`cantidad-${idProducto}`).value =  cantidadDeProductosPorID[idProducto];
      }
    }));

    document.getElementsByName("menos").forEach((element) => 
    element.addEventListener("click", (event)=>{
      const idProducto = event.target.dataset.id;
      if (idProducto) {
        const producto = productos.find((producto) => producto._id == idProducto)
        cantidadDeProductosPorID[idProducto] = Math.max(cantidadDeProductosPorID[idProducto]-1, Math.min(1, producto.disponibles));
        localStorage.setItem("cantidadDeProductosPorID", JSON.stringify(cantidadDeProductosPorID))
        document.getElementById(`cantidad-${idProducto}`).value =  cantidadDeProductosPorID[idProducto];
      }
    }));
}

const crearPlantillaCarrito = (producto) => {
  const articulosSeleccionados = JSON.parse(
    localStorage.getItem("seleccionados")
  );

  let href = location.pathname.includes("index")
    ? "./assets/pages/details.html"
    : "./details.html";
  const cantidad = cantidadDeProductosPorID[producto._id] || 0;
  return `<div class="card" style="width: 20rem; text-align: center;" >
                              <img src="${
                                producto.imagen
                              }" class="img_cards rounded-top-2">
                              <div class="card-body">
                                  <h5 class="card-title">${
                                    producto.producto
                                  }</h5>
                                  <p>Price: $ ${producto.precio}</p>      
                              </div>
                              <div class="card-body d-flex justify-content-around">
                                  <button data-id="${
                                    producto._id
                                  }" class="btn btn-carrito btn-success ${
articulosSeleccionados ? "btn-danger" : "btn-success"}"></button>
                                  <a href="${href} " class="btn btn-details"> Ver más </a>
                              </div>
                                                      
                              <div>
                                <button name="menos" data-id="${producto._id}">-</button>
                                <input type="text" id="cantidad-${producto._id}" value="${cantidad}" readonly>
                                <button name="mas" data-id="${producto._id}">+</button>
                              </div>   
                              
                    </div>`;
};
function imprimirTarjetasCarrito(productos, container) {
  imprimirDatos(productos, container);

  function filterCards() {
    const inputValue = searchInput.value.toLowerCase().trim();

    const filteredCards = productos.filter(function (prod) {
      return (
        inputValue === "" || prod.producto.toLowerCase().includes(inputValue)
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
    template += crearPlantillaCarrito(event);
  }

  lugar.innerHTML += template;
}
