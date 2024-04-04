import { previewMenu } from "../../../frontend/index/app.js"


const gridEffectChangeImage = async () => {


    const response = await fetch('/frontend/images.json')
    if (response.ok) {
        const data = await response.json();
        
        const querySelectorAllGrid = document.querySelectorAll('.container-grid-referring-project div')
        let availableGrids = Array.from(querySelectorAllGrid); 

        data.forEach((elemet)  => {
            const { url, title, contextInfo, redirectHrefProjectGitHub } = elemet
        
            if (availableGrids.length === 0) return; 

            const randomIndex = Math.floor(Math.random() * availableGrids.length);
            const randomElement = availableGrids[randomIndex];
            availableGrids.splice(randomIndex, 1); 

            const elementImgGrid = document.createElement('img');
            elementImgGrid.src = url; 
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
                i.style.transform = 'scale(1.3)'; 
                i.style.zIndex = '1'; 
            })
            i.addEventListener('mouseleave', () => {
                i.style.transition = 'transform 0.5s';
                i.style.transform = 'scale(1)'; 
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

        
        modal.style.display = 'flex';
        modal.classList.add('activee');
    
        const elementTitle = document.createElement('h3');
        elementTitle.className = 'elementTitle'
        elementTitle.textContent = title; 

        const elementSpan =  document.createElement('p')
        elementSpan.className = 'elementSpan'
        elementSpan.textContent = contextInfo

        content.appendChild(elementTitle); 
        content.appendChild(elementSpan)

        elemntosNavLinkPojects(content, redirectHrefProjectGitHub)
    });


    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }

            modal.classList.remove('active');
            modal.style.display = 'none'; 
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
