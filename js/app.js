import { Slider } from './sliderHome.js';
import { ScrollHome } from './scrollHome.js';
import { Menu } from './menu.js';
import { Detail } from './detail.js';
document.addEventListener('DOMContentLoaded', iniciarAplicacion);

function iniciarAplicacion() {

    if (document.querySelector('.home')) {
        const slider = new Slider();
        slider.cargarElementos();
        // scrollmagic
        const sm = new ScrollHome();
    }

    if (document.querySelector('.dish-detail')) {
        // scrolltrigger de detalle de dish
        const detail = new Detail();
    }




    // menu

    const menu = new Menu();
}