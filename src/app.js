/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const naipe = [
    { symbol: "♥", color: "red" },
    { symbol: "♦", color: "red" },
    { symbol: "♣", color: "black" },
    { symbol: "♠", color: "black" }
  ];

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
  let naipeSymbol = randomNaipe.symbol;
  let naipeColor = randomNaipe.color;

  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  document.querySelector("#top").innerHTML = naipeSymbol;
  document.querySelector("#bot").innerHTML = naipeSymbol;
  if (naipeSymbol === "♥" || naipeSymbol === "♦") {
    document.querySelector("#top").classList.add("red");
    document.querySelector("#bot").classList.add("red");
    document.querySelector("#mid").classList.add("red");
  }

  document.querySelector("#mid").innerHTML = randomNumber;

  //let miCarta = `${randomNaipe} ${randomNumber} ${randomNaipe}`;
  //return miCarta;
};
