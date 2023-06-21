import {  url, imprimirTarjetasCarrito} from "./functions.js";

const container = document.getElementById("container")
const total_carrito = document.getElementById("total_carrito")
const compra = document.getElementById("compra")
const volver = document.getElementById("Volver")

let productos=[];
let articulosSeleccionados = JSON.parse(localStorage.getItem("seleccionados")) || []

fetch (url)
    .then ( response => response.json())
    .then ( res => {
        productos = res.filter(producto => producto.disponibles)
        
        if(articulosSeleccionados.length >0){
            imprimirTarjetasCarrito(articulosSeleccionados, container)
        }else{
            compra.innerHTML="NO HAY ARTICULOS SELECCIONADOS"
            volver.innerHTML=`<div    d-flex justify-content-center">
            <a  id="Volver" href="javascript:history.back()" class=" volver-carrito btn bg-secondary text-white volverArriba mb-3 d-flex align-items-center justify-content-center">Regresar a pagina anterior<img class="huellitas" src="https://cdn-0.emojis.wiki/emoji-pics/apple/paw-prints-apple.png"></img></a>
        </div> `
        }
    

container.addEventListener('click', (e) =>{

        if ( e.target.dataset.action == "menos" ){

            const span = e.target.parentElement.children[1]
            const cantidad = parseInt(span.textContent)
            const precio = e.target.parentElement.parentElement.children[1].children[1].children[0]
            const cantidadPago = e.target.parentElement.parentElement.children[2].children[0].children[0]
          
            if ( cantidad >= 2 ){
                span.textContent = cantidad-1
                let cantidadTotal = parseInt(precio.textContent)*(cantidad-1)
                cantidadPago.textContent = cantidadTotal
                const spans = [...document.querySelectorAll("[data-total]")].map(span=> parseInt(span.textContent)).reduce((acc, act)=> acc + act, 0)
                total_carrito.textContent = spans
            }
        } 
        
        if ( e.target.dataset.action == "mas" ){
            const span = e.target.parentElement.children[1]
            const cantidad = parseInt(span.textContent)
            const disponibles = parseInt(e.target.dataset.disponibles)
            const precio = e.target.parentElement.parentElement.children[1].children[1].children[0]
            const cantidadPago =  e.target.parentElement.parentElement.children[2].children[0].children[0]

            console.log(e.target.dataset.disponibles);
            if ( cantidad < disponibles ){
                span.textContent = cantidad + 1
                
              let cantidadTotal = parseInt(precio.textContent) * (cantidad+1)
              cantidadPago.textContent = cantidadTotal
              const spans = [...document.querySelectorAll("[data-total]")].map(span=> parseInt(span.textContent)).reduce((acc, act)=> acc + act, 0)
              total_carrito.textContent = spans
            }
        }
        
    })

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
    
            localStorage.removeItem("seleccionados", JSON.stringify(articulosSeleccionados))
            console.log(articulosSeleccionados)
            setTimeout(() => {
                location.reload();
              }, 100)
            localStorage.setItem("seleccionados",JSON.stringify(articulosSeleccionados))

        }
    }
    container.addEventListener("click", functionEvento)

}).catch(error => console.log(error))