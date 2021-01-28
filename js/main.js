'use strict';

const getNumberElement = document.querySelector(".js-number");
const buttonElement = document.querySelector(".js-button");
const clueElement = document.querySelector(".js-clue");
const clueParagraphElement = document.querySelector(".js-clue-paragraph");
const attemptsNumberElement = document.querySelector(".js-attemptsNumber");

// generate randomNumber

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const randomNumber = getRandomNumber(100);

console.log(`La respuesta es... ${randomNumber}`);

// higher/lower number

console.log(getNumberElement.value);

// function incrementAttemptsNumber ()
let attemptsNumber = 0; // fuera xq se tiene que cargar en 0 y luego va incrementando, no reset cada vez

function handleCompareChosenNumber() {
  const introducedNumber = parseInt(getNumberElement.value);

  // if (introducedNumber === NaN) {
  //   console.log("Tienes que introducir un número");
  // }

    if (introducedNumber === randomNumber) {
    clueParagraphElement.innerHTML = "Has ganado campeona!!!";
  } else if (introducedNumber < randomNumber && introducedNumber >= 1) {
    clueElement.innerHTML = "Demasiado bajo";
  } else if (introducedNumber > randomNumber && introducedNumber <= 100) {
    clueElement.innerHTML = "Demasiado alto";
  } else {
    clueElement.innerHTML = "El número debe estar entre 1 y 100.";
  }

  // increment number of attempts

  attemptsNumber += 1;
  attemptsNumberElement.innerHTML = attemptsNumber;
}

buttonElement.addEventListener("click", handleCompareChosenNumber);