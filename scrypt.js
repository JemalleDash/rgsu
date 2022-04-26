let containerOne = document.querySelector('#containerOne');
let containerTwo = document.querySelector('#containerTwo');
let containerThree = document.querySelector('#containerThree');

let btnTOne = document.querySelector('#btnOne');
let btnTwo = document.querySelector('#btnTwo');
let btnThree = document.querySelector('#btnThree');

btnTOne.addEventListener('click', function(){
    containerOne.classList.toggle('container__block');
    containerTwo.classList.add('container__block');
    containerThree.classList.add('container__block');
});

btnTwo.addEventListener('click', function(){
    containerOne.classList.add('container__block');
    containerTwo.classList.toggle('container__block');
    containerThree.classList.add('container__block');
})

btnThree.addEventListener('click', function(){
    containerOne.classList.add('container__block');
    containerTwo.classList.add('container__block');
    containerThree.classList.toggle('container__block');
})