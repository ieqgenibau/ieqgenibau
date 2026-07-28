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
    link.addEventListener('click', function () {
        navLinks.forEach(function (outroLink) {
            outroLink.classList.remove('link-selecionado');
        });

        link.classList.add('link-selecionado');
        fecharMenu();
    });
});


/* ==========================
   FORMULÁRIO
========================== */

const formulario = document.getElementById('meuForm');
const mensagemSucesso = document.getElementById('mensagemSucesso');
const iframe = document.getElementById('formulario_oculto');

if (formulario && mensagemSucesso && iframe) {

    formulario.addEventListener('submit', function () {

        const botao = document.getElementById('botaoEnviar');

        botao.disabled = true;
        botao.textContent = 'ENVIANDO...';

    });

    iframe.addEventListener('load', function () {

        formulario.reset();

        mensagemSucesso.style.display = 'block';
        mensagemSucesso.textContent = 'Mensagem enviada com sucesso!';

        const botao = document.getElementById('botaoEnviar');

        botao.disabled = false;
        botao.textContent = 'ENVIAR MENSAGEM';

        setTimeout(function () {
            mensagemSucesso.style.display = 'none';
        }, 5000);

    });

}