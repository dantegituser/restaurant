export class ScrollHome {
    constructor() {
        this.controller = new ScrollMagic.Controller();
        this.iniciarScrollHome();
    }

    iniciarScrollHome() {
        let tl = new TimelineMax();

        tl.set('.item-scroll-cafe', { x: -100, y: 0 });
        // tl.set('.item-scroll-cuchara', { x: '900px', rotation: -45 });
        tl.set('.item-title-breakfast', { x: 0, y: 150, autoAlpha: 0 });
        tl.set('.item-scroll-desayuno', { x: 900, y: -200 });
        tl.set('.item-title-coffee', { x: 10, y: 0 });
        tl.set('.item-scroll-camaron', { x: 0 });
        tl.set('.item-title-seafood', { x: 0, y: 0 });
        tl.set('.item-scroll-sushi', { x: -100 });
        tl.set('.item-scroll-jitomates', { x: -30, rotation: 20 });
        tl.set('.item-title-steak', { x: 0, y: 0 });
        tl.set('.item-scroll-tabla', { x: 100, y: 20 });
        tl.set('.item-scroll-hojas', { x: 50, y: -100 });
        //tl.set('.item-scroll-limon1', { x: 250, y: -100 });
        tl.set('.item-title-maincourse', { x: -30, y: 0 });
        tl.set('.item-scroll-fuerte', { x: '30%', y: 150, autoAlpha: 0 });
        tl.set('.item-scroll-tenedor', { x: '800px', y: 150, rotate: 40 });
        tl.set('.item-title-dessert', { x: 100 });
        tl.set('.item-scroll-helado', { x: 50, y: 30 });
        tl.set('.item-scroll-helado2', { x: 250, y: -100 });

        tl.to('.item-scroll-cuchara', { x: 900, rotation: 45, ease: Linear.easeNone })
            .to('.item-title-breakfast', { x: 500, autoAlpha: 1, rotation: 40, ease: Linear.easeNone })
            .to('.item-scroll-cafe', { x: 100, ease: Linear.easeNone })
            .to('.item-scroll-desayuno', { x: 700, rotation: 70, ease: Linear.easeNone }, "+=0.5")
            .to('.item-title-coffee', { x: 150, y: -350, rotation: 20, ease: Linear.easeNone })
            .to('.item-scroll-camaron', { y: -200, x: 200, rotation: 270, ease: Linear.easeNone })
            .to('.item-title-seafood', { x: 500, y: -250, ease: Linear.easeNone })
            .to('.item-scroll-sushi', { x: 200, rotation: 30, ease: Linear.easeNone })
            .to('.item-title-steak', { x: 300, y: 150, rotation: -80, ease: Linear.easeNone, delay: 2 })
            .to('.item-scroll-tabla', { x: 550, y: 50, rotation: 20, ease: Linear.easeNone })
            .to('.item-title-maincourse', { duration: 1, x: 450, y: 50, rotation: 40, ease: Linear.easeNone }, "+=0.9")
            .to('.item-scroll-fuerte', { duration: 1, autoAlpha: 1, ease: Linear.easeNone }, "+=0.5")
            .to('.item-title-dessert', { y: -150, delay: 2, ease: Linear.easeNone })
            .to('.item-scroll-helado', { x: 200, y: -50, ease: Linear.easeNone })
            .to('.item-scroll-helado2', { x: 500, y: -100, ease: Linear.easeNone });

        var scene = new ScrollMagic.Scene({
                duration: 4000, // the scene should last for a scroll distance of 100px
                offset: 50, // start this scene after scrolling for 50px
                triggerElement: '.home-parallax',
                triggerHook: 1
            })
            .addIndicators({
                name: 'fade-scene',
                colorTrigger: 'black',
                indent: 50,
                colorStart: '#75c695'
            })
            .setTween(tl)
            //.setPin('.triggerScroll')
            .addTo(this.controller); // assign the scene to the controller

    }
}