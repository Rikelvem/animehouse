// MENU BOLADO

const lista = document.querySelectorAll('.lista');
function ativoLink(){
    lista.forEach((item) =>
    item.classList.remove('ativo'));
    this.classList.add('ativo');
}
lista.forEach((item) =>
item.addEventListener('click', ativoLink))

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
    const context = this;
    const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
    };
};

const cabecalho = document.querySelectorAll('.cabecalho');
const cabecalhoClass = 'mostrar__ativo';

function cabecalhoScroll() {
    const windowTop = window.pageYOffset;
    cabecalho.forEach(function(element) {
        if(windowTop > 10) {
            element.classList.add(cabecalhoClass);
        }
        if(windowTop < 10) {
            element.classList.remove(cabecalhoClass);
        }
    })
}

if(cabecalho.length) {
window.addEventListener('scroll', debounce(function() {
    cabecalhoScroll();
}, 200));
}

// MENU BOTAO

const menuAberto = document.querySelector('.menu__lista');
let menuToggle = document.querySelector('.menu__botao');
menuToggle.onclick = function (){
    menuToggle.classList.toggle('aberto');
    menuAberto.classList.toggle('aberto');
} 

let listaMenu = document.querySelectorAll('.lista__menu');
for (let i=0; i<listaMenu.length; i++){
    listaMenu[i].onclick = function() {
    let j = 0;
    while(j < listaMenu.length){
        listaMenu[j++].className = 'lista__menu';
    }
    listaMenu[i].className = 'lista__menu selecionado';
    }
}

// TOGGLE DARKMODE

const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function(){
    toggle.classList.toggle('darkmode__ativo');
    body.classList.toggle('darkmode__ativo')
}

// MODAL BOLADO

function iniciaModal(modalID){
    if(localStorage.fechamodal !== modalID){
        const modal = document.getElementById(modalID);
        modal.classList.add('mostrar')
        if(modal){
            modal.addEventListener('click', (e) => {
                if(e.target.id == modalID || e.target.className == 'modal__fechar') {
                    modal.classList.remove('mostrar');
                    localStorage.fechamodal = modalID;
                }
            })
        }
    }
}

document.addEventListener('scroll', () => {
    if(window.pageYOffset > 100){
        iniciaModal('modal__mensagem');
    }
})