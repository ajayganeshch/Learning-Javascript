"use strict";

let openText = document.querySelectorAll(".show-modal");
let modal = document.querySelector(".modal");
let overLay = document.querySelector(".overlay");
let closeText = document.querySelector(".close-modal");

let i = 0;

// console.log(openText[0].textContent);

// document.querySelector(".hidden").style.display = "block";

let func1 = function () {
  // console.log("button clicked");
  modal.classList.remove("hidden");
  overLay.classList.remove("hidden");
};

for (i = 0; i < openText.length; i++) {
  openText[i].addEventListener("click", func1);
}

let func2 = function () {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
};

closeText.addEventListener("click", func2);
overLay.addEventListener("click", func2);

let func3 = function (e) {
  // console.log(e.code, "Escape");
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    func2();
  }
};

document.addEventListener("keydown", func3);
