import modalInfoProject from "../modal/modal.js";

const gridEffectChangeImage = () => {
    const images = [
        "/scripts/componenets/grid-referring-projects/img-projects-referent/1.png",
        "/scripts/componenets/grid-referring-projects/img-projects-referent/2.jpg",
        "/scripts/componenets/grid-referring-projects/img-projects-referent/3.jpg",
        "/scripts/componenets/grid-referring-projects/img-projects-referent/4.jpg",
        "/scripts/componenets/grid-referring-projects/img-projects-referent/5.jpg",
        "/scripts/componenets/grid-referring-projects/img-projects-referent/6.jpg",
        "/scripts/componenets/grid-referring-projects/img-projects-referent/7.jpg",
        "/scripts/componenets/grid-referring-projects/img-projects-referent/8.jpg",
        "/scripts/componenets/grid-referring-projects/img-projects-referent/9.jpg",        
        "/scripts/componenets/grid-referring-projects/img-projects-referent/10.jpg",        
    ];
    
    const querySelectorAllGrid = document.querySelectorAll('.container-grid-referring-project div')

    let availableGrids = Array.from(querySelectorAllGrid); // Convertir NodeList a un array
    images.forEach(imgUrl => {
    if (availableGrids.length === 0) return; // Si no quedan contenedores disponibles, salir del bucle
    const randomIndex = Math.floor(Math.random() * availableGrids.length);
    const randomElement = availableGrids[randomIndex];
    availableGrids.splice(randomIndex, 1); // Eliminar el contenedor seleccionado de la lista

    const elementImgGrid = document.createElement('img');
    elementImgGrid.src = imgUrl; // Establecer el src de la imagen
    elementImgGrid.alt = "Random Image"; 
    
    randomElement.appendChild(elementImgGrid);
    })
    
    for ( let i of querySelectorAllGrid){
    
        i.addEventListener('mouseenter', () => {
            i.style.transition = 'transform 0.5s';
            i.style.transform = 'scale(1.3)'; // Aumenta el tamaño al 110%
            i.style.zIndex = '1'; // Establece el z-index para colocar el elemento delante de los otros
        })
        i.addEventListener('mouseleave', () => {
            i.style.transition = 'transform 0.5s';

            i.style.transform = 'scale(1)'; // Restaura el tamaño original
            i.style.zIndex = '0'
          });
    }
}
gridEffectChangeImage()



export default gridEffectChangeImage

