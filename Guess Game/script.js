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

let smessage = function (lmessage) {
  document.querySelector(".message").textContent = lmessage;
};

let sscore = function (lscore) {
  document.querySelector(".score").textContent = lscore;
};

let bgc = function (bgcc) {
  document.querySelector("body").style.backgroundColor = bgcc;
};

let nnumber = function (nnum) {
  document.querySelector(".number").textContent = nnum;
};

let hscore = 0;

let bg = document.querySelector("body");

let x = function () {
  y = document.querySelector(".guess").value
    ? Number(document.querySelector(".guess").value)
    : " ";

  if (y === 0) {
    bg.style.backgroundColor = "#222";
    msg.textContent = "Number should be 1 to 20";
  } else if (y === " ") {
    bg.style.backgroundColor = "#222";
    smessage("😒 Please Enter Number and Click On check!");
  } else if (y === snum) {
    smessage("🍾 Correct Number");
    bgcc("#60b347");
    nnum(snum);

    if (score > hscore) {
      hscore = score;
      document.querySelector(".highscore").textContent = hscore;
    }
  } else if (y !== snum) {
    bg.style.backgroundColor = "#222";
    nnum("?");
    if (score > 1) {
      smessage(y < snum ? "📉 Too Low" : "📉 Too High");
      score--;
      sscore(score);
    } else {
      smessage("🙁 You lost Game");
      sscore(0);
    }
  }
};

document.querySelector(".check").addEventListener("click", x);

let p = function () {
  smessage("😏 Start guessing...");
  score = 20;
  document.querySelector(".score").textContent = score;
  snum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").value = "";
  bgc("#222");
  nnum("?");
};
document.querySelector(".again").addEventListener("click", p);

// document.querySelector(".check").addEventListener("click", x);
