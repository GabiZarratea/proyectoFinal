const container = document.getElementById("container")

let productos = []
let articulosSeleccionados = JSON.parse(localStorage.getItem("seleccionados")) || []

const functionEvento = (event) => {
    const id = event.target.dataset.id

    if(id){
        event.target.classList.toggle("btn-danger")

        const bool = articulosSeleccionados.some(producto => producto._id == id)
        
        if(bool){
            articulosSeleccionados = articulosSeleccionados.filter(producto => producto._id !== id)
        }
        else{
                const aux = productos.find(producto => producto._id == id)
        articulosSeleccionados.push(aux)    
        }

        localStorage.setItem("seleccionados", JSON.stringify(articulosSeleccionados))
        console.log(articulosSeleccionados)
    }
}

container.addEventListener("click", functionEvento)

import { url, imprimirTarjetas } from "../JS/functions.js"

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    productos = data.filter(
      producto => (producto.categoria).includes("farmacia")
    )
console.log(productos)
    imprimirTarjetas(productos, container)
  })
  .catch((error) => console.error(error)) 