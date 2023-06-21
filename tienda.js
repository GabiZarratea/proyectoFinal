
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
    //     let contador=0;

    //     const cantidad = document.querySelector('#text');
    //     const botonMenos = document.getElementById('menos');
    //     const botonMas = document.getElementById('mas');
       
    //    let productoID ;
        
        
    //         const menos = (productoID) =>{
    //             const producto =productos.find(prod => prod._id=== productoID)
    //           if (producto && producto.disponibles>0){
    //               producto.disponibles--;
    //               actualizar(productoID)
    //           }
    //         }  
    //         const mas = (productoID)=>{
    //             const producto =productos.find(prod => prod._id=== productoID)
    //           if (producto){
    //               producto.disponibles++;
    //               actualizar(productoID)
    //           }
              
    //         }    
    //         const actualizar = (productoID) => {
    //             const producto =productos.find(prod => prod._id=== productoID)
    //             if (cantidad && producto){
    //                 cantidad.textContent= producto.disponibles
    //             }
    //         }    
    //         productos.forEach(element => {
    //             botonMenos.addEventListener('click', menos)    
    //             botonMas.addEventListener('click', mas)    
                
    //         });   
           
    //     })
    let contador = 0;

    const cantidad = document.querySelector('#text');
    const botonMenos = document.getElementById('menos');
    const botonMas = document.getElementById('mas');
    
    const menos = () => {
      if (contador > 0) {
        contador--;
        actualizar();
      }
    };
    
    const mas = () => {
      contador++;
      actualizar();
    };
    
    const actualizar = () => {
      cantidad.textContent = contador;
    };
    
    botonMenos.addEventListener('click', menos);
    botonMas.addEventListener('click', mas);
})
        
    .catch(error => console.log(error))


      
