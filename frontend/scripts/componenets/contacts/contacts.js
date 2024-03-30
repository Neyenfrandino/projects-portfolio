const icons = document.querySelectorAll('.container-icon-contacts i');

icons.forEach((icon, index) => {
    setTimeout(() => {
        icon.classList.add('show');
    }, index * 300); // Ajusta el retraso entre la aparición de cada ícono (en milisegundos)
});