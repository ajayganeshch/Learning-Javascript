"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

let renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  // countriesContainer.style.opacity = 1;
};

let renderCountry = function (data, className = "") {
  let currencies_name = Object.keys(data.currencies);
  let languages_in = Object.values(data.languages);

  let html = `
<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} M</p>
    <p class="country__row"><span>🗣️</span>${languages_in[0]}</p>
    <p class="country__row"><span>💰</span>${currencies_name[0]}</p>
  </div>
</article>
`;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  // console.log(html);
  countriesContainer.style.opacity = 1;
};

/*
let getCountry = function (country) {
  let request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    let [data] = JSON.parse(this.responseText);
    console.log(data);
    let currencies_name = Object.keys(data.currencies);
    let languages_in = Object.values(data.languages);

    let html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} M</p>
      <p class="country__row"><span>🗣️</span>${languages_in[0]}</p>
      <p class="country__row"><span>💰</span>${currencies_name[0]}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
    countriesContainer.style.opacity = 1;
  });
};

getCountry("india");
*/

/*
let getCountryAndNeigh = function (country) {
  let request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    let [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);

    let [neighbour] = data.borders;

    if (!neighbour) return;

    let request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener("load", function () {
      let [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, "neighbour");
    });
  });
};

// getCountryAndNeigh("india");
getCountryAndNeigh("usa");
*/

/*
let getCountry = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }

      return response.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      let neighbour = data[0].borders[0];

      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      renderError(`Something wrong ${err.message}`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};
*/

/*
let getJson = function (url, errorMessage = "Something Went Wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Country not found (${errorMessage})`);
    }

    return response.json();
  });
};
*/

/*
let getCountry = function (country) {
  getJson(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then(([data]) => {
      renderCountry(data);
      console.log(data);

      if (!data.borders) {
        throw new Error("No Neighbour Found");
      }

      let neighbour = data.borders[0];
      return getJson(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then(([data]) => renderCountry(data, "neighbour"))
    .catch((err) => {
      if (err.message != "No Neighbour Found") {
        renderError(`Something wrong ${err.message}`);
      }
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener("click", function () {
  getCountry("india");

  btn.style.display = "none";
});
*/

// let lat, lng;

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function (pos) {
//     let { latitude } = pos.coords;
//     let { longitude } = pos.coords;
//     lat = latitude;
//     lng = longitude;
//   });
// }

// let whereAmI = function (lat, lng) {
//   console.log(lat, lng);
//   fetch(
//     `https://geocode.xyz/${lat},${lng}?geoit=json&auth=355246541142495214469x23571`
//   )
//     .then((response) => {
//       if (!response.ok) throw new Error(`GeoCode error ${response.status}`);
//       return response.json();
//     })
//     .then((data) => console.log(data.city));
// };

// whereAmI(52.508, 13.381);

/*
let lottery = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve("Won");
  } else {
    reject("lost");
  }
});

lottery.then((resp) => console.log(resp));
*/

// img loading :

/*
let wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let imgContainer = document.querySelector(".images");

let createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Wrong path"));
    });
  });
};

let currentImg;

createImage("img/img-1.jpg")
  .then((img) => {
    console.log("img loaded");
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    return wait(2);
  })
  .then(() => (currentImg.style.display = "none"));
*/

// return from async

/*
let whereAmI = async function (country) {
  try {
    let res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    let data = await res.json();

    // console.log("okkkk");
    renderCountry(data[0]);

    return `Recived from async: You are in ${data[0].name.common}`;
  } catch (err) {}
};

whereAmI("india");
// console.log("ok");

(async function () {
  try {
    let city = await whereAmI("india");
    console.log(city);
    console.log("last");
  } catch (err) {
    console.log(err.message);
  }
})();
*/

/*
let getJson = function (url, errorMessage = "Something Went Wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Country not found (${errorMessage})`);
    }

    return response.json();
  });
};

let getCountriesCapitals = async function (c1, c2, c3) {
  // let [data1, data2, data3] = await Promise.all([
  //   getJson(`https://restcountries.com/v3.1/name/${c1}`),
  //   getJson(`https://restcountries.com/v3.1/name/${c2}`),
  //   getJson(`https://restcountries.com/v3.1/name/${c3}`),
  // ]);
  // console.log(...data1[0].capital);
  // console.log(...data2[0].capital);
  // console.log(...data3[0].capital);

  let data = await Promise.all([
    getJson(`https://restcountries.com/v3.1/name/${c1}`),
    getJson(`https://restcountries.com/v3.1/name/${c2}`),
    getJson(`https://restcountries.com/v3.1/name/${c3}`),
  ]);

  data.forEach((mov) => console.log(...mov[0].capital));
};

getCountriesCapitals("india", "usa", "canada");
*/

/*
let getJson = function (url, errorMessage = "Something Went Wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Country not found (${errorMessage})`);
    }

    return response.json();
  });
};


(async function (c1, c2, c3) {
  let data = await Promise.race([
    getJson(`https://restcountries.com/v3.1/name/${c1}`),
    getJson(`https://restcountries.com/v3.1/name/${c2}`),
    getJson(`https://restcountries.com/v3.1/name/${c3}`),
  ]);
  console.log(data[0].name.common);
})("india", "usa", "canada");
*/

/*
let getJson = function (url, errorMessage = "Something Went Wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Country not found (${errorMessage})`);
    }

    return response.json();
  });
};

let timeout = async function (sec) {
  let data = await new Promise(function (_, reject) {
    setTimeout(() => reject(new Error("Time out")), sec * 1000);
  });
  return data;
};

Promise.race([
  getJson(`https://restcountries.com/v3.1/name/india`),
  timeout(0.1),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err.message));
*/

/*
Promise.allSettled([
  Promise.resolve("Succes"),
  Promise.reject("Error"),
  Promise.resolve("ok"),
])
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));
*/

// similar to race but rejected promises are ignored

/*
let getJson = function (url, errorMessage = "Something Went Wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Country not found (${errorMessage})`);
    }

    return response.json();
  });
};

let timeout = async function (sec) {
  let data = await new Promise(function (_, reject) {
    setTimeout(() => reject(new Error("Time out")), sec * 1000);
  });
  return data;
};

// always returns getJson ans

Promise.any([
  timeout(0.0000015),
  getJson(`https://restcountries.com/v3.1/name/india`),
  // Promise.resolve("Succes"),
  Promise.reject("Error"),
  // Promise.resolve("ok"),
])
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));
*/

/*
createImage("img/img-1.jpg")
  .then((img) => {
    console.log("img loaded");
    currentImg = img;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    return wait(2);
  })
  .then(() => (currentImg.style.display = "none"));
*/

/*
let imgContainer = document.querySelector(".images");

let wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    let img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Wrong path"));
    });
  });
};

let imgLoad = async function (path, i) {
  let img = await createImage(path);
  console.log("Image loaded", i);
  await wait(2);
  img.style.display = "none";
};

let loadNPause = async function () {
  try {
    await imgLoad("img/img-1.jpg", 1);
    await imgLoad("img/img-2.jpg", 2);
  } catch (err) {
    console.log(err.message);
  }
};

// loadNPause();

let loadAll = async function (imgArr) {
  let imgs = imgArr.map(async function (mov) {
    let data = await createImage(mov);
    return data;
  });

  let imgsProm = await Promise.all(imgs);
  console.log(imgsProm);
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
*/
