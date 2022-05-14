// Click event
const buttons = Array.from(
  document.querySelector(".changeColor__buttons").children
);

const area = document.querySelector(".changeColor__area");

buttons.map((button) => {
  button.addEventListener("dblclick", function (event) {
    let color = event.target.innerText.toLowerCase();
    if (color == "reset") area.style.backgroundColor = "white";
    area.style.backgroundColor = color;
  });
});

// Key down event
const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keydown", logKey);

function logKey(e) {
  log.textContent += ` ${e.key}`;
}

// HTML Form
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const phone = document.getElementById("phone");
// console.log(username);

// const usernameOutput = document.getElementById("username__output");
// const emailOutput = document.getElementById("email__output");
// const phoneOutput = document.getElementById("phone__output");

// username.addEventListener("change", (e) => {
//   console.log("event fired");
//   usernameOutput.innerHTMl = e.target.value;
// });

function formInputChange(event) {
  console.log(event.target.value);
}

// function formSubmit(event) {
//   console.log(event.target.value);
// }

let test = document.getElementById("test");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener(
  "mouseenter",
  function (event) {
    // highlight the mouseenter target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  },
  false
);

// This handler will be executed every time the cursor
// is moved over a different list item
test.addEventListener(
  "mouseover",
  function (event) {
    // highlight the mouseover target
    event.target.style.color = "orange";

    // reset the color after a short delay
    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  },
  false
);

// Resize event
const width = document.getElementById("screenWidth");
console.log(width);
window.addEventListener("resize", () => {
  width.innerText = screen.width;
});
console.log(window.screen.width);
