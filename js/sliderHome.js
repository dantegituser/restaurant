export class Slider {
    constructor() {
        this.arreglo = [];
        this.elementos = {};
        this.tl = new TimelineMax();
    }



    cargarElementos() {
        this.elementos.ELEMENTO_ACTIVO = document.querySelector('.active');
        this.elementos.SLIDER_ITEM = document.querySelector('.dish-item-cont');
        this.elementos.NAV_PREV = document.querySelector('.arrow-down');
        this.elementos.NAV_NEXT = document.querySelector('.arrow-up');
        this.elementos.NAV_NEXT_LINK = document.querySelector('.arrow-up a');
        this.elementos.NAV_PREV_LINK = document.querySelector('.arrow-down a');
        this.elementos.CONTENEDOR_SLIDER = document.querySelector('.dishes-container');
        this.elementos.TODOS_ELEMENTOS = document.querySelectorAll('.dishes-container .dish-item-cont');

        this.iniciarSlider();
        this.addEventListeners();

    }

    iniciarSlider() {
        console.log('iniciando slider');
        // hidde all elements but active
        let activo = this.elementos.ELEMENTO_ACTIVO;
        let todos = this.elementos.TODOS_ELEMENTOS;

        todos.forEach(slide => {
            if (!slide.classList.contains('active')) {
                this.tl.set(slide, { autoAlpha: 0 });

            }
        });

        // hide arrow down
        this.tl.set(this.elementos.NAV_PREV, { autoAlpha: 0.2 });

    }

    goToNextSlide(slideOut, slideIn) {

        // console.log('slidein', slideIn);
        let tl = new TimelineMax();
        let slideOutH2 = slideOut.querySelector('h2');
        let slideInH2 = slideIn.querySelector('h2');



        // animate h2 y slide
        tl.set(slideIn, {
                y: '100%',
                autoAlpha: 1,
                onComplete: function() {
                    this.targets().forEach(elem => elem.classList.add("active"));
                }
            })
            .set(slideOut, {
                onComplete: function() {
                    this.targets().forEach(elem => elem.classList.remove("active"));
                }
            })
            .to(slideOutH2, { duration: 1, y: '-=20px', autoAlpha: 0, ease: Power3.easeInOut }, 0)
            .to(slideOut, { duration: 1, y: '-100%', ease: Power3.easeInOut }, 0)
            .to(slideIn, { duration: 1, y: '-=100%', ease: Power3.easeInOut }, 0)
            .fromTo(slideInH2, 1, { y: '+=20px', autoAlpha: 0 }, { autoAlpha: 1, y: '0', ease: Power1.easeInOut }, 0.3);





    }
    addEventListeners() {
        this.elementos.NAV_NEXT.addEventListener('click', (e) => {
            e.preventDefault();
            let slideOut = document.querySelector('.dish-item-cont.active');
            let slideIn = document.querySelector('.dish-item-cont.active').nextElementSibling;

            if (slideIn) {
                this.goToNextSlide(slideOut, slideIn);
            }
        });
    }


}