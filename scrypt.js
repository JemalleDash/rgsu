let containerOne = document.querySelector('#containerOne');
let containerTwo = document.querySelector('#containerTwo');
let containerThree = document.querySelector('#containerThree');

let btnTOne = document.querySelector('#btnOne');
let btnTwo = document.querySelector('#btnTwo');
let btnThree = document.querySelector('#btnThree');

let oneDiv = document.querySelector('#oneDiv');
let twoDiv = document.querySelector('#twoDiv');
let threeDiv = document.querySelector('#threeDiv');
let fourDiv = document.querySelector('#fourDiv');
let fiveDiv = document.querySelector('#fiveDiv');
let sixDiv = document.querySelector('#sixDiv');

let btnArrowOne = document.querySelector('#btnArrowOne');
let btnArrowTwo = document.querySelector('#btnArrowTwo');
let btnArrowTree = document.querySelector('#btnArrowTree');
let btnArrowFour = document.querySelector('#btnArrowFour');
let btnArrowFive = document.querySelector('#btnArrowFive');
let btnArrowSix = document.querySelector('#btnArrowSix');

let formatBtn = document.querySelector('#formatBtn');



/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


var TwoslideIndex = 1; 
TwoshowSlides(TwoslideIndex); 
 
/* Функция увеличивает индекс на 1, показывает следующй слайд*/ 
function plusSlideTwo() { 
    TwoshowSlides(TwoslideIndex += 1); 
} 
 
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/ 
function minusSlideTwo() { 
    TwoshowSlides(TwoslideIndex -= 1);   
} 
 
/* Устанавливает текущий слайд */ 
function TwocurrentSlide(b) { 
    TwoshowSlides(TwoslideIndex = b); 
} 
 
/* Основная функция слайдера */ 
function TwoshowSlides(b) { 
    var a; 
    var Twoslides = document.getElementsByClassName("pytigorsk__item"); 
    if (b > Twoslides.length) { 
        TwoslideIndex = 1 
    } 
    if (b < 1) { 
        TwoslideIndex = Twoslides.length 
    } 
    for (a = 0; a < Twoslides.length; a++) { 
        Twoslides[a].style.display = "none"; 
    } 
    Twoslides[TwoslideIndex - 1].style.display = "block"; 
}

var slideIndexThree = 1; 
showSlidesThree(slideIndexThree); 
 
/* Функция увеличивает индекс на 1, показывает следующй слайд*/ 
function plusSlideThree() { 
    showSlidesThree(slideIndexThree += 1); 
} 
 
/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/ 
function minusSlideThree() { 
    showSlidesThree(slideIndexThree -= 1);   
} 
 
/* Устанавливает текущий слайд */ 
function currentSlideThree(n) { 
    showSlidesThree(slideIndexThree = n); 
} 
 
/* Основная функция слайдера */ 
function showSlidesThree(n) { 
    var i; 
    var slides = document.getElementsByClassName("achievements__slider--block"); 
    if (n > slides.length) { 
      slideIndexThree = 1 
    } 
    if (n < 1) { 
        slideIndexThree = slides.length 
    } 
    for (i = 0; i < slides.length; i++) { 
        slides[i].style.display = "none"; 
    }
    slides[slideIndexThree - 1].style.display = "flex"; 
}

//счётчик//

const counters = document.querySelectorAll(".universitysocial__infa");

counters.forEach((universitysocial__infa)=>{
    universitysocial__infa.innerHTML= '0';

    const updateCounter = () => {
        const target = +universitysocial__infa.getAttribute('data-target');
        const c = +universitysocial__infa.innerHTML;

        if( c < target){
            universitysocial__infa.innerText = c + 10;
            setTimeout(updateCounter, 1);
        }else{
            universitysocial__infa.innerText = target;
        }
    }
    updateCounter()
});

btnArrowOne.addEventListener('click', function(){
    if(oneDiv.style.display =="flex"){
        oneDiv.style.display ="none"
    }
    else if(oneDiv.style.display =="none"){
        oneDiv.style.display ="flex"   
    }
});

btnArrowTwo.addEventListener('click', function(){
    if(twoDiv.style.display =="flex"){
        twoDiv.style.display ="none"
    }
    else if(twoDiv.style.display =="none"){
        twoDiv.style.display ="flex"   
    }
});

btnArrowTree.addEventListener('click', function(){
    if(threeDiv.style.display =="flex"){
        threeDiv.style.display ="none"
    }
    else if(threeDiv.style.display =="none"){
        threeDiv.style.display ="flex"   
    }
});

btnArrowFour.addEventListener('click', function(){
    if(fourDiv.style.display =="flex"){
        fourDiv.style.display ="none"
    }
    else if(fourDiv.style.display =="none"){
        fourDiv.style.display ="flex"   
    }
});

btnArrowFive.addEventListener('click', function(){
    if(fiveDiv.style.display =="flex"){
        fiveDiv.style.display ="none"
    }
    else if(fiveDiv.style.display =="none"){
        fiveDiv.style.display ="flex"   
    }
});

btnArrowSix.addEventListener('click', function(){
    if(sixDiv.style.display =="flex"){
        sixDiv.style.display ="none"
    }
    else if(sixDiv.style.display =="none"){
        sixDiv.style.display ="flex"   
    }
});

formatBtn.addEventListener('click', function(){
    alert('Вы успешно отправили')
});

var modelOne = document.querySelector('#modelOne')
function oneF(){
    modelOne.classList.toggle('modelity');
} 

var modelTwo = document.querySelector('#modelTwo')
function TwoF(){
    modelTwo.classList.toggle('modelity');
} 

var modelThree = document.querySelector('#modelThree')
function ThreeF(){
    modelThree.classList.toggle('modelity');
} 