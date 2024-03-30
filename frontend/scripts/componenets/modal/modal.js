const modalInfoProject = () =>{
    let asd = document.querySelectorAll('.grid-item')
    
    let array = Array.from(asd); // Convertir NodeList a un array
    console.log(array)

    const containerDivModal = document.createElement('section')
    containerDivModal.className = 'containerDivModal'

    const containerDivInfo = document.createElement('div')
    containerDivInfo.className = 'containerDivInfo'

    const titleModalProject = document.createElement('h3')
    titleModalProject.className = 'titleModalProject'

    const spanModalProject = document.createElement('span')
    spanModalProject.className = 'titleModalProject'

    const buttonModalExpndirInfo = document.createElement('button')
    buttonModalExpndirInfo.className = 'titleModalProject'


    array.forEach(element => {
        console.log(element)
        const containerDivModal = document.createElement('section')
        containerDivModal.className = 'containerDivModal'
    
        const containerDivInfo = document.createElement('div')
        containerDivInfo.className = 'containerDivInfo'
    
        const titleModalProject = document.createElement('h3')
        titleModalProject.className = 'titleModalProject'
    
        const spanModalProject = document.createElement('span')
        spanModalProject.className = 'titleModalProject'
    
        const buttonModalExpndirInfo = document.createElement('button')
        buttonModalExpndirInfo.className = 'titleModalProject'






        titleModalProject.textContent = 'hola mundo'


        containerDivInfo.appendChild(titleModalProject)
        containerDivInfo.appendChild(spanModalProject)
        containerDivInfo.appendChild(buttonModalExpndirInfo)
    
        containerDivModal.appendChild(containerDivInfo)
    })
    
   

    

}


modalInfoProject()
export default modalInfoProject