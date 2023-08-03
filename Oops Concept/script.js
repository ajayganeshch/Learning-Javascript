"use strict";

// let Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// let ajay = new Person("Ajay", 2003);
// let ramesh = {
//   firstName: "Ramesh",
//   birthYear: 2000,
// };

// // console.log(ramesh instanceof Person);
// // console.log(ajay);
// /*
// 1. New {} is created
// 2. function is called, this ={}
// 3. {} linked to prototype
// 4. function automatically return {}
//  */

// Person.prototype.calAge = function () {
//   console.log(2023 - this.birthYear);
// };

// Person.prototype.species = "Potato";
// /*
// let calAgeFake = function (ok) {
//   return 2023 - ok.birthYear;
// };

// This will basically create a calAgeFake property in ajay
// ajay.calAgeFake = calAgeFake(ajay);
// console.log(ajay);
// */
// // console.log(ajay.__proto__);
// // console.log(ajay.__proto__.__proto__);
// // ajay.calAge();
// // console.log(ajay);
// // console.dir(Array.prototype.fill);

// // Challenge 1:

// /*
// let car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// car.prototype.accelerate = function () {
//   this.speed = 10 + this.speed;
//   console.log("the speed is at ", this.speed);
// };

// car.prototype.break = function () {
//   this.speed = this.speed - 10;
//   console.log(this.speed);
// };

// let bmw = new car("bmw", 100);
// console.log(bmw);

// bmw.accelerate();
// bmw.break();
// */

// class PersonNew {
//   constructor(first_name, last_name, birthYearRec) {
//     this.first_name = first_name;
//     this.second_name = last_name;
//     this.birthYear = birthYearRec;
//   }

//   calAge() {
//     console.log(2030 - this.birthYear);
//   }
// }

// let ganesh = new PersonNew("Ajay", "Ganesh", 2003);
// // ganesh.calAge();
// // console.log("ok");

// let accounts = {
//   name: "ajay",
//   movements: [10, 20, 20, 30, 3, 4],

//   latest() {
//     return this.movements;
//   },

//   get latest_get() {
//     return this.movements;
//   },
// };

// // console.log(accounts.latest());
// // console.log(accounts.latest_get);

// let personProto = {
//   calAge() {
//     console.log(2030 - this.birthYear);
//   },

//   initialzie(first_name, last_name, year) {
//     this.firstName = first_name;
//     this.last_name = last_name;
//     this.birthYear = year;
//   },
// };

// let suresh = Object.create(personProto);
// // console.log(suresh);
// suresh.name = "suresh";
// suresh.birthYear = 2003;
// // suresh.calAge();

// let sri = Object.create(personProto);
// // sri.initialzie("sri", "sai", 1900);
// // sri.calAge();

// //challenge 2:

// class carcl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed = 10 + this.speed;
//     console.log("the speed is at ", this.speed);
//   }

//   break() {
//     this.speed = this.speed - 10;
//     console.log(this.speed);
//   }

//   get speedUs() {
//     return this.speed / 1.6;
//   }

//   set speedUs(newSpeed) {
//     this.speed = this.speed * 1.6;
//   }
// }

// let audi = new carcl("audi", 100);
// // console.log(audi.speedUs);
// // audi.accelerate();
// // console.log(audi.speedUs);
// // audi.break();
// // console.log(audi.speedUs);

// let Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calAge = function () {
//   console.log(2023 - this.birthYear);
// };

// let student = function (firstName, birthYear, course) {
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;

//   Person.call(this, firstName, birthYear);

//   this.course = course;
// };

// student.prototype = Object.create(Person.prototype);

// student.prototype.introduce = function () {
//   console.log(`Hi this is ${this.firstName} and studying ${this.course}`);
// };
// let ajay = new student("ajay", 2003, "cse");
// console.log(ajay);
// ajay.introduce();
// ajay.calAge();
// console.log(ajay instanceof student);
// student.prototype.constructor = student;

// challange 3

/*
let car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  this.speed = 10 + this.speed;
  console.log("the speed is at ", this.speed);
};

car.prototype.break = function () {
  this.speed = this.speed - 10;
  console.log(this.speed);
};

let ev = function (make, speed, battery) {
  car.call(this, make, speed);
  this.battery = battery;
};

ev.prototype = Object.create(car.prototype);

ev.prototype.chargeBattery = function (chargeTo) {
  this.battery = chargeTo;
};

ev.prototype.accelerate = function () {
  this.speed = 20 + this.speed;
  this.battery = this.battery - 1;
  console.log(
    `${this.make} is going at ${this.speed}, with a charge of ${this.battery}`
  );
};

let tesla = new ev("tesla", 100, 100);
tesla.chargeBattery = 90;
tesla.accelerate();
*/

// class PersonNew {
//   constructor(first_name, birthYearRec) {
//     this.first_name = first_name;
//     this.birthYear = birthYearRec;
//   }

//   calAge() {
//     console.log(2030 - this.birthYear);
//   }
// }

// class student extends PersonNew {
//   constructor(first_name, birthYear, course) {
//     super(first_name, birthYear);
//     this.course = course;
//   }
// }

// let sai = new student("sai", 2003, "cse");
// sai.calAge();

// let personProto = {
//   calAge() {
//     console.log(2030 - this.birthYear);
//   },

//   initialzie(first_name, last_name, year) {
//     this.firstName = first_name;
//     this.last_name = last_name;
//     this.birthYear = year;
//     console.log(
//       `You have entered ${this.firstName}, ${this.last_name}, ${this.birthYear}`
//     );
//   },
// };

// let venkata = Object.create(personProto);

// let student = Object.create(personProto);

// student.initialzie = function (first_Name, last_name, year, course) {
//   personProto.initialzie.call(this, first_Name, last_name, year);
//   this.course = course;
// };

// student.intro = function () {
//   console.log("Hi babu");
// };

// let ch = Object.create(student);
// ch.initialzie("ch", "ajay", 2003, "cse");
// ch.intro();

// class Accounts {
//   #movements = [];
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;

//     this.loc = navigator.language;
//   }

//   deposite(val) {
//     this.#movements.push(val);
//   }

//   withdraw(val) {
//     this.#movements.push(-val);
//   }

//   approved(val) {
//     return true;
//   }
//   loan(val) {
//     if (this.approved(val)) {
//       this.#movements.push(val);
//     }
//   }
// }

// let acc = new Accounts("ajay", 100, 11);
// acc.deposite(100);

// console.log(acc);
// console.log(acc.movements);

//challange 4

let car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  this.speed = 10 + this.speed;
  console.log("the speed is at ", this.speed);
};

car.prototype.break = function () {
  this.speed = this.speed - 10;
  console.log(this.speed);
  return this;
};

class evcl extends car {
  #battery;
  constructor(make, speed, battery) {
    super(make, speed);
    this.#battery = battery;
  }

  chargeBattery(chargeTo) {
    this.#battery = chargeTo;
    return this;
  }

  accelerate() {
    this.speed = 20 + this.speed;
    this.#battery = this.#battery - 1;
    console.log(
      `${this.make} is going at ${this.speed}, with a charge of ${
        this.#battery
      }`
    );
    return this;
  }
}

let swift = new evcl("swift", 100, 10);
console.log(swift);
swift.accelerate();
swift.accelerate();
