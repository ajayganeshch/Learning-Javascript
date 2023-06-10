"use strict";

// const { Button } = require("bootstrap");

let aboutAppUI = (ele) =>
  document.querySelector(".app").classList[ele]("app_display");

let keepOpacity = function (ele) {
  document.querySelector(".app").style.opacity = ele;
};

aboutAppUI("add");
keepOpacity(0);

document.querySelector(".app").classList.add("app_display");

let account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2023-06-08T23:36:17.929Z",
    "2023-06-09T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

let account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

let account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

let account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90, 20, 40, 100],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-06-08T23:36:17.929Z",
    "2020-06-09T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

let accounts = [account1, account2, account3, account4];
let eachUserName = [];
let accDet;
let valueOpt;

// account login : Username and password

let getName = function (accounts) {
  let tempAr = [];
  let i = 0;

  for (let ac of accounts) {
    tempAr = [];
    let j = 0;
    tempAr.push(ac.owner[0].toLowerCase());
    for (i = 0; i < ac.owner.length; i++) {
      if (ac.owner[i] == " ") {
        tempAr.push(ac.owner[i + 1].toLowerCase());
      }
    }
    ac.userName = tempAr.join("");
    eachUserName.push([tempAr.join(""), ac.pin]);
  }

  return eachUserName;
};
// console.log(account1);
// console.log(account2);
// console.log(account3);
// console.log(account4);

let pinNames = getName(accounts);

// console.log(pinNames);

/* No need Code
// let finalArrNP = [];
// let checkForPinName = function (accounts) {
//   for (let [i, ac] of accounts.entries()) {
//     console.log(i);

//     // console.log(acOwner.slice(acOwner.indexOf(" "), acOwner.indexOf(" ") + 1));
//     let obj = [ac.owner[0] + ac.owner[1], ac.pin];
//     finalArrNP.push(obj);
//     // console.log(ac.pin);
//   }
//   return finalArrNP;
// };

// console.log(checkForPinName(accounts));
*/

let labelWelcome = document.querySelector(".welcome");
let labelDate = document.querySelector(".date");
let labelBalance = document.querySelector(".balance__value");
let labelSumIn = document.querySelector(".summary__value--in");
let labelSumOut = document.querySelector(".summary__value--out");
let labelSumInterest = document.querySelector(".summary__value--interest");
let labelTimer = document.querySelector(".timer");

let containerApp = document.querySelector(".app");
let containerMovements = document.querySelector(".movements");

let btnLogin = document.querySelector(".login__btn");
let btnTransfer = document.querySelector(".form__btn--transfer");
let btnLoan = document.querySelector(".form__btn--loan");
let btnClose = document.querySelector(".form__btn--close");
let btnSort = document.querySelector(".btn--sort");

let user = document.querySelector(".login__input--user");
let pin = document.querySelector(".login__input--pin");
let inputTransferTo = document.querySelector(".form__input--to");
let inputTransferAmount = document.querySelector(".form__input--amount");
let inputLoanAmount = document.querySelector(".form__input--loan-amount");
let inputCloseUsername = document.querySelector(".form__input--user");
let inputClosePin = document.querySelector(".form__input--pin");

let buttonClicked = document.querySelector(".btn_login");

let getLocal;

let valueFunOpt = function () {
  valueOpt = {
    style: "currency",
    currency: accDet.currency,
  };

  return valueOpt;
};

let currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log("Entered");

let sortedOrNot = false;

let timeRunning;

// keepOpacity(100);

let optionsNow = {
  hour: "numeric",
  // second: "numeric",
  date: "numeric",
  minute: "numeric",
  day: "numeric",
  year: "numeric",
  month: "numeric",
  // weekday: "short",
};

// let pin = document.querySelector(".login__input--pin");

let clearVal = function (element) {
  // console.log(element);
  element.value = "";
};

// clearVal(pin);

// TimeOuts :
let timeFun = function () {
  let time = 120;
  // Time Function:
  let timeoutRun = function () {
    let min = String(Math.trunc(time / 60));
    let sec = String(time % 60);
    // console.log(time);

    labelTimer.textContent = `${min.padStart(2, 0)}:${sec.padStart(2, 0)}`;

    if (time <= 0) {
      // console.log("Stopped");
      clearInterval(timeRunning);
      aboutAppUI("add");
      keepOpacity(0);
    }

    time--;
    // return time;
  };

  timeoutRun();

  let timeRunning = setInterval(timeoutRun, 1000);
  return timeRunning;
};

let getForNow = function (nowInfo, labelApplied, extraAdd) {
  let x = `${nowInfo[labelApplied]() + extraAdd}`.padStart(2, 0);
  // console.log(x);
  // console.log("Value of x is : ", x);
  return x;
};

let addTypes = function (nowAcc, type, value) {
  nowAcc.moneyType.push([type, value]);
  // console.log("Entered Hree push");
};

accounts.forEach((mov) => {
  mov.moneyType = [];
  mov.movements.forEach((movt) => {
    {
      // console.log("Entered Here In : ", mov);
      addTypes(mov, movt > 0 ? "deposit" : "withdrawal", movt);
    }
  });
});

// console.log("Updated : ", accounts);

// Dates :

let calDates = function (dateNow, datePres) {
  // console.log(dateNow);
  // console.log(datePres);
  // return Math.round(Math.trunc((dateNow - datePres) / (1000 * 60 * 60 * 24)));
  return Math.round(Math.abs((dateNow - datePres) / (1000 * 60 * 60 * 24)));
};

let dateFun = function (dateFor) {
  let nowInfo = new Date(dateFor);
  // console.log(nowInfo);
  // console.log("Exp:", getForNow(nowInfo, "getDate", 0));
  // let nowInfoDate = getForNow(nowInfo, "getDate", 0);
  // let nowInfoMonth = getForNow(nowInfo, "getMonth", 1);
  // // console.log(nowInfoMonth);
  // let nowInfoHours = getForNow(nowInfo, "getHours", 0);
  // let nowInfoMinutes = getForNow(nowInfo, "getMinutes", 0);
  // let nowInfoSeconds = getForNow(nowInfo, "getSeconds", 0);

  // console.log(calDates(new Date(), nowInfo));

  if (calDates(new Date(), nowInfo) === 0) return "Today";
  if (calDates(new Date(), nowInfo) === 1) return "Yesterday";
  if (calDates(new Date(), nowInfo) <= 7) return `${calDates} Days Ago`;
  else {
    // console.log();
    return new Intl.DateTimeFormat(accDet.locale).format(nowInfo);
  }
};

let eachTrans = function (withDep, value, i) {
  // Except withdrawl , deposit and loan it will not work for other

  let recVal = dateFun(
    accDet.movementsDates[i] ? accDet.movementsDates[i] : "Error"
  );

  let valueDisp = new Intl.NumberFormat(accDet.locale, valueFunOpt()).format(
    value
  );
  // console.log(recVal);
  if (withDep === "withdrawal" || withDep === "deposit" || withDep === "loan") {
    // console.log(withDep);
    // console.log("Hi");\
    // console.log("Hoiiii");
    let htmlInsert = `<div class="movements__row">
    <div class="movements__type movements__type--${withDep}">${
      i + 1
    } ${withDep}</div>
    <div class="movements__date">${recVal}</div>
    <div class="movements__value">${valueDisp}</div>
  </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", htmlInsert);

    // accNow.typeWDL.push(withDep);
  }
};

let displayTrans = function (transAcc, haveToSort) {
  let trans = [...transAcc.moneyType];
  let transCopy = transAcc.moneyType.slice();
  // console.log("Copy without Sort", transCopy);
  transCopy.sort((a, b) => a[1] - b[1]);

  if (haveToSort && haveToSort != undefined) {
    trans = transCopy;
    // console.log(transCopy);
  }

  // trans = haveToSort ? (trans = transCopy) : trans;

  containerMovements.innerHTML = "";
  // console.log("Entered");
  aboutAppUI("remove");
  keepOpacity(100);

  trans.forEach(function (value, i) {
    // console.log(value);
    // let withDep;
    // // let withLoan;
    // if (value < 0) {
    //   value = value * -1;
    //   withDep = "withdrawal";
    // } else if (value > 0) {
    //   withDep = "deposit";
    // }

    // if ((flagLoan = 1)) {
    //   withDep = "load";
    // }

    eachTrans(value[0], value[1], i);

    // console.log();
    //<div class="movements__date">3 days ago</div>

    //   if (withDep == "withdrawal" || withDep == "deposit" || withDep == "Load") {
    //     // console.log(withDep);
    //     // console.log("Hi");
    //     let htmlInsert = `<div class="movements__row">
    //   <div class="movements__type movements__type--${withDep}">${
    //       i + 1
    //     } ${withDep}</div>

    //   <div class="movements__value">${value}€</div>
    // </div>`;

    //     containerMovements.insertAdjacentHTML("afterbegin", htmlInsert);
    //   }
  });
};

let balanceDisplay = function (accRec) {
  // console.log(accRec);
  accRec.balance = accRec.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${new Intl.NumberFormat(
    accDet.locale,
    valueFunOpt()
  ).format(accRec.balance)}`;
  // console.log(accRec);

  // let i;
  // // console.log(accounts1.movements[i]);
  // let valuBalance;
  // // console.log(user);
  // let useVal = user.value;
  // let pinVal = pin.value;
  // console.log(useVal, pinVal);
  // for (i = 0; i < pinNames.length; i++) {
  //   if (useVal == pinNames[i][0] && pinVal == pinNames[i][1]) {
  //     console.log("Entered here");
  //     valuBalance = accounts[i].movements.reduce(function (acc, mov) {
  //       return acc + mov;
  //     }, 0);
  //     // console.log(valuBalance);
  //   }
  // }
  // console.log(valuBalance);
  // document.querySelector(".balance__value").textContent = `${valuBalance} €`;
  // // console.log(valuBalance);
  // // console.log(account1.movements);
};

let calSum = function (op, movements) {
  return movements
    .filter((mov) => (op === "p" ? mov > 0 : mov < 0))
    .reduce((acc, mov) => acc + mov, 0);
  // if (op == "p") {
  //   //   return movements
  //   //     .filter((mov) => mov > 0)
  //   //     .reduce((acc, map) => acc + map, 0);
  //   // } else {
  //   //   return (
  //   //     movements.filter((mov) => mov < 0).reduce((acc, map) => acc + map, 0) * -1
  //   //   );
  //   // }
};

let intCalNow = function (acc, intr, limit, forWhat) {
  // console.log(acc[forWhat]);

  if (acc[forWhat]) {
    return acc[forWhat]
      .filter((mov) => mov > 0)
      .map((mov) => mov * (intr / 100))
      .filter((mov) => (limit == 0 ? mov : mov >= limit))
      .reduce((acc, mov) => acc + mov, 0);
  } else {
    return 0;
  }
};

let calInt = function (acc, intr, limit) {
  let forAllDep;

  // forAllDep = acc.movements
  //   .filter((mov) => mov > 0)
  //   .map((mov) => mov * (intr / 100))
  //   .filter((mov) => (limit == 0 ? mov : mov >= limit))
  //   .reduce((acc, mov) => acc + mov, 0);

  forAllDep = intCalNow(acc, intr, limit, "movements");
  // console.log("Normal Intrest", forAllDep);

  let forLoanInt = intCalNow(acc, intr, limit, "loans");
  // console.log("Loan Intrest is : ", forLoanInt);
  let finalInt = forAllDep - forLoanInt;
  // let
  // return acc.movements
  //   .filter((mov) => mov > 0)
  //   .map((mov) => mov * (intr / 100))
  //   .filter((mov) => (limit == 0 ? mov : mov >= limit))
  //   .reduce((acc, mov) => acc + mov, 0);

  return new Intl.NumberFormat(accDet.locale, valueFunOpt()).format(finalInt);
  // return 1;
};

// calInt([1, 2]);

let displaySummary = function (intr, acc) {
  let displayIn = new Intl.NumberFormat(accDet.locale, valueFunOpt()).format(
    calSum("p", acc.movements)
  );
  let displayOut = new Intl.NumberFormat(accDet.locale, valueFunOpt()).format(
    Math.abs(calSum("n", acc.movements))
  );
  labelSumInterest.textContent = `${calInt(acc, intr, 0)}`;
  labelSumIn.textContent = `${displayIn}`;
  labelSumOut.textContent = `${displayOut}`;

  // console.log(displayIn, displayOut);
  // let;
};

// console.log(movements);
// displaySummary(movements);
// main App

// let globalUsername = user.value;

let updateNow = function (acc) {
  balanceDisplay(acc);

  // Display Transactions
  displayTrans(acc, sortedOrNot);

  // Dsiplay Bottom Part
  displaySummary(acc.interestRate, acc);

  // console.log(accounts);
};

let returnObj = function (userRec) {
  return accounts.find((acc) => acc.userName === userRec);
};

let transfers = function (e) {
  e.preventDefault();

  if (timeRunning) clearInterval(timeRunning);
  timeRunning = timeFun();
  // let objNow = this;
  // console.log(objNow);
  // console.log("Name is : ");
  // console.log(globalUsername);
  // let nowUser = returnObj(globalUsername);
  // console.log(nowUser);

  let tranName = inputTransferTo.value;
  let tranDet = returnObj(tranName);
  console.log(tranDet);
  let tranAmout = Number(inputTransferAmount.value);
  console.log("Entered In Transfers");

  inputTransferAmount.value = inputTransferTo.value = "";
  if (
    tranAmout > 0 &&
    tranDet &&
    accDet.balance >= tranAmout &&
    accDet.userName != tranDet.userName
  ) {
    accDet.movements.push(tranAmout * -1);
    let transDate = new Date();
    accDet.movementsDates.push(transDate);
    tranDet.movementsDates.push(transDate);
    tranDet.movements.push(tranAmout);

    accDet.moneyType.push(["withdrawal", tranAmout * -1]);
    tranDet.moneyType.push(["deposit", tranAmout]);

    // eachTrans("withdraw", , i)
    // updateNow(tr)

    updateNow(accDet);
    // balanceDisplay(accDet);
    // console.log(tranDet);
  }
  console.log(accDet);

  console.log(tranDet);
  // if(tranDet) 2270
};
// let movx;

let reqForLoan = function (e) {
  e.preventDefault();

  if (timeRunning) clearInterval(timeRunning);
  timeRunning = timeFun();

  setTimeout(reqForLoanTimer, 5000);
};

let reqForLoanTimer = function () {
  // e.preventDefault();
  let movx;
  let tfNow;
  let amoutNeed = Math.floor(inputLoanAmount.value);
  // console.log(amoutNeed);
  // let perDepMax = accDet.movements.map((mov) => (mov * 10) / 100);
  // console.log(perDepMax);
  let checkTf = accDet.movements.some((mov) => {
    tfNow = mov > (amoutNeed * 10) / 100;

    if (tfNow == true) {
      movx = mov;
    }

    return tfNow;
  });

  let indSel = accDet.movements.indexOf(movx);
  // console.log("Movx value is : ", movx);
  // let valDPW = accDet.moneyType[indSel] != "loan";

  // console.log("TF value is : ", valDPW);
  // let checkLr = accDet.typeWDL.some(mov=>mov)

  if (checkTf && amoutNeed >= 0) {
    accDet.loans.push(amoutNeed);
    // eachTrans("loan", amoutNeed, accDet.movements.length + 1, accDet);
    accDet.movements.push(amoutNeed);
    accDet.movementsDates.push(new Date());
    accDet.moneyType.push(["loan", amoutNeed]);
    // accDet.moneyType[indSel][0] = "loan";
    updateNow(accDet);
  }
  clearVal(inputLoanAmount);
};

let closeAcc = function (e) {
  e.preventDefault();
  let closeUsername = inputCloseUsername.value;
  let closePin = Number(inputClosePin.value);

  if (
    closeUsername &&
    closePin &&
    closeUsername === accDet.userName &&
    closePin == accDet.pin
  ) {
    let delInd = accounts.findIndex((mov) => (mov.userName = closeUsername));
    accounts.splice(delInd, 1);
    keepOpacity(0);
    aboutAppUI("add");
    // document.querySelector(".app").style.opacity = 0;
    // document.querySelector(".app").classList.add("app_display");
  }
  clearVal(inputCloseUsername);
  clearVal(inputClosePin);

  console.log(accounts);
};

let sortNow = function (e) {
  e.preventDefault();

  if (timeRunning) clearInterval(timeRunning);
  timeRunning = timeFun();

  // if (sortedOrNot == false) {
  //   sortedOrNot = true;
  sortedOrNot = !sortedOrNot;
  displayTrans(accDet, sortedOrNot);
  // }
};

let appfun = function (e) {
  e.preventDefault();
  let i = 0;

  // console.log(e);
  // console.log("1Entered");
  let userName = user.value;
  let userPin = pin.value;

  if (userName && userPin) {
    // console.log();
    // document.querySelector(".app").style.opacity = 100;
    // console.log(userName);
    // console.log(userPin);
    // console.log("Entered here");
    for (i = 0; i < pinNames.length; i++) {
      if (userName == pinNames[i][0] && userPin == pinNames[i][1]) {
        // console.log("Entered");

        aboutAppUI("remove");
        keepOpacity(100);
        // time = 100;

        if (timeRunning) clearInterval(timeRunning);

        timeRunning = timeFun();
        // document.querySelector(".app").style.opacity = 100;

        //Main Account Value Store
        accDet = accounts.find((acc) => acc.userName === userName);
        labelWelcome.textContent = `Welcome Back, ${
          accDet.owner.split(" ")[0]
        }`;

        getLocal = accDet.locale;
        labelDate.textContent = new Intl.DateTimeFormat(
          getLocal,
          optionsNow
        ).format(new Date());

        // console.log(labelDate.textContent);

        accDet.loans = [];
        // accDet.moneyType = [];

        // accDet.movements.forEach((mov) =>
        //   addTypes(accDet, mov > 0 ? "deposit" : "withdrawal", mov)
        // );

        // labelDate.textContent = dateFun(new Date());
        // accDet.typeWDL = [];

        clearVal(pin);
        clearVal(user);
        // pin.value = user.value = "";
        pin.blur();
        user.blur();
        // console.log(accounts[i].movements);

        // Display Balance
        // balanceDisplay(accDet);

        // Display Transactions
        // displayTrans(accounts[i].movements);

        // Dsiplay Bottom Part
        // displaySummary(accounts[i].interestRate, accounts[i].movements);

        updateNow(accDet);
        aboutAppUI("remove");
        keepOpacity(100);
        // document.querySelector(".app").classList.remove("app_display");
      }
    }
  }
  // } else {
  //   document.querySelector(".app").classList.add("app_display");
  // }
};

// buttonClicked.addEventListener("click", balanceDisplay);
// balanceDisplay(accounts);

buttonClicked.addEventListener("click", appfun);
// login button

// console.log(accounts);

// Transfers
btnTransfer.addEventListener("click", transfers);
// console.log(movements);

// close acc
btnClose.addEventListener("click", closeAcc);

//lone Request
btnLoan.addEventListener("click", reqForLoan);

// Sort Now
btnSort.addEventListener("click", sortNow);

// Used To See Fake UI:
// aboutAppUI("remove");

// console.log(accounts);
// year month date
// let xyz = new Date(20, 10, 2022);
// console.log(xyz);

// console.log(navigator.language);
