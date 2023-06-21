
import {  url, imprimirTarjetasCarrito, imprimirDatosCarrito, crearPlantillaCarrito } from "../JS/functions.js";

const container = document.getElementById("container")
let productos=[];
let articulosSeleccionados = JSON.parse(localStorage.getItem("seleccionados")) || []

fetch (url)
    .then ( response => response.json())
    .then ( res => {
        productos = res.filter(producto => producto.disponibles)
        console.log(productos) 
        
        imprimirTarjetasCarrito(articulosSeleccionados, container)
        //--------------botones-------//


    const cantidad = document.querySelector('#text');
    const botonMenos = document.getElementsByClassName('menos');
    const botonMas = document.getElementsByClassName('mas');
    
})
        
    .catch(error => console.log(error))

    container.addEventListener('click', (e) =>{
        
        if (e.target.dataset.action == "menos"){

            const span = e.target.parentElement.children[1]
            const cantidad = parseInt(span.textContent)
            console.log(cantidad)
            console.log(e.target.dataset.disponibles);
            if (cantidad >=2){
                span.textContent= cantidad-1
            }
        } 
        if (e.target.dataset.action == "mas"){
            const span = e.target.parentElement.children[1]
            const cantidad = parseInt(span.textContent)
            const disponibles = parseInt(e.target.dataset.disponibles)
            console.log(cantidad)
            console.log(e.target.dataset.disponibles);
            if ( cantidad < disponibles ){
                span.textContent= cantidad + 1
            }
        }
        
    })
    
    