"use strict";

const getNumberElement = document.querySelector(".js-number");
const buttonElement = document.querySelector(".js-button");
const clueElement = document.querySelector(".js-clue");
const attemptsNumberElement = document.querySelector(".js-attemptsNumber");
const minNumber = 1;
const maxNumber = 100;

clueElement.innerHTML = "Escripe el numero y dale a Prueba";

let attemptsNumber = 0;
attemptsNumberElement.innerHTML = attemptsNumber;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(maxNumber);

console.log(`La respuesta es... ${randomNumber}`);

function handleClickButton(event) {
  event.preventDefault();

  const clueText = getClueTextForNumber(parseInt(getNumberElement.value));
  incrementAttempts();

  fillHtml(clueElement, clueText);
  fillHtml(attemptsNumberElement, attemptsNumber);
}

function getClueTextForNumber(introducedNumber) {
  if (isNaN(introducedNumber)) {
    return "Tienes que introducir un número";
  }

  if (introducedNumber === randomNumber) {
    return "Has ganado campeona!!!";
  }

  if (introducedNumber < randomNumber && introducedNumber >= minNumber) {
    return "Demasiado bajo";
  }

  if (introducedNumber > randomNumber && introducedNumber <= maxNumber) {
    return "Demasiado alto";
  }

  return `El número debe estar entre ${minNumber} y ${maxNumber}.`;
}

function incrementAttempts() {
  attemptsNumber += 1;
}

function fillHtml(el, text) {
  el.innerHTML = text;
}

buttonElement.addEventListener("click", handleClickButton);
