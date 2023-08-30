import { addToCart } from "./shoppingCart.js";

console.log(addToCart);

// let res = await fetch("https://jsonplaceholder.typicode.com/posts");
// let data = await res.json();
// console.log(data);

// let lastPost = async function () {
//   let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   // console.log(res);
//   let data = await res.json();
//   // console.log(data);
//   return data.at(-1);
// };

/*
let newData = await lastPost();
console.log(newData);
*/

/*
let data = lastPost();

data.then((temp) => console.log(temp));
*/

let cart = [];

let addToCartInjs = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`added to cart ${product}`);
};

console.log(addToCartInjs);

addToCartInjs("pizza", 4);
addToCartInjs("onion", 5);
addToCartInjs("apples", 10);

console.log(cart);
// import

// let { addToCart } = require("./shoppingCart.js");

// work in node only
// export.addToCart= function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(`added to cart ${product}`);
// };

import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

console.log(cloneDeep);

let state = {
  cart: [
    {
      product: "aloo",
      quantity: 10,
    },
    {
      product: "onion",
      quantity: 100,
    },
  ],
  user: {
    logged: true,
  },
};

let stClone = Object.assign({}, state);

console.log(stClone);

// state.user.logged = false;

// console.log(stClone);

let stCloneDeep = cloneDeep(state);

state.user.logged = false;

console.log(stCloneDeep);

class Person {
  #greeting = "Hello Namaste";
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting} 😒 ${this.name}`);
  }
}

const ajay = new Person("ajay");

console.log(cart.find((mov) => mov.quantity >= 4));

import "core-js/stable";
import "regenerator-runtime/runtime.js";
