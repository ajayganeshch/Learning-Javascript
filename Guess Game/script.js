"use strict";

// pqrs takes class or ids , tuv takes message that should be displayed

let y;
let score = 20;
let snum = Math.trunc(Math.random() * 20) + 1;
console.log(snum);
let temp;

let msg = document.querySelector(".message");

let xyz = function (pqrs, tuv) {
  temp = document.querySelector(pqrs);
  temp.textContent = tuv;
};

let bgc = function (bgcc) {
  document.querySelector("body").style.backgroundColor = bgcc;
};

let hscore = 0;

let bg = document.querySelector("body");

let x = function () {
  y = document.querySelector(".guess").value
    ? Number(document.querySelector(".guess").value)
    : " ";

  if (y === 0) {
    bg.style.backgroundColor = "#222";
    xyz(".message", "Number should be 1 to 20");
    document.querySelector(".guess").value = "";
  } else if (y === " ") {
    bgc("#222");
    xyz(".message", "😒 Please Enter Number and Click On check");
  } else if (y === snum) {
    xyz(".message", "🍾 Correct Number");
    bgc("#60b347");
    xyz(".number", snum);

    if (score > hscore) {
      hscore = score;
      xyz(".highscore", hscore);
    }
  } else if (y !== snum) {
    bgc("#222");
    xyz(".number", "?");

    if (score > 1) {
      xyz(".message", y < snum ? "📉 Too Low" : "📉 Too High");
      score--;
      xyz(".score", score);
    } else {
      xyz(".message", "🙁 You lost Game");
      xyz(".score", 0);
    }
  }
};

document.querySelector(".check").addEventListener("click", x);

let p = function () {
  xyz(".message", "😏 Start guessing...");
  score = 20;
  xyz(".score", score);
  snum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  bgc("#222");
  nnum("?");
};
document.querySelector(".again").addEventListener("click", p);
