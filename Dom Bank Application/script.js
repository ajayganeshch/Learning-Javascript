"use strict";

let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let btnCloseModal = document.querySelector(".btn--close-modal");
let btnsOpenModal = document.querySelectorAll(".btn--show-modal");

let message = document.createElement("div");

let header = document.querySelector(".header");
let btnScrollTo = document.querySelector(".btn--scroll-to");
let section1 = document.querySelector("#section--1");

let tabs = document.querySelectorAll(".operations__tab");
let container = document.querySelector(".operations__tab-container");
let tabsContent = document.querySelectorAll(".operations__content");

let nav = document.querySelector(".nav");

// console.log(document.querySelector(".btn--show-modal"));

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// console.log(btnsOpenModal.length);

for (let i = 0; i < btnsOpenModal.length; i++) {
  // console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Scoll Learn

let scrollTo = function (e) {
  // console.log(section1.getBoundingClientRect());
  section1.scrollIntoView({ behavior: "smooth" });
};
btnScrollTo.addEventListener("click", scrollTo);

//Scroll Navigatirs
// document.querySelectorAll(".nav__link").forEach(function (mov) {
//   mov.addEventListener("click", function (e) {
//     e.preventDefault();
//     let id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//     console.log(id);
//   });
// });

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  let id = e.target.getAttribute("href");
  if (e.target.classList.contains("nav__link") && id != "#") {
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Cookie

message.classList.add("cookie-message");
message.innerHTML =
  "We will take Cookies . <button class = 'btn btn--close-cookie'>Got It!</button>";

header.append(message);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", () => message.remove());

//Tab Component

let contfun = function (e) {
  e.preventDefault();
  let className = e.target.closest(".operations__tab");

  if (!className) return;

  //Remove tabs and contents
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((t) => t.classList.remove("operations__content--active"));

  //Tabs
  className.classList.add("operations__tab--active");

  // Content
  document
    .querySelector(`.operations__content--${className.dataset.tab}`)
    .classList.add("operations__content--active");

  // End
};
container.addEventListener("click", contfun);

//Links Nav:

let hoverFun = function (e) {
  // console.log(this);
  // console.log(e);
  e.preventDefault;

  let link = e.target;

  if (!link.classList.contains("nav__link")) return;

  let siblings = link.closest("nav").querySelectorAll(".nav__link");

  siblings.forEach((k) => {
    if (k !== link) {
      k.style.opacity = this;
    }
  });
};

nav.addEventListener("mouseover", hoverFun.bind(0.5));

nav.addEventListener("mouseout", hoverFun.bind(1));

// Sticky Using Scroll:

/*
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
*/

// IntersectionObserver API **

/*
let obsCallBackFun = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
};

let obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

let observer = new IntersectionObserver(obsCallBackFun, obsOptions);

observer.observe(section1);
*/

let navHeight = nav.getBoundingClientRect().height;

let stickyNavFun = function (entries) {
  let entry = entries[0];
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

let stickyNavOpt = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

let headerObs = new IntersectionObserver(stickyNavFun, stickyNavOpt);

headerObs.observe(header);

// Reveal Sections Now :

let allSections = document.querySelectorAll(".section");

let sectionFun = function (entries, observer) {
  let entry = entries[0];
  // console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");

  // For Efficient websites we can use,but if we need cool animation site then no need.

  // observer.unobserve(entry.target);
};

let sectionEnt = {
  root: null,
  threshold: 0.15,
};

let sectionObs = new IntersectionObserver(sectionFun, sectionEnt);

allSections.forEach(function (section) {
  sectionObs.observe(section);
  section.classList.add("section--hidden");
});

// Images Loding
let imagTargets = document.querySelectorAll("img[data-src]");
// console.log(imagTargets);

let imgFun = function (entries, observer) {
  let entry = entries[0];
  // console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
    observer.unobserve(entry.target);
  });
};

let imgOptions = {
  root: null,
  threshold: 0,
  rootMargin: "200px",
};

let imgObserver = new IntersectionObserver(imgFun, imgOptions);

imagTargets.forEach((img) => imgObserver.observe(img));

// Slider

let sliderMain = function () {
  let slides = document.querySelectorAll(".slide");
  let btnLeft = document.querySelector(".slider__btn--left");
  let btnRight = document.querySelector(".slider__btn--right");
  let currentSlide = 0;

  let slidesNumber = document.getElementsByClassName("slide").length;

  let activeDot = function (slide) {
    let dotsAll = document.querySelectorAll(".dots__dot");
    dotsAll.forEach((t) => t.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };
  // console.log(slidesNumber);

  //Dots
  let dotsCointainer = document.querySelector(".dots");

  let createDots = function () {
    slides.forEach(function (_, i) {
      dotsCointainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  let goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // 0,100,200,300,400...

  let rightFun = function () {
    currentSlide++;

    currentSlide = currentSlide == slidesNumber ? 0 : currentSlide;

    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  let leftFun = function () {
    currentSlide--;

    currentSlide = currentSlide == -1 ? slidesNumber - 1 : currentSlide;

    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  let dotFun = function (e) {
    if (!e.target.dataset.slide) return;

    let goToSlideNumber = e.target.dataset.slide;

    goToSlide(goToSlideNumber);

    activeDot(goToSlideNumber);
  };

  let initialize = function () {
    goToSlide(0);
    createDots();
    activeDot(0);
  };
  initialize();

  btnRight.addEventListener("click", rightFun);

  btnLeft.addEventListener("click", leftFun);

  document.addEventListener("keydown", function (e) {
    e.key === "ArrowRight" && rightFun();
    e.key === "ArrowLeft" && leftFun();
  });

  dotsCointainer.addEventListener("click", dotFun);
};

sliderMain();
// let h1 = document.querySelector("h1");

// message.style.backgroundColor = "#37383d";
// message.style.width = "120%";

// console.log(getComputedStyle(message).color);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height) + 40 + "px";

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.script);

// console.log(document.getElementsByTagName("button"));
// console.log(new Array(document.getElementsByTagName("section")));
// console.log(document.querySelector(".section"));
// console.log(document.querySelector(".operations__content"));

/*

let h1Fun = function (e) {
  console.log(e);
};
h1.addEventListener("mouseenter", h1Fun);


let randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let ranColor = `rgb(${randomNum(0, 255)},${randomNum(0, 255)},${randomNum(
  0,
  255
)})`;

console.log(ranColor);
*/

// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   e.returnValue = "";
// });
