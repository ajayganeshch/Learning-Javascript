"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🍾 Yeah Correct Number ";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 30;

// document.querySelector(".guess").value = 20;
// console.log(document.querySelector(".guess").value);

let y;
let score = 20;
let snum = Math.trunc(Math.random() * 20) + 1;

// document.querySelector(".number").textContent = snum;

let msg = document.querySelector(".message");

let hscore = 0;

let bg = document.querySelector("body");

let x = function () {
  y = document.querySelector(".guess").value
    ? Number(document.querySelector(".guess").value)
    : " ";

  // console.log(y);
  // || y < 0 || y > 20
  if (y === 0) {
    bg.style.backgroundColor = "#222";
    msg.textContent = "Number should be 1 to 20";
  } else if (y === " ") {
    bg.style.backgroundColor = "#222";
    document.querySelector(".message").textContent =
      "😒 Please Enter Number and Click On check!";
  } else if (y === snum) {
    document.querySelector(".message").textContent = "🍾 Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = snum;

    if (score > hscore) {
      hscore = score;
      document.querySelector(".highscore").textContent = hscore;
    }
  } else if (y !== snum) {
    bg.style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    if (score > 1) {
      document.querySelector(".message").textContent =
        y < snum ? "📉 Too Low" : "📉 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🙁 You lost Game";
      document.querySelector(".score").textContent = 0;
    }
  }
};

document.querySelector(".check").addEventListener("click", x);

let p = function () {
  document.querySelector(".message").textContent = "😏 Start guessing...";
  score = 20;
  document.querySelector(".score").textContent = score;
  snum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
};
document.querySelector(".again").addEventListener("click", p);

// document.querySelector(".check").addEventListener("click", x);
