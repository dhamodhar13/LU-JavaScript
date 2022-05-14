// Functions
// How to define a function
// Using function keyword
// function square(x = 1) {
//   return x * x;
// }

// let result = square();
// console.log(result);

// funciton scope
// function cube() {
//   let num = 3;
//   function result() {
//     console.log(num * num * num);
//   }
//   result();
// }

// cube();

// Funtion parameters
// default paramenters
// rest paramenters
function sum(num1, ...args) {
  console.log(args);
  console.log(num1);
  return num1 + args[1];
}
console.log(sum(1, 2, 3, 4, 5));

// callback function
// function mul(num1, num2) {
//   return num1 * num2;
// }

// function getResult(num1, num2, callback) {
//   return callback(num1, num2);
// }

// console.log(getResult(2, 5, mul));

// // Using arrow function
// const square1 = (num) => {
//   return num;
// };

// console.log(square1(4));
