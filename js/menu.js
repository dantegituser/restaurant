export class Menu {

    constructor() {
        this.tlMenu = gsap.timeline({ paused: true });
        this.MENU_LISTENERS = {};
        console.log('inciiado menu');
        this.iniciarListeners();

    }

    iniciarListeners() {
        this.MENU_LISTENERS.menuContainer = document.querySelector('#menu-full');
        this.MENU_LISTENERS.menuleftUl = document.querySelector('.menu-full-left ul');
        this.MENU_LISTENERS.menuleftWidth = document.querySelector('.menu-full-left .left-width');
        this.MENU_LISTENERS.menuRightImgCont = document.querySelector('.menu-full-right .menu-img-container');
        this.MENU_LISTENERS.menuRightCloseBtn = document.querySelector('.menu-full-right .close-menu');
        this.MENU_LISTENERS.menuOpenBtn = document.querySelector('#menu-link-open');

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

    }

    cerrarMenu() {
        this.tlMenu.reverse(0);
    }


}