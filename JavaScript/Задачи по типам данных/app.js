let inputText = document.querySelector('#isJS');
let button = document.querySelector('#isJS-btn');
let message = document.querySelector('#isJS-message');


button.onclick = function () {
    let includesJS = inputText.value.includes('JavaScript');
    message.textContent = ('Text includes JS: ' + includesJS);
}


let upperCaseText = document.querySelector('#UC');
let upperCaseButton = document.querySelector('#UC-btn');
let upperCaseMessage = document.querySelector('#UC-message');

upperCaseButton.onclick = function () {
    let upperCaseResult = upperCaseText.value.toUpperCase();
    let length = upperCaseText.value.length;

    upperCaseMessage.textContent = ('Result: ' + upperCaseResult + ' length: ' + length);
}

let string = "Программирование на JavaScript - это интересно";

let firstA = function () {
    let firstAIndex = string.indexOf('а');
    let lastAIndex = string.lastIndexOf('а');
    console.log(firstAIndex + ' ' + lastAIndex);
}

let firstNumber = document.querySelector('#firstnumber');
let secondNumber = document.querySelector('#secondnumber');
let resultBtn = document.querySelector('#multi-btn');
let multiMessage = document.querySelector('#multi-message');

resultBtn.onclick = function () {
    let number1 = parseInt(firstNumber.value);
    let number2 = parseInt(secondNumber.value);
    let result = number1 * number2;
    if (result > 100) { 
multiMessage.textContent = result + ' Big number!'
    } else { 
       multiMessage.textContent = result + ' Small number!';
    }
}

let roundFunction = function (number) {
    console.log(number.toFixed(2) + ' ' + Math.round(number) + ' ' + Math.floor(number));
}

let password = document.querySelector('#password');
let pwBtn = document.querySelector('#pw-btn');
let checkMessage = document.querySelector('#pw-message');

pwBtn.onclick = function () {
    if (password.value.length >= 6 && password.value.match(/[0-9]/)) {
        checkMessage.textContent = "good password";
    } else {
        checkMessage.textContent = "bad password";
    }
}

