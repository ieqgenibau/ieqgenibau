const menuToggle = document.getElementById('menuToggle');
const navList = document.querySelector('.nav-list');
const overlayMenu = document.getElementById('overlayMenu');
const navLinks = document.querySelectorAll('.nav-list a');

function abrirMenu() {
    navList.classList.add('ativo');
    overlayMenu.classList.add('ativo');
    menuToggle.classList.add('aberto');
    menuToggle.setAttribute('aria-label', 'Fechar menu');
}

function fecharMenu() {
    navList.classList.remove('ativo');
    overlayMenu.classList.remove('ativo');
    menuToggle.classList.remove('aberto');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
}

menuToggle.addEventListener('click', function () {
    if (navList.classList.contains('ativo')) {
        fecharMenu();
    } else {
        abrirMenu();
    }
});

overlayMenu.addEventListener('click', fecharMenu);

navLinks.forEach(function (link) {
    link.addEventListener('click', fecharMenu);
});