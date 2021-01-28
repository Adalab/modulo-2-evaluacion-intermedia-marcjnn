'use strict';

const getNumberElement = document.querySelector(".js-number");
const buttonElement = document.querySelector(".js-button");
const clueElement = document.querySelector(".js-clue");
const clueParagraphElement = document.querySelector(".js-clue-paragraph");
const attemptsNumberElement = document.querySelector(".js-attemptsNumber");

clueElement.innerHTML = "Escripe el numero y dale a Prueba";

let attemptsNumber = 0;
attemptsNumberElement.innerHTML = attemptsNumber;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

console.log(`La respuesta es... ${randomNumber}`);

function handleClickButton(event) {
  event.preventDefault();
  compareChosenNumber()
  incrementAttemptsNumber();
}

function compareChosenNumber() {
  const introducedNumber = parseInt(getNumberElement.value);

  if (isNaN(introducedNumber)) {
    clueParagraphElement.innerHTML = "Tienes que introducir un número";
  } else if (introducedNumber === randomNumber) {
    clueParagraphElement.innerHTML = "Has ganado campeona!!!";
  } else if (introducedNumber < randomNumber && introducedNumber >= 1) {
    clueElement.innerHTML = "Demasiado bajo";
  } else if (introducedNumber > randomNumber && introducedNumber <= 100) {
    clueElement.innerHTML = "Demasiado alto";
  } else {
    clueElement.innerHTML = "El número debe estar entre 1 y 100.";
  }
}

function incrementAttemptsNumber() {
  attemptsNumber += 1;
  attemptsNumberElement.innerHTML = attemptsNumber;
}

buttonElement.addEventListener("click", handleClickButton);