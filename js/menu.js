export class Menu {

    constructor() {
        this.tlMenu = gsap.timeline({ paused: true });
        this.MENU_LISTENERS = {};
        this.iniciarListeners();

    }

    iniciarListeners() {
        this.MENU_LISTENERS.menuContainer = document.querySelector('#menu-full');
        this.MENU_LISTENERS.menuleftUl = document.querySelector('.menu-full-left ul');
        this.MENU_LISTENERS.menuleftWidth = document.querySelector('.menu-full-left .left-width');
        this.MENU_LISTENERS.menuRightImgCont = document.querySelector('.menu-full-right .menu-img-container');
        this.MENU_LISTENERS.menuRightCloseBtn = document.querySelector('.menu-full-right .close-menu');
        this.MENU_LISTENERS.menuOpenBtn = document.querySelector('#menu-link-open');
        // menu acordeon listeners
        this.MENU_LISTENERS.arrayImagenes = document.querySelectorAll('.menu-img-container img');
        this.MENU_LISTENERS.primeraImagen = document.querySelector('.menu-img-container img');
        this.MENU_LISTENERS.arrayLinks = document.querySelectorAll('.menu-full-left ul li');

        //timeline
        this.tlMenu.to(this.MENU_LISTENERS.menuContainer, { duration: 0.5, autoAlpha: 1, display: 'flex' })
            .to(this.MENU_LISTENERS.menuOpenBtn, { duration: 0.5, autoAlpha: 0 })
            .to(this.MENU_LISTENERS.menuContainer, { duration: 1, backgroundImage: "linear-gradient(to left, white 100%, rgba(0, 0, 0, 0) 50%)" }, "-=0.5")
            .to(this.MENU_LISTENERS.menuleftWidth, { duration: 1, width: '100%', autoAlpha: 1 })
            .to(this.MENU_LISTENERS.menuleftUl, { duration: 1, autoAlpha: 1 }, "opacity")
            .to(this.MENU_LISTENERS.menuRightImgCont, { duration: 1, autoAlpha: 1 }, "opacity")
            .to(this.MENU_LISTENERS.menuRightCloseBtn, { duration: 1, autoAlpha: 1 }, "opacity");


        this.MENU_LISTENERS.menuOpenBtn.addEventListener('click', () => {
            this.abrirMenu();
        });
        this.MENU_LISTENERS.menuRightCloseBtn.addEventListener('click', () => {
            this.cerrarMenu();
        });

    }

    abrirMenu() {
        this.tlMenu.play(0);
        this.iniciarAcordeon();

    }

    cerrarMenu() {
        this.tlMenu.reverse(0);
    }

    iniciarAcordeon() {
        //poner la imagen 1 en posicion
        gsap.set(this.MENU_LISTENERS.primeraImagen, { x: '0%' });
        // setear los event listeners
        let activo = [];
        this.MENU_LISTENERS.arrayLinks.forEach((elemento, index) => {
            activo.push(elemento.getAttribute('data-id'));
            elemento.addEventListener('mouseover', () => {
                this.cambiarAcordeon(activo[index]);
            });
        });
    }

    cambiarAcordeon(id) {
        // poner todos invisibles
        let arrayImgs = this.MENU_LISTENERS.arrayImagenes;
        arrayImgs.forEach((elemento) => {
            gsap.to(elemento, { duration: 1, x: '100%' });
        });

        // posicionar la correecta
        gsap.to(arrayImgs[id], { duration: 1, x: 0 });
    }


}