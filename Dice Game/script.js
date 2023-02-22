"use strict";

let score1 = 0;
let score2 = 0;

let fScore = 0;
let currentNum = 0;

let temp; // Temporary Variable

let abc; // Temporary variable to store content

let def; // Temporary Variable to store document.querySelector

let randomNumber; //generates random number

let i = 0; // "i" for iteration

let finalScore = 0; // Variable To Store Final Score

let randomPlayer; // This variable selects which player have to play
let tempNow;
let playerNow; // Player playing now

document.querySelector(".pop--up").classList.add("hidden");

let xyz = function (pqrs, tuv) {
  // To replace values
  temp = document.querySelector(pqrs);
  temp.textContent = tuv;
};

let docQue = function (docq) {
  def = document.querySelector(docq);
  return def;
};

let textFunction = function (classid) {
  abc = docQue(classid).textContent;
  return abc;
};

let choosePlayer = function () {
  if (
    textFunction("#current--1") != 0 ||
    textFunction("#current--2") != 0 ||
    textFunction("#score--1") != 0 ||
    textFunction("#score--2") != 0
  ) {
    // console.log("ok entered");
    docQue(".pop--up").classList.remove("hidden");

    // removePopUp();
  } else {
    randomPlayer = Math.trunc(Math.random() * 2) + 1;
    tempNow = randomPlayer === 1 ? 2 : 1;
    playerNow = randomPlayer;
    document
      .querySelector(`.player--${randomPlayer}`)
      .classList.add("player--active");
    document
      .querySelector(`.player--${tempNow}`)
      .classList.remove("player--active");
  }
  return playerNow;
};

let removePopUp = function () {
  if (!docQue(".pop--up").classList.contains("hidden")) {
    docQue(".pop--up").classList.add("hidden");
    console.log("ok entered pop up");
  }

  newGame();
};

playerNow = choosePlayer();

let diceImg = function (ranNum) {
  diceSelector.src = `dice-${ranNum}.png`;
};

xyz("#score--1", score1); // player 1 score updated to 0 initially
xyz("#score--2", score2); // ...... 2 ............................

let diceSelector = docQue(".dice");

let player1 = docQue(".player--1");
let player2 = docQue(".player--2");

let playSwitch = function (tempPlay) {
  playerNow = tempPlay === 1 ? 2 : 1;

  docQue(".player--1").classList.toggle("player--active");
  docQue(".player--2").classList.toggle("player--active");
};

let isWinnerThere = false;

let rollDice = function () {
  if (!isWinnerThere) {
    if (playerNow === 1) {
      randomNumber = Math.trunc(Math.random() * 6) + 1;

      diceImg(randomNumber);

      currentNum = Number(textFunction("#current--1"));

      if (randomNumber === 1) {
        xyz("#current--1", 0);
        playSwitch(playerNow);
      } else {
        fScore = currentNum + randomNumber;
        xyz("#current--1", fScore);
      }
    } else if (playerNow === 2) {
      randomNumber = Math.trunc(Math.random() * 6) + 1;

      diceImg(randomNumber);

      currentNum = Number(textFunction("#current--2"));

      if (randomNumber === 1) {
        xyz("#current--2", 0);
        playSwitch(playerNow);
      } else {
        fScore = currentNum + randomNumber;
        xyz("#current--2", fScore);
      }
    }
  }
};

let checkWinner = function (fin) {
  if (fin >= 20) {
    document
      .querySelector(`.player--${playerNow}`)
      .classList.add("player--winner");
    isWinnerThere = true;
  }
};
let finalAnswer = function () {
  if (!isWinnerThere) {
    if (playerNow === 1) {
      finalScore =
        Number(textFunction("#current--1")) + Number(textFunction("#score--1"));
      docQue("#score--1").textContent = finalScore;

      checkWinner(finalScore);

      xyz("#current--1", 0);
      playSwitch(playerNow);
    } else if (playerNow === 2) {
      finalScore =
        Number(textFunction("#current--2")) + Number(textFunction("#score--2"));
      docQue("#score--2").textContent = finalScore;
      checkWinner(finalScore);
      xyz("#current--2", 0);
      playSwitch(playerNow);
    }
  }
};

let newGame = function () {
  docQue("#current--1").textContent = 0;
  docQue("#current--2").textContent = 0;
  docQue("#score--1").textContent = 0;
  docQue("#score--2").textContent = 0;

  // if (playerNow === 2) {
  //   playSwitch(playerNow);
  // }

  if (
    document.querySelector(".player--1").classList.contains("player--winner")
  ) {
    document.querySelector(".player--1").classList.remove("player--winner");
  } else {
    document.querySelector(".player--2").classList.remove("player--winner");
  }

  isWinnerThere = false;

  playerNow = choosePlayer();
};

docQue(".btn--roll").addEventListener("click", rollDice);

docQue(".btn--hold").addEventListener("click", finalAnswer);

docQue(".btn--new").addEventListener("click", newGame);

docQue(".btn--pvp").addEventListener("click", choosePlayer);

docQue(".btn--ok").addEventListener("click", removePopUp);
