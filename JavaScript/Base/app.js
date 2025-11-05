console.log('Hello, World! My name is Tanya');

let firstHeader = document.querySelector('header');
console.log(firstHeader);

let headerByClass = document.querySelector('.header');
console.log(headerByClass);

let specialParagraph = document.querySelector('#special-par');
console.log(specialParagraph);

let btnByClass = document.querySelector('.my-button');
console.log(btnByClass);

let foundElement = document.querySelector('header');
console.log('Found element:', foundElement);

let a = 5;
let b = 8;

console.log(a + b);

let num1 = 34;
let num2 = 67;

console.log('Результат умножения:', num1 * num2);
console.log('Результат разницы:', num1 - num2);
console.log('Результат суммы:', num1 + num2);
console.log('Результат деления:', num1 / num2);

let productName = 'sword';
let productPrice = '17000';

console.log('Товар ' + productName + ' стоит ' + productPrice);

let paragraph = document.querySelector('p');
let addBtn = document.querySelector('#add-btn');
let removeBtn = document.querySelector('#remove-btn');
let toggleBtn = document.querySelector('#toggle-btn');
let div = document.querySelector('.bg-blue');

addBtn.onclick = function () {
    paragraph.classList.add('bold');
    console.log('added class bold')
}

removeBtn.onclick = function () {
    paragraph.classList.remove('red');
    console.log('removed class red');
}

toggleBtn.onclick = function () {
    paragraph.classList.toggle('hidden');
    console.log('removed class hidden');
}

toggleBtn.onclick = function () {
    div.classList.toggle('bg-red');
    console.log('removed class hidden');
}

let = titleElement = document.querySelector('h1');
let changeButton = document.querySelector('#change-title-btn');

changeButton.onclick = function () {
    titleElement.textContent = 'daedhgaehgfWQEFAFEDV';
    console.log('title changed to ' + titleElement.textContent);
}

let numberOne = document.querySelector('#number-input-first');
let numberTwo = document.querySelector('#number-input-second');
let countMessage = document.querySelector('#count-message');
let countButton = document.querySelector('#count-btn')


countButton.onclick = function () {
    let firstNumber = numberOne.value;
    let secondNumber = numberTwo.value;
    let countResult = +firstNumber + +secondNumber;
    countMessage.textContent = 'Value = ' + countResult;

}

let hideImg = document.querySelector('.img');
let hideBtn = document.querySelector('.hide-btn');

hideBtn.onclick = function () {
    hideImg.classList.toggle('hidden');
}

let userForm = document.querySelector('.form');

userForm.onsubmit = function (event) {
    
    console.log('Email has been sent!');
event.preventDefault();
}

