export class Detail {
    constructor() {
        gsap.registerPlugin(ScrollTrigger);

        this.tl = gsap.timeline();
        this.iniciarAnimacion();

    }

    iniciarAnimacion() {
        this.tl.from('.dish-hero h1', { duration: 2, y: -40, autoAlpha: 0 }, 0)
            .from('.dish-image-top img', { duration: 2, y: -30, autoAlpha: 0 }, 0);

        gsap.to('.images-container', { scrollTrigger: '.images-container', duration: 1, autoAlpha: 1 });
        gsap.to('.contact-data', {
            scrollTrigger: {
                trigger: '.contact-data',
                start: 'top bottom',
                scrub: true
            },
            duration: 1,
            backgroundPosition: "0% 200%"
        });
    }

}