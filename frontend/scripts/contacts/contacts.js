import { previewMenu } from "../../../frontend/index/app.js"

const icons = document.querySelectorAll('.container-icon-contacts i');

icons.forEach((icon, index) => {
    setTimeout(() => {
        icon.classList.add('show');
    }, index * 300); 
});
const url = 'http://127.0.0.1:5500/frontend/scripts/contacts/contacts.html'

previewMenu(url, 'contact')