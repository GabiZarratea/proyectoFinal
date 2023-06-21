import { createCarouselItems } from "../js/functions.js";

const $contenedor = document.querySelector(".carousel-inner");
let events;

fetch("https://mindhub-xj03.onrender.com/api/petshop")
    .then(response => response.json())
    .then(data => {
        events = data;
        
        let carpetadeimágenesRuta = "./assets/images/";
        
        const images =[
            {
                src: carpetadeimágenesRuta +"banner-1.jpg"
            },
            {
                src: carpetadeimágenesRuta +"banner-2.jpg"
            },
            {
                src: carpetadeimágenesRuta +"banner-3.jpg"
            },
            {
                src: carpetadeimágenesRuta +"banner-4.jpg"
            },
            {
                src: carpetadeimágenesRuta +"banner-5.jpg"
            },
            {
                src: carpetadeimágenesRuta +"banner-6.jpg"
            },
            {
                src: carpetadeimágenesRuta +"banner-7.jpg"
            },
            {
                src: carpetadeimágenesRuta +"banner-8.jpg"
            }
        ]
        createCarouselItems(images, carpetadeimágenesRuta, $contenedor);
        // imprimirDatos(events, elementoHtml);

    })
    .catch(error => {
        console.error("Error al cargar las imágenes del carrusel:", error);
    });