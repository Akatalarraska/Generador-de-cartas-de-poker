/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const naipe = ["♥", "♦", "♣", "♠"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomNaipe = naipe[Math.floor(Math.random() * naipe.length)];
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  document.querySelector("#top").innerHTML = randomNaipe;
  document.querySelector("#mid").innerHTML = randomNumber;
  document.querySelector("#bot").innerHTML = randomNaipe;
  //let miCarta = `${randomNaipe} ${randomNumber} ${randomNaipe}`;
  //return miCarta;

  /*
    let cardHTML = document.querySelector("div");
    cardHTML.innerHTML = randomNaipe;

    let numberHTML = document.getElementById("mid");
    numberHTML.innerHTML = randomNumber;
    */
};

/*
let paloSuperior = document.querySelector("#palo-superior");
paloSuperior.innerHTML = palosRandom;

let paloInferior = document.querySelector("#palo-inferior");
paloInferior.innerHTML = palosRandom;

let valorCarta = document.querySelector(".valor-carta");
valorCarta.innerHTML = valoresRandom;
*/
