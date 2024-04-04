import { previewMenu } from "../../../frontend/index/app"

const icons = document.querySelectorAll('.container-icon-contacts i');

icons.forEach((icon, index) => {
    setTimeout(() => {
        icon.classList.add('show');
    }, index * 300); // Ajusta el retraso entre la aparición de cada ícono (en milisegundos)
});
const url = 'http://127.0.0.1:5500/frontend/scripts/contacts/contacts.html'

previewMenu(url, 'contact')