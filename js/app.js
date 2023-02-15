// console.log('Test')






// array con immagini
const slides = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg',
]

// Prendere le slide da html
const slideElements = document.getElementsByClassName('slide');
// console.log(slideElements);

// Prendere freccia a sinistra
const leftArrowElement = document.querySelector('.carousel__arrow.arrow-left')
// Prendere freccia a destra
const rightArrowElement = document.querySelector('.carousel__arrow.arrow-right')
// console.log(rightArrowElement)

// Creo la variabile indice che determina a quale slide siamo
let indiceSlideAttiva = 0;



// Tasto destra -> avanti

rightArrowElement.addEventListener('click', function () {

	console.log('current slide', indiceSlideAttiva);

    if (indiceSlideAttiva <  slideElements.length - 1){
    
    
        let slideCorrente = slideElements[indiceSlideAttiva];
        // togliendo la classe active
        slideCorrente.classList.remove('active');

        indiceSlideAttiva++;

        let prossimaSlide = slideElements[indiceSlideAttiva];
        // aggiungiamo la classe active alla seconda slide
        prossimaSlide.classList.add('active');

    }

    console.log('current slide', indiceSlideAttiva);


})

// Tasto sinistra -> indietro

leftArrowElement.addEventListener('click', function () {

	console.log('current slide', indiceSlideAttiva);

    if (indiceSlideAttiva > 0){
    
    
        let slideCorrente = slideElements[indiceSlideAttiva];
        // togliendo la classe active
        slideCorrente.classList.remove('active');

        indiceSlideAttiva--;

        let prossimaSlide = slideElements[indiceSlideAttiva];
        // aggiungiamo la classe active alla seconda slide
        prossimaSlide.classList.add('active');

    }

    console.log('current slide', indiceSlideAttiva);


})






















// rightArrowElement.addEventListener('click', function () {

//     let firstSlide = slideElements[0]
//     togliendo la classe active
//     firstSlide.classList.remove('active')

//     let secondSlide = slideElements[1]
//     aggiungiamo la classe active alla seconda slide
//     secondSlide.classList.add('active')

// })