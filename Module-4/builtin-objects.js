// String
// How to create string
let str = "Lets Upgrade";
let str1 = new String("Hello");

console.log(str);
console.log(str1);
// String.charAt
console.log(str.charAt(3));
console.log(str.charCodeAt(3));

// String.charCodeAt

// String.concat
console.log(str1.concat(" ", str));

// String.endsWith
let message = "Hello how are you";
console.log(message.endsWith("yo"));

// String.startsWith
console.log(message.startsWith("H"));
// Number
let num1 = 67;
console.log(typeof num1.toString());
console.log(typeof num1);

let num2 = 12.343252252;
console.log(num2.toFixed(0));

// Boolean
console.log(Boolean.prototype);
let num3 = 1;
let num4 = 0;
console.log(Boolean(num3));
console.log(Boolean(num4));

let str3 = "";
let str4 = "abc";
console.log(Boolean(str3));
console.log(Boolean(str4));

let arr = [];
let arr1 = [1, 2, 3];
console.log(Boolean(arr));
console.log(Boolean(arr1));

console.log(typeof true.toString());

console.log(arr.valueOf());

// Math
let radius = 4;
console.log((2 * Math.PI * radius).toFixed(2));
console.log((2 * 3.14 * radius).toFixed(2));

// Date
let date = new Date();
console.log(date.getDay());
// console.log(new Date());
const dateArr = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(dateArr[date.getDay()]);
console.log(date.getDay().toLocaleString());

// click
// doubleclick
// hover
// keypress
// keydown
// keyup
// change

const btn = document.querySelector("#changeColor");
btn.addEventListener("mouseenter", () => (btn.style.color = "red"));

// function changeFontColor(id) {
//   const element = document.querySelector(`#${id}`);
//   element.style.color = "blue";
// }
