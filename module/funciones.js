export function createCarouselItems(images, carpetadeimágenesRuta, $contenedor) {
    let carouselInstance;

    $contenedor.innerHTML = "";
    let index = 0;

    for (const imageName of images) {
        console.log(imageName)

        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        if (index === 0) {
            carouselItem.classList.add("active");
        }

        const image = document.createElement("img");
        image.src = imageName.src;
        image.alt = "Slide " + (index + 1);
        image.classList.add("d-block", "mx-auto");

        carouselItem.appendChild(image);
        $contenedor.appendChild(carouselItem);

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
