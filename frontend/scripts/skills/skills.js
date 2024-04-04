import { previewMenu } from "../../index/app.js";

const gridSkills = async () => {
    const response = await fetch('/frontend/scripts/skills/skills.json');
    const data = await response.json(); 

    if (!data) {
        throw new Error("Failed to load JSON file data");
    }
   
    const { skills } = data;
    
    skills.forEach(i => {
        
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
    })
}

const modalExpand = (container, i) => {
    const modal = document.getElementById('myModal1');
    const content = document.getElementById('content1');

    
    container.addEventListener('click', () => {
        const containerImgSkillsModal = document.createElement('div')
        containerImgSkillsModal.className = 'containerImgSkillsModal'

        const containerSpanModal = document.createElement('div')
        containerSpanModal.className = 'containerSpanModal'

        const imgSkillsContainer = document.createElement('div')
        imgSkillsContainer.className = 'imgSkillsContainer'

        const titleModalSkills = document.createElement('div')
        titleModalSkills.className =  'titleModalSkills'
       

        const { name, icono, image, courseContext} = i

        modal.style.display = 'flex'; // Mostrar el modal al hacer clic en el botón
        modal.classList.add('active');
        
        const imgModal = document.createElement('img')
        const spanModal = document.createElement('span')
        const imgSkills = document.createElement('img')
        const titleSkills = document.createElement('h3')

        if(name == 'FastAPI'){
            const constainerIcono = document.createElement('div')
            constainerIcono.className = 'constainerIcono'

            const elementI = document.createElement('i')
            elementI.className = `fas fa-network-wired iconoFastApi`

            titleSkills.textContent = 'Course content'

            spanModal.textContent = courseContext
            spanModal.className = 'spanModal'


            imgModal.src = image;
            imgModal.className = 'imgModal'

            containerImgSkillsModal.appendChild(imgModal)
            content.appendChild(containerImgSkillsModal)

            titleModalSkills.appendChild(titleSkills)
            content.appendChild(titleModalSkills)

         
            containerSpanModal.appendChild(spanModal)
            content.appendChild(containerSpanModal)

            constainerIcono.appendChild(elementI)

            content.appendChild(constainerIcono)
            modal.appendChild(content)

        }else{ 
            titleSkills.textContent = 'Course content'
            
            imgModal.src = image;
            imgModal.className = 'imgModal'

            imgSkills.src = icono
            imgSkills.className = 'imgSkills'

            spanModal.textContent = courseContext
            spanModal.className = 'spanModal'

            titleModalSkills.appendChild(titleSkills)
            content.appendChild(titleModalSkills)

            containerSpanModal.appendChild(spanModal)
            content.appendChild(containerSpanModal)

            imgSkillsContainer.appendChild(imgSkills)
            content.appendChild(imgSkillsContainer)

            containerImgSkillsModal.appendChild(imgModal)
            content.appendChild(containerImgSkillsModal)


            modal.appendChild(content)

        }

    });

    // Función para cerrar el modal al hacer clic fuera de él
    modal.addEventListener('click', (event) => {
        
        if (event.target === modal) {
          
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }
     
            modal.classList.remove('active');
            modal.style.display = 'none'; // Ocultar el modal al hacer clic fuera de él
        }
    });
    
}

const url = 'http://127.0.0.1:5500/frontend/scripts/skills/skills.html'
previewMenu(url, 'skills')

gridSkills();

