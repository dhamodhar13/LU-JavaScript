// Looping Statements
// for loop
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 != 0) {
//     console.log(i);
//   }
// }

// do...while loop
let i = 0;
// do {
//   i++;
//   console.log(i);
// } while (i <= 10);

// while loop
while (i <= 10) {
  console.log(i);
  if (i == 5) break;
  i++;
}

// break statement
// for (let i = 0; i < 5; i++) {
//   console.log(`the value of i is ${i}`);
//   break;
// }
// continue statement
for (let i = 0; i < 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(`the value of i is ${i}`);
}
