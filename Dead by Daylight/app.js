var apples = 0;
var applesPerSecond = 0;
var applesPerClick = 1;

var iPhoneCost = 10;
var iPadCost = 10;
var airPodsCost = 500;
var penCost = 200;

var iPhones = 0;
var iPads = 0;
var airPods = 0;
var pens = 0;

// Set initial variables
var points = 0;
var pointsPerClick = 1;
var pointsPerSecond = 0;
var autoClickCost = 10;
var autoClickInterval;
var isAutoClickOn = false;

var autoClicker;
var autoClickerSpeed = 1000;

function startAutoClicker() {
  autoClicker = setInterval(function () {
    document.getElementById("clickButton").click();
  }, autoClickerSpeed);
}

document.addEventListener("DOMContentLoaded", function () {
  var autoClickButton = document.querySelector(".auto-click-button button");
  if (autoClicker) {
    autoClickButton.innerHTML = "Stop Auto Click";
  }
  autoClickButton.addEventListener("click", function () {
    if (autoClicker) {
      stopAutoClicker();
      this.innerHTML = "Auto Click";
    } else {
      startAutoClicker();
      this.innerHTML = "Stop Auto Click";
    }
  });
});

function stopAutoClicker() {
  clearInterval(autoClicker);
}

// document
//   .querySelector(".auto-click-button button")
//   .addEventListener("click", function () {
//     if (autoClicker) {
//       stopAutoClicker();
//       this.innerHTML = "Auto Click";
//     } else {
//       startAutoClicker();
//       this.innerHTML = "Stop Auto Click";
//     }
//   });

function increment() {
  apples += applesPerClick;
  document.getElementById("showApples").innerText = apples;

  if (apples >= 7800000000) {
    document.getElementById("gameOver").innerText =
      "You won the game! Apple dominates the Earth!";
  }
}

setInterval(function () {
  apples += applesPerSecond;
  document.getElementById("showApples").innerText = apples;
}, 1000);

function buyIPhone() {
  if (apples >= iPhoneCost) {
    apples -= iPhoneCost;
    document.getElementById("showApples").innerText = apples;
    iPhones++;
    document.getElementById("iPhoneNum").innerText = iPhones;
    iPhoneCost *= 2;
    document.getElementById("iPhoneCost").innerText = iPhoneCost;
    applesPerSecond += 1;

    document.getElementById("showApplesPerSecond").innerText = applesPerSecond;
  } else {
    alert("You don't have enough Apples!");
  }
}

function buyIPad() {
  if (apples >= iPadCost) {
    apples -= iPadCost;
    document.getElementById("showApples").innerText = apples;
    iPads++;
    document.getElementById("iPadNum").innerText = iPads;
    iPadCost *= 2;
    document.getElementById("iPadCost").innerText = iPadCost;
    applesPerClick += 1;
    document.getElementById("showApplesPerClick").innerText = applesPerClick;
  } else {
    alert("You don't have enough Apples!");
  }
}

function buyPen() {
  if (apples >= penCost) {
    apples -= penCost;
    document.getElementById("showApples").innerText = apples;
    pens++;
    document.getElementById("penNum").innerText = pens;
    penCost *= 2;
    document.getElementById("penCost").innerText = penCost;
    applesPerSecond += 100;
    document.getElementById("showApplesPerSecond").innerText = applesPerSecond;
  } else {
    alert("You don't have enough Apples!");
  }
}

function buyAirPods() {
  if (apples >= airPodsCost) {
    apples -= airPodsCost;
    document.getElementById("showApples").innerText = apples;
    airPods++;
    document.getElementById("airPodsNum").innerText = airPods;
    airPodsCost *= 2;
    document.getElementById("airPodsCost").innerText = airPodsCost;
    applesPerClick += 100;
    document.getElementById("showApplesPerClick").innerText = applesPerClick;
  } else {
    alert("You don't have enough Apples!");
  }
}
