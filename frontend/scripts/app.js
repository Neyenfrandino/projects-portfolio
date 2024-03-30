const buttonReferringProjects = ( URL, className ) => {
    const buttonPagReferentProyect = document.querySelector(`.${className}`)
    buttonPagReferentProyect.addEventListener('click', async ()=>{
        document.body.classList.add("slide-in");

        // Espera un tiempo para cargar la página
        setTimeout(function() {
            // Cambia la ubicación actual por la nueva página
            window.location.href = URL;
        }, 500); // Tiempo de duración de la animación (0.5 segundos en este caso)

    })
    
}

const URL = 'http://127.0.0.1:5500/frontend/scripts/componenets/page-referring-projects/page-referring-projects.html'
const classNameButtonIndexPage = 'button-pag-referent-proyect'

buttonReferringProjects(URL, classNameButtonIndexPage )