"use strict";

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class workout {
  date = new Date();
  id = (Date.now() + "").slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; //[Lat,Long]
    this.distance = distance; // km
    this.duration = duration; // min
  }

  _setDesc() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.desc = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}
let if_failed = function () {
  alert("Could Not get position");
};

class Running extends workout {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calPace();
    this._setDesc();
  }

  calPace() {
    //min/Km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends workout {
  type = "cycling";
  constructor(coords, distance, duration, elvationGain) {
    super(coords, distance, duration); //duration in hr
    this.elvationGain = elvationGain;
    this.calSpeed();
    this._setDesc();
  }

  calSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

class App {
  #map;
  #mapEvent;
  #workouts = [];
  #mapZoom = 14;
  constructor() {
    this._getPosition();

    this._getLocalStorage();

    form.addEventListener("submit", this._newWorkOut.bind(this));
    inputType.addEventListener("change", this._toggleElevation);
    containerWorkouts.addEventListener("click", this._moveto.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        if_failed
      );
    }
  }

  _loadMap(position) {
    let { latitude } = position.coords;
    let { longitude } = position.coords;

    let coords = [latitude, longitude];

    this.#map = L.map("map").setView(coords, this.#mapZoom);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on("click", this._showForm.bind(this));

    this.#workouts.forEach((work) => {
      this._marker(work);
    });
  }

  // _setView(coords) {
  //   this.#map = L.map("map").setView(coords, 14);
  // }
  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _hideForm() {
    inputElevation.value =
      inputCadence.value =
      inputDuration.value =
      inputDistance.value =
        "";
    form.style.display = "none";
    form.classList.add("hidden");
    setTimeout(() => (form.style.display = "grid"), 1000);
  }

  _toggleElevation() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }

  _newWorkOut(e) {
    e.preventDefault();

    let validOrNot = (...inputs) => inputs.every((inp) => Number.isFinite(inp));
    let isPositive = (...inputs) => inputs.every((inp) => inp > 0);

    let type = inputType.value;

    let distance = +inputDistance.value;
    let duration = +inputDuration.value;
    let { lat, lng } = this.#mapEvent.latlng;
    let workout;

    if (type == "running") {
      let cadence = +inputCadence.value;
      if (
        !validOrNot(distance, duration, cadence) ||
        !isPositive(distance, duration, cadence)
      )
        return alert("Wrong Input");

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    if (type == "cycling") {
      let elevation = +inputElevation.value;
      if (
        !validOrNot(distance, duration, elevation) ||
        !isPositive(distance, duration)
      )
        return alert("Wrong Input");

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    this.#workouts.push(workout);

    this._marker(workout);
    this._renderWorkout(workout);
    this._hideForm();
    this._setLocalStorage();
  }

  _marker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 200,
          minWidth: 150,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type == "running" ? "🏃‍♂️" : "🚴🏻"} ${workout.desc}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.desc}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type == "running" ? "🏃‍♂️" : "🚴🏻"
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
    </div>`;

    if (workout.type == "running") {
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
      </li>`;
    }

    if (workout.type == "cycling") {
      html += `
    <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed.toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workout.elevationGain}</span>
      <span class="workout__unit">m</span>
      </div>
    </li>`;
    }

    form.insertAdjacentHTML("afterend", html);
  }

  _moveto(e) {
    let workEle = e.target.closest(".workout");

    if (!workEle) return;

    let workout = this.#workouts.find((work) => work.id == workEle.dataset.id);

    this.#map.setView(workout.coords, this.#mapZoom, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }
  _setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#workouts));
  }
  _getLocalStorage() {
    let data = JSON.parse(localStorage.getItem("workouts"));
    console.log(data);

    if (!data) return;

    this.#workouts = data;
    this.#workouts.forEach((work) => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem("workouts");
    location.reload();
  }
}

let app = new App();
