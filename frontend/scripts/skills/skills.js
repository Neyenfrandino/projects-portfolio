const gridSkills = async () => {
    const response = await fetch('/frontend/scripts/skills/skills.json');
    const data = await response.json(); // Parseamos la respuesta a JSON

    if (!data) {
        throw new Error("Failed to load JSON file data");
    }
   
    const { skills, image, courseContext } = data;
    
    

    for (let i of skills) {
        const elementContainerGridSkills = document.getElementById('cointainerSkills');
        const containerIcono = document.createElement('div');
        containerIcono.className = 'containerIcono'
        const elementI = document.createElement('i')
        let img = document.createElement('img');
        

        if(i.name == 'FastAPI'){
            elementI.className = `fas fa-network-wired iconoFastApi`
            containerIcono.appendChild(elementI)
        }else{ 
            img.src =  i.icono;
            img.className = 'imgSkills'
        }

        modalExpand(containerIcono, i)
       
        containerIcono.appendChild(img);
        elementContainerGridSkills.appendChild(containerIcono);
    }
}

const modalExpand = (container, i) => {
    const modal = document.getElementById('myModal1');
    const content = document.getElementById('content1');
    const containerImgSkillsModal = document.querySelector('.containerImgSkillsModal')
    const imgSkillsContainer = document.querySelector('.imgSkillsContainer')
    const containerSpanModal = document.querySelector('.containerSpanModal')

    const { name, icono, image, courseContext} = i
    
    container.addEventListener('click', () => {

        modal.style.display = 'flex'; // Mostrar el modal al hacer clic en el botón
        modal.classList.add('active');

        const imgModal = document.createElement('img')
        const spanModal = document.querySelector('.spanModal')
        const imgSkills = document.createElement('img')

        if(name == 'FastAPI'){
            
            const elementI = document.createElement('i')
            elementI.className = `fas fa-network-wired iconoFastApi`

            spanModal.textContent = courseContext
            spanModal.className = 'spanModal'

            content.appendChild(elementI)
            modal.appendChild(content)

        }else{ 
            imgModal.src = image;
            imgModal.className = 'imgModal'


            imgSkills.src = icono
            imgSkills.className = 'imgSkills'

            spanModal.textContent = courseContext
            spanModal.className = 'spanModal'

            

            containerSpanModal.appendChild(spanModal)
            content.appendChild(imgSkillsContainer)

            imgSkillsContainer.appendChild(imgSkills)
            content.appendChild(imgSkillsContainer)

            containerImgSkillsModal.appendChild(imgModal)
            content.appendChild(containerImgSkillsModal)

            modal.appendChild(content)
        }

    });

    // Función para cerrar el modal al hacer clic fuera de él
    modal.addEventListener('click', (event) => {
        console.log(modal.firstChild, 'jaja')
        console.log(event.target)
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

gridSkills();


