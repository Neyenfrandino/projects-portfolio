import { previewMenu } from "../../../frontend/index/app.js"
//  console.log('hola')

const gridEffectChangeImage = async () => {


    const response = await fetch('/frontend/images.json')
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        const querySelectorAllGrid = document.querySelectorAll('.container-grid-referring-project div')
        let availableGrids = Array.from(querySelectorAllGrid); // Convertir NodeList a un array

        data.forEach((elemet)  => {
            const { url, title, contextInfo, redirectHrefProjectGitHub } = elemet
            // console.log(url)
            if (availableGrids.length === 0) return; // Si no quedan contenedores disponibles, salir del bucle

            const randomIndex = Math.floor(Math.random() * availableGrids.length);
            const randomElement = availableGrids[randomIndex];
            availableGrids.splice(randomIndex, 1); // Eliminar el contenedor seleccionado de la lista

            const elementImgGrid = document.createElement('img');
            elementImgGrid.src = url; // Establecer el src de la imagen
            elementImgGrid.alt = "Random Image";

            const containerDivModalInfo = document.createElement('section');
            containerDivModalInfo.className = 'containerDivModalInfo'

            const elementSpan = document.createElement('apan');
            elementSpan.textContent = title

            const buttonModalInfo = document.createElement('button')
            buttonModalInfo.className = 'buttonModalInfo'
            buttonModalInfo.innerHTML = '&#9650'; 
          
            containerDivModalInfo.appendChild(buttonModalInfo)
            containerDivModalInfo.appendChild(elementSpan)
            randomElement.appendChild(elementImgGrid);
            randomElement.appendChild(containerDivModalInfo);

            
            modalExpand(buttonModalInfo, title, contextInfo, redirectHrefProjectGitHub)

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
    } else {
        console.error('Failed to fetch images.json');
    }
}


const modalExpand = (buttonModalInfo, title, contextInfo, redirectHrefProjectGitHub) => {
    const modal = document.getElementById('myModal');
    const content = document.getElementById('content');


    buttonModalInfo.addEventListener('click', () => {

        
        modal.style.display = 'flex'; // Mostrar el modal al hacer clic en el botón
        modal.classList.add('activee');
    
        const elementTitle = document.createElement('h3');
        elementTitle.className = 'elementTitle'
        elementTitle.textContent = title; // Asignar el contenido del título al elemento h3

        const elementSpan =  document.createElement('p')
        elementSpan.className = 'elementSpan'
        elementSpan.textContent = contextInfo

        content.appendChild(elementTitle); // Agregar el elemento h3 al contenido del modal
        content.appendChild(elementSpan)

        elemntosNavLinkPojects(content, redirectHrefProjectGitHub)
    });

    // Función para cerrar el modal al hacer clic fuera de él
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            // Eliminar todos los elementos secundarios del modal
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }

            modal.classList.remove('active');
            modal.style.display = 'none'; // Ocultar el modal al hacer clic fuera de él
        }
    });
}


const elemntosNavLinkPojects = (content, redirectHrefProjectGitHub) => {

    const redirectCvReferece = document.createElement('div')
    redirectCvReferece.className = 'redirect-cv-referece social-icons'

    const persuadeTheRecruiterSpan = document.createElement('span')
    persuadeTheRecruiterSpan.className = 'persuadeTheRecruiterSpan'
    persuadeTheRecruiterSpan.textContent = 'You can see the repository on git hub or see my profile on linkeding...'

    const ancordLinlkHrefGitHub = document.createElement('a')
    ancordLinlkHrefGitHub.target = '_blank'
    ancordLinlkHrefGitHub.href = redirectHrefProjectGitHub
    const iconGitHub = document.createElement('i');
    iconGitHub.className = 'fab fa-github';

    const ancordLinlkHrefLinkeding = document.createElement('a')
    
    ancordLinlkHrefLinkeding.target = '_blank'
    ancordLinlkHrefLinkeding.href = 'https://www.linkedin.com/in/neyen-frandino/'
    const iconLinkedin = document.createElement('i');
    iconLinkedin.className = 'fab fa-linkedin';

    ancordLinlkHrefGitHub.appendChild(iconGitHub)
    ancordLinlkHrefLinkeding.appendChild(iconLinkedin)

    redirectCvReferece.appendChild(ancordLinlkHrefGitHub)
    redirectCvReferece.appendChild(ancordLinlkHrefLinkeding)

    content.appendChild(persuadeTheRecruiterSpan)
    content.appendChild(redirectCvReferece)

}

gridEffectChangeImage()

const url = 'http://127.0.0.1:5500/frontend/scripts/grid-referring-projects/page-referring-projects.html'

previewMenu(url, 'projectGrid')
