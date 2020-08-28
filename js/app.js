import { Slider } from './sliderHome.js';
import { ScrollHome } from './scrollHome.js';
import { Menu } from './menu.js';
document.addEventListener('DOMContentLoaded', iniciarAplicacion);

function iniciarAplicacion() {

    console.log('aplicacoine iniciada');
    const slider = new Slider();
    slider.cargarElementos();

    // scrollmagic
    const sm = new ScrollHome();

    // menu

    const menu = new Menu();
}