let cart = [];

export let addToCart = function (product, quantilty) {
  cart.push({ product, quantilty });
  console.log(`added to cart ${product}`);
};
