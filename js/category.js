export class Category {
    constructor() {
        var liHover = document.querySelectorAll('.dishes-list li');


        liHover.forEach(element => {

            element.addEventListener('mouseover', () => {
                let liId = element.getAttribute('data-id');

                this.aparecerImg(liId);
            });
        });
    }
    aparecerImg(id) {

        let imagen = document.getElementById('image-dish');
        imagen.src = `img/dishes/detail/menu${id}.jpg`;

    }



}