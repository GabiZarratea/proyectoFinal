const container = document.getElementById("container");

let productos = [];
let articulosSeleccionados = JSON.parse(localStorage.getItem("seleccionados")) || [];
let cantidadDeProductosPorID = JSON.parse(localStorage.getItem("cantidadDeProductosPorID")) || {};

const escuchadorBotonCarrito = (event) => {
  const idDeProductoSeleccionado = event.target.dataset.id;

  if (idDeProductoSeleccionado) {
    event.target.classList.toggle("btn-danger");

    const elProductoEstaSeleccionado = articulosSeleccionados.some((producto) => producto._id == idDeProductoSeleccionado);

    if (elProductoEstaSeleccionado) {
      articulosSeleccionados = articulosSeleccionados.filter(
        (producto) => producto._id !== idDeProductoSeleccionado
      ); // remuevo el producto seleccionado de la lista de articulos
      cantidadDeProductosPorID[idDeProductoSeleccionado] = 0;
    } else {
      const producto = productos.find((producto) => producto._id == idDeProductoSeleccionado);
      articulosSeleccionados.push(producto);
      cantidadDeProductosPorID[idDeProductoSeleccionado] = Math.min(1, producto.disponibles);
    }

    localStorage.setItem(
      "seleccionados",
      JSON.stringify(articulosSeleccionados)
    );
    localStorage.setItem("cantidadDeProductosPorID", JSON.stringify(cantidadDeProductosPorID));
    console.log(articulosSeleccionados);
  }
};

container.addEventListener("click", escuchadorBotonCarrito);

import { url, imprimirTarjetas } from "../JS/functions.js";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    productos = data.filter((producto) =>
      producto.categoria.includes("farmacia")
    );
    console.log(productos);
    imprimirTarjetas(productos, container);
  })
  .catch((error) => console.error(error));
