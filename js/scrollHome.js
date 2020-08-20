export class ScrollHome {
    constructor(){
        this.controller = new ScrollMagic.Controller(); 
        this.iniciarScrollHome();
    }

    iniciarScrollHome(){
        var scene =new ScrollMagic.Scene({
            duration: 100, // the scene should last for a scroll distance of 100px
            offset: 0, // start this scene after scrolling for 50px
            triggerElement: '.home-image-gallery'
        })
        .addIndicators({
            name: 'fade-scene',
            colorTrigger: 'black',
            indent: 200,
            colorStart: '#75c695'
        })
        .addTo(this.controller); // assign the scene to the controller

    }
}