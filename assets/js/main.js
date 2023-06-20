import {  createCarouselItems } from "../../module/funciones.js"

const elementoHtml = document.getElementById("cards");
const carouselInner = document.querySelector(".carousel-inner");
let events;

fetch("https://mindhub-xj03.onrender.com/api/petshop")
    .then(response => response.json())
    .then(data => {
        events = data;

        // Obtener las imágenes del objeto data
        const images = [...(new Set(events.map((item) => item.imagen)))];

        // Crear y agregar elementos al carrusel
        createCarouselItems(images, carouselInner);
        imprimirDatos(events, elementoHtml);
        let href = location.pathname.includes("index")
        ? "./assets/pages/details.html"
        : "./details.html"
    })
    .catch(error => {
        console.error("Error al cargar las imágenes del carrusel:", error);
    });