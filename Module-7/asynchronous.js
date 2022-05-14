// setTimeout --------------------
// console.log("start");

// setTimeout(function callback() {
//   console.log("callback");
// }, 2000);

// console.log("end");

// setInterval -------------------
// console.log("start");

// setInterval(function callback() {
//   console.log("callback");
// }, 2000);

// console.log("end");

// Callback Functions -------------------
// Example 1 ------------
// function outer() {
//   let num = 10;
//   let double = inner(num);
//   console.log(double);
// }

// function inner(num) {
//   return num * 2;
// }

// outer();

// Example 2 --------------
// function login() {
//   let userLoggedIn = true;
//   let userValidation = validateUser(userLoggedIn);
//   console.log(userValidation);
//   if (userValidation) {
//     console.log("User logged in successfully..");
//   } else {
//     console.log("Please login..");
//   }
// }

// function validateUser(user) {
//   if (user) {
//     return false;
//   } else {
//     return true;
//   }
// }

// login();

// DOM APIs --------------
// let button = document.getElementById("clickMe");
// button.addEventListener("click", function cb() {
//   console.log("Button clicked");
// });

// Promises ---------------
// Example 1 -----------------
// let promise = new Promise((resolve, reject) => {
//   let sum = 10 + 10;
//   if (sum == 20) {
//     resolve("Passed");
//   } else {
//     reject("Failed");
//   }
// });

// promise
//   .then((message) => {
//     console.log("Inside then block " + message);
//   })
//   .catch((message) => {
//     console.log("Inside catch block " + message);
//   });

// Example 2 ---------------
// const promise1 = new Promise((resolve, reject) => {
//   resolve();
// });

// promise1
//   .then(() => {
//     console.log("first");
//   })
//   .then(() => {
//     console.log("second");
//   })
//   .then(() => {
//     console.log("third");
//   })
//   .catch((error) => {
//     console.log("error ", error);
//   });

// Example 3 -------------
// const promise2 = new Promise((resolve, reject) => {
//   resolve();
// });

// promise2
//   .then(() => {
//     console.log("first");
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("second");
//     }, 2000);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("third");
//     }, 1000);
//   })
//   .catch((error) => {
//     console.log("error ", error);
//   });

// Example 4 ---------------
// const promise3 = new Promise((resolve, reject) => {
//   resolve();
// });

// promise3
//   .then(() => {
//     console.log("first");
//   })
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("second");
//         resolve();
//       }, 5000);
//     });
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("third");
//     }, 1000);
//   })
//   .catch((error) => {
//     console.log("error ", error);
//   });

// Example 5 ----------------
// const isUserLoggedIn = false;
// const isBuyProduct = false;

// function checkSales() {
//   return new Promise((resolve, reject) => {
//     if (isUserLoggedIn) {
//       resolve("User logged in successfully");
//     } else {
//       reject("User not logged in");
//     }
//   });
// }

// checkSales()
//   .then((loginSuccessMessage) => {
//     console.log(loginSuccessMessage);
//   })
//   .then(() => {
//     return new Promise((resolve, reject) => {
//       if (isBuyProduct) {
//         resolve("Product sold");
//       } else {
//         reject("Product not sold");
//       }
//     });
//   })
//   .then((buySuccessMessage) => {
//     console.log(buySuccessMessage);
//   })
//   .catch((failuremessage) => {
//     console.log(failuremessage);
//   });

// Async/Await ---------------
// Example 1 --------------
// const multiply = (num1, num2) => new Promise((resolve) => resolve(num1 * num2));
// const sum = (total, num3) => new Promise((resolve) => resolve(total + num3));
// const multiplyThenSumAsync = async (num1, num2, num3) => {
//   const product = await multiply(num1, num2);
//   const sumTotal = await sum(product, num3);
//   return sumTotal;
// };
// const getResult = () =>
//   multiply(10, 20)
//     .then((product) => sum(product, 30))
//     .then((total) => {
//       console.log("total using regular promise", total);
//       return total;
//     });
// const getResultAsync = async () => {
//   const product = await multiply(10, 20);
//   const total = await sum(product, 30);
//   console.log("total using async", total);
// };

// getResult().then((res) =>
//   getResultAsync().then((resAsync) =>
//     console.log("Same result => ", resAsync === res)
//   )
// );

// Example 2 ---------------
// function makeRequest(location) {
//   return new Promise((resolve, reject) => {
//     console.log(`Making request to ${location}`);
//     if (location === "LetsUpgrade") {
//       resolve("LetsUpgrade says Hi");
//     } else {
//       reject("We can only talk to LetsUpgrade");
//     }
//   });
// }

// function processResponse(response) {
//   return new Promise((resolve, reject) => {
//     console.log("Processing response");
//     resolve(`Additional Info: ${response}`);
//   });
// }

// makeRequest("LetsUpgrade")
//   .then((response) => {
//     console.log("Response received");
//     return processResponse(response);
//   })
//   .then((processedResponse) => {
//     console.log(processedResponse);
//   })
//   .catch((error) => console.log(error));

// async function makeRequestAsync() {
//   const response = await makeRequest("LetsUpgrade");
//   console.log("Response received");
//   const processedResponse = await processResponse(response);
//   console.log(processedResponse);
// }
// makeRequestAsync()
//   .then()
//   .catch((err) => console.log(err));

// fetch API ------------------

// url = "https://api.github.com/users";
// async function getUserData() {
//   const gitHubData = await fetch(url);
//   let userData = await gitHubData.json();
//   // console.log(userData);
//   show(userData);
// }

// function show(data) {
//   document.body.append(JSON.stringify(data));
// }
// getUserData();
// let data = getUserData();
// console.log(data);

// function printName() {
//   let name = "LetsUpgrade";
//   cb(name);
//   console.log("after cb");
// }

// function cb(name) {
//   console.log(name);
// }

// printName();
// console.log("After printName");

// function printNamePromise() {
//   let name = "JavaScript";
//   return new Promise((res, rej) => {
//     res(name);
//   });
// }

// printNamePromise()
//   .then((message) => {
//     console.log(message);
//   })
//   .then(() => console.log("after JavaScript"));
// console.log("After Promise");

// fetch API -------------------
const submitBtn = document.getElementById("submitBtn");
const userImage = document.getElementById("userImage");
const actualName = document.getElementById("name");
const userName = document.getElementById("userName");
const userProfileUrl = document.getElementById("userUrl");
const publicRepos = document.getElementById("publicRepos");
const followers = document.getElementById("followers");
const userType = document.getElementById("userType");

submitBtn.addEventListener("click", async function getUserData() {
  const userInput = document.getElementById("userNameInput").value;
  const userData = await fetch(`https://api.github.com/users/${userInput}`);
  let data = await userData.json();
  console.log(data);
  userImage.setAttribute("src", data.avatar_url);
  actualName.innerHTML = data.name;
  userName.innerHTML = data.login;
  userProfileUrl.setAttribute("href", data.html_url);
  userProfileUrl.innerHTML = data.html_url;
  publicRepos.innerHTML = data.public_repos;
  followers.innerHTML = data.followers;
  userType.innerHTML = data.type;
  // console.log(data);
  // localStorage.setItem("username", data.login);
  // console.log(localStorage.getItem("username"));
});
localStorage.clear();

// async function getResult() {
//   let result = await fetch("https://api.github.com/users/facebook/repos");

//   // result.then((res) => res.json()).then((response) => console.log(response));
//   let jsonData = await result.json();
//   console.log(jsonData);
//   let stringData = JSON.stringify(jsonData);

//   localStorage.setItem("data", stringData);
// }
// getResult();

function naviagateToInfo() {
  location.href = `info.html?user=LetsUpgrade&id=100`;
}
