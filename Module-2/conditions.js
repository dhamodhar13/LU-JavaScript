// Conditional Statements
// if condition
let loggedIn = true;

if (loggedIn) {
  console.log("User logged in successfully..");
} else {
  console.log("Please log in..");
}

let mark = 45;

// if (mark > 80) {
//   console.log("A grade");
// } else if (mark > 60) {
//   console.log("B grade");
// } else {
//   console.log("Pass");
// }

// if (mark > 40) {
//   if (mark > 60) {
//     console.log("B grade");
//   } else {
//     console.log("Pass");
//   }
// } else {
//   console.log("Mark is less than 40");
// }

// if...else condition

// if...elseif...else condition

// switch
// switch (true) {
//   case mark >= 80:
//     console.log("A Grade");
//     break;
//   case mark >= 60:
//     console.log("B Grade");
//     break;
//   default:
//     console.log("Just Pass");
// }

// Ternary operator
// mark >= 80 ? console.log("A Grade") : console.log("B grade");

// let grade = if (mark >= 80) {
//     return "A Grade";
// } else {
//     return "B Grade";
// }

let grade = mark >= 80 ? "A Grade" : "B Grade";
console.log(grade);
