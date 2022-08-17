const botaoMenu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo');
})