const toggleSwitch = document.getElementById('modo');
const contenedorToggle = document.querySelector('.contenedor-toggle');

toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked) {
        document.body.classList.add('dark-mode');
        contenedorToggle.classList.add('switch-active');
    } else {
        document.body.classList.remove('dark-mode');
        contenedorToggle.classList.remove('switch-active');
    }
});
