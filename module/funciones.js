
// export function cargarDatos(objeto) {
//     const div = document.createElement("DIV")
//     let articulosSeleccionados;
//     let href;
//     div.classList = `card`
//     div.innerHTML = `
//     <img src="${objeto.imagen}" class="img_cards rounded-top-2">
//     <div class="card-body" id="card-body">
//         <h5 class="card-title">${objeto.producto}</h5>
//         <p>Price: $ ${objeto.precio}</p>      
//     </div>
//     <div class="card-body d-flex justify-content-around">
//         <button data-id="${objeto._id}" class="btn btn-carrito btn-success ${articulosSeleccionados ? 'btn-danger' : ''}"></button>
//         <a href="${href}?id=${objeto._id}" class="btn btn-details"> Ver más </a>
//     </div>`;
//     return div
// }

// export function imprimirDatos(events, elementoHtml) {
//     elementoHtml.innerHTML = ""
//     let fragment = document.createDocumentFragment()
//     events.forEach(objeto => fragment.appendChild(cargarDatos(objeto)))
//     elementoHtml.appendChild(fragment)
// }


export function createCarouselItems(images, carouselInner) {
    let carouselInstance;
    carouselInner.innerHTML = "";
    let index = 0;
    for (const imageSrc of images) {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        if (index === 0) {
            carouselItem.classList.add("active");
        }

        const image = document.createElement("img");
        image.src = imageSrc;
        image.alt = "Slide " + (index + 1);
        image.classList.add("d-block", "mx-auto");

        carouselItem.appendChild(image);
        carouselInner.appendChild(carouselItem);

        index++;
    }

    // Inicializar el carrusel de Bootstrap
    if (carouselInstance) {
        carouselInstance.dispose(); // Eliminar la instancia existente del carrusel
    }
    carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 2000,
        pause: "hover"
    });
}