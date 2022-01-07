// MENU BOLADO

const lista = document.querySelectorAll('.lista');
function ativoLink(){
    lista.forEach((item) =>
    item.classList.remove('ativo'));
    this.classList.add('ativo');
}
lista.forEach((item) =>
item.addEventListener('click', ativoLink))