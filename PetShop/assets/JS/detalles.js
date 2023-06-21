const container = document.getElementById("container-main");
let productos = []

const parametro = new URLSearchParams(location.search);
const id = parametro.get("id");

function showDetails(){
    container.innerHTML = `
      <div class="d-flex flex-row justify-content-center align-items-center rounded border border-black contain-details">
        <img class="event rounded zoom" src="${productos.imagen}" alt="${productos.producto}">
        <div class="card card-details d-flex justify-content-center align-items-center">
          <h3 class="d-flex justify-content-center">${productos.producto}</h3>
          <p class="mb-2 ms-3 me-3">${productos.descripcion}</p>
          <p class="mb-2 ms-3">Precio: $${productos.precio}</p>
        </div>
      </div>`
}

import {url} from "../JS/functions.js"

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    productos = data.find(evento => evento._id == id)
    showDetails()
  })
.catch((error) => console.error(error))

$(document).ready(function(){
  $('.zoom').hover(function() {
      $(this).addClass('transition');
  }, function() {
      $(this).removeClass('transition');
  });
});