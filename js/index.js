// MENU BOLADO

const lista = document.querySelectorAll('.lista');
function ativoLink(){
    lista.forEach((item) =>
    item.classList.remove('ativo'));
    this.classList.add('ativo');
}
lista.forEach((item) =>
item.addEventListener('click', ativoLink))

// TOGGLE DARKMODE

const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function(){
    toggle.classList.toggle('darkmode__ativo');
    body.classList.toggle('darkmode__ativo')
}