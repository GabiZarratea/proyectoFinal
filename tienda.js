
import {  url, imprimirTarjetasCarrito, imprimirDatosCarrito, crearPlantillaCarrito, cantidadTotal } from "../JS/functions.js";

const container = document.getElementById("container")
let productos=[];
let articulosSeleccionados = JSON.parse(localStorage.getItem("seleccionados")) || []

fetch (url)
    .then ( response => response.json())
    .then ( res => {
        productos = res.filter(producto => producto.disponibles)
   
        
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
            const precio =e.target.parentElement.parentElement.children[1].children[1].children[0]
            const cantidadPago=  e.target.parentElement.parentElement.children[2].children[1].children[0]
          
            if (cantidad >=2){
                span.textContent= cantidad-1
                let cantidadTotal =parseInt(precio.textContent)*(cantidad-1)
                cantidadPago.textContent=cantidadTotal
                const spans = [...document.querySelectorAll("[data-total]")].map(span=> parseInt(span.textContent)).reduce((acc, act)=> acc + act, 0)
                console.log(spans);
            }
        } 
        
        if (e.target.dataset.action == "mas"){
            const span = e.target.parentElement.children[1]
            const cantidad = parseInt(span.textContent)
            const disponibles = parseInt(e.target.dataset.disponibles)
            const precio =e.target.parentElement.parentElement.children[1].children[1].children[0]
            const cantidadPago=  e.target.parentElement.parentElement.children[2].children[1].children[0]

            console.log(e.target.dataset.disponibles);
            if ( cantidad < disponibles ){
                span.textContent= cantidad + 1
                
            let cantidadTotal =parseInt(precio.textContent)*(cantidad+1)
              cantidadPago.textContent=cantidadTotal
              const spans = [...document.querySelectorAll("[data-total]")].map(span=> parseInt(span.textContent)).reduce((acc, act)=> acc + act, 0)
              console.log(spans);
            }
        }
        
    })

   
   
    