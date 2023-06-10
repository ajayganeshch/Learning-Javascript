"use strict";

// // Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// // Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// let x = new Map();
// x.set("Ajay", "Anna");
// x.set("Ganesh", "oK");
// console.log(x.get("Ajay"));

// let y = [1, 2, 3, 4];
// let z = new Map(Object.entries(y));
// console.log(z);

// let question = new Map([
//   ["questions", "No question boti"],
//   [true, "Answer was correct"],
//   [1, "Java"],
//   [2, "Python"],
//   [3, "C"],
//   [false, "Wrong ans"],
// ]);

// console.log(question);

// console.log(question.get(true));
// console.log([...question.keys()]);

// console.log([...question.values()]);
// for (let [key, value] of question) {
//   if (typeof key == "number") {
//     console.log(`Answer ${key} : ${value}`);
//   }
// }
// console.log("Hi");

// const gameEvents = new Map([
//   [17, "⚽ GOAL"],
//   [36, "� Substitution"],
//   [47, "⚽ GOAL"],
//   [61, "� Substitution"],
//   [64, "� Yellow card"],
//   [69, "� Red card"],
//   [70, "� Substitution"],
//   [72, "� Substitution"],
//   [76, "⚽ GOAL"],
//   [80, "⚽ GOAL"],
//   [92, "� Yellow card"],
// ]);

// console.log(gameEvents);
// let events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// for (let [x, y] of gameEvents) {
//   let z = x <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${z} HALF] ${x} : ${y}`);
// }

// --------------------------- Strings : ----------------------

// let airline = "Ajay Ganesh";
// let plane = "A2345";

// console.log(airline.lastIndexOf("a"));
// console.log(plane.length);
// console.log(airline.slice(-1));
// // console.log(airline.slice(indexof("")));
// console.log(airline.slice(airline.indexOf(" ") + 1));

// let email = "ajayganesh@gmail.com";
// let tempEmail = "   ajayGanesH@Gmail.com 1 2   ";
// console.log(tempEmail.length);
// // console.log(tempEmail.toLocaleLowerCase());
// console.log(tempEmail.toLowerCase().trim());

// let announcement =
//   "This is Ajay Ganesh. This is door. This door number is 219.";

// console.log(announcement);

// console.log(announcement.slice(0, 4));
// console.log(
//   announcement.slice(announcement.indexOf("A"), announcement.indexOf("sh") + 2)
// );

// console.log(announcement.replace(/door/, "room"));
// console.log(announcement.replaceAll("door", "room"));

/*

Challenge In Strings : 

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

let z = function () {
  let txt = document.querySelector("textarea").value;
  console.log(txt);
  let txtArr = txt.split("\n");
  console.log(txtArr);
  let newArr = [];
  let i = 1;
  let j = 0;
  let count = 0;
  let newTxt;
  for (let rep of txtArr) {
    count = 0;
    for (j = 0; j < rep.length; j++) {
      if (rep[j] == "_") {
        count++;
      }
    }
    if (count == 1) {
      let [firstN, secondN] = rep.trim().toLowerCase().split("_");
      newTxt = `${firstN}${secondN[0].toUpperCase()}${secondN.slice(1)}`.padEnd(
        20,
        "     "
      );
      newTxt = `${newTxt}${"✅".repeat(i)}`;
      i++;
    } else {
      newTxt = rep;
    }

    newArr.push(newTxt);
  }
  console.log(newArr.join("\n"));
};
document.querySelector("button").addEventListener("click", z);
*/

// Functions :

/*
let bookings = [];

let createBookings = function (flightName, noPass = 1, priceNo = 500) {
  let booking = { flightName, noPass, priceNo };

  console.log(booking);
  bookings.push(booking);
};

let x = "Ajay";
console.log(x.toUpperCase());
createBookings("L123");
createBookings("L123", 2, 1000);
console.log(bookings);
*/

// let x = (wordRecived) => (nameRecived) =>
//   console.log(`${wordRecived} ${nameRecived}, How Are you ?`);

// x("Hello")("Ajay");

/*
let lf = {
  airline: "lofar",
  code: "LF",
  bookings: [],

  book(flightNum, nameNow) {
    console.log(
      `${nameNow} booked a seat on airline : ${this.airline}${this.code} and flight number is :${flightNum}`
    );
    this.bookings.push({
      flight: `${this.airline}${this.code}`,
      nameNow,
      flightNum,
    });
  },
};

lf.book(23, "ajay");

let ef = {
  airline: "Efst",
  code: "EF",
  bookings: [],
};

// book function outside
let booked = lf.book;

// using call function:
booked.call(ef, 22, "ganesh");
console.log(ef.bookings);

booked.apply(ef, [29, "abhi"]);
console.log(ef.bookings);

let bookLf = booked.bind(lf);
bookLf(30, "omk");

let bookEf = booked.bind(ef);
bookEf(31, "noii");

let tempBookLf = booked.bind(lf, 10);
tempBookLf("ramesh");

lf.planes = 100;
lf.buyPlanes = function (e) {
  // console.log(e);
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document.querySelector(".buy").addEventListener("click", lf.buyPlanes.bind(lf));

// Ex :
let tax1 = (rate, value) => value + value * rate;

console.log(tax1(0.1, 100));

let taxIndia = tax1.bind(null, 0.15);
console.log(taxIndia(100));

// function return
let tax2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

let taxAm = tax2(0.3);
console.log(taxAm(100));
*/

// Coding Challenge :

/*
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  console.log(this);
  let ansNow = Number(prompt(`${this.question}\n${this.options.join("\n")}`));
  // console.log(`${ansNow.join("")}`);
  if (isFinite(ansNow)) {
    // console.log(ansNow);
    // console.log(ansNow < 4);
    // console.log(ansNow > -1);
    // console.log(ansNow != "");
    // console.log(typeof ansNow == "number");
    // console.log("ok");

    if (
      ansNow < 4 &&
      ansNow > -1 &&
      ansNow != "" &&
      typeof ansNow == "number"
    ) {
      this.answers[ansNow]++;
      console.log("Entered");
    }

    console.log(poll);
  }

  this.displayResults = function (type = "string") {
    if (type == "int") {
      console.log(this.answers);
    } else {
      // console.log(this.answers);
      console.log(`Poll results are ${this.answers}`);
    }
  };

  this.displayResults("int");
  this.displayResults();

  // let displayResults = (type = "string") => {
  //   if(type == "int")
  //   {
  //     console.log(this.answers);
  //   }
  // };
};
let regNans = poll.registerNewAnswer;

document.querySelector(".poll").addEventListener("click", regNans.bind(poll));
*/

/*

poll.registerNewAnswer = function () {
  // console.log(newName);
  let ansNow = prompt(
    `What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++`
  );
  if (ansNow < 4 && ansNow > -1 && ansNow != "") poll.answers[ansNow]++;
  console.log(ansNow);

  console.log(poll);
  displayResults("string");
  displayResults("int");
};

let regNans = poll.registerNewAnswer;
// regNans("ajay");

console.log(poll);

document.querySelector(".poll").addEventListener("click", regNans.bind(poll));

let displayResults = function (type) {
  if (type == "string") {
    console.log(`Poll results are ${poll.answers}`);
  } else {
    console.log([...poll.answers]);
  }
};

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

*/

/*
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};
*/

// let x = ["a", 1, 2, 3, "d"];
// console.log(x.slice(2, 4));

/*

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (x) {
  x > 0
    ? console.log(`You Deposited ${x}`)
    : console.log(`You withdrawn ${x * -1}`);
});

*/

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

// currencies.set("1", "INDIA");
console.log(currencies);

currencies.forEach(function (value, key, map) {
  console.log(value);
  console.log(key);
  console.log("\n");
  // console.log(map);
});
