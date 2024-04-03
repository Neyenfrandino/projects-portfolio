
const URL = 'http://127.0.0.1:5500/frontend/index/index.html'
export const previewMenu = (url, nameId) => {
    
    const urlNow = window.document.location.href 
    console.log(urlNow)
    
    if(urlNow == url){
        const containerItem = document.getElementById( nameId )
        console.log(containerItem)
        containerItem.classList.add('active')
    }
}

previewMenu(URL, 'home')