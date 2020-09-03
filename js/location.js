export class Location {
    constructor() {
        gsap.registerPlugin(ScrollTrigger);
        this.tl = gsap.timeline();
        this.iniciarScroll();

    }

    iniciarScroll() {
        let location2 = document.querySelector('.location02');
        this.tl.to('.location02', {
            yPercent: -100,
            scrollTrigger: {
                trigger: '.location02',
                pin: true,
                start: 'top center',
                markers: false,
                pinSpacing: false,
                scrub: true
            }
        });
    }



}