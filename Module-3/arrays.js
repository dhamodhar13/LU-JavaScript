// // Arrays
// // Create an array ------------
// let arr1 = new Array(1, 2, 3, 4);
// console.log(arr1);

// let arr2 = Array("javascript", "react", "typescript");
// console.log(arr2);

// let arr5 = Array(5);
// let strArr = Array.from("hello");
// console.log(strArr);
// console.log(strArr.join(""));
// console.log(arr5.length);

let arr1 = [1, 2, 6, 8];
// arr1.push(10);
// console.log(arr1);
// arr1.unshift(11);
// console.log(arr1);
// arr1.pop();
// console.log(arr1);
// arr1.shift();
// console.log(arr1);

// console.log(arr1.splice(1, 2));
// console.log(arr1);
// let arr3 = [12, 56, 78, "lets upgrade"];
// console.log(arr3);

// console.log(arr1[2]);
// arr1[2] = 66;
// console.log(arr1);

// map ----------
function double(num) {
  return num * 2;
}
// console.log(arr1.map(double));

// filter ----
// console.log(arr1.filter((num) => num % 2 != 0));

// reduce  ------
var result = 0;
let arr = [1, 2, 3, 4, 5];
arr.map((num) => {
  result += num;
});
console.log(result);
console.log(arr1.reduce((acc, num) => acc + num, 0));

// let arr2 = ["javascript", 445, "react"];
// let arr3 = ["javascript", 445, "react"];
// console.log(arr1.concat(arr2, arr3));
// console.log(arr1);
// let arr2 = [...arr1];
// arr1[2] = 34;
// console.log(arr2);
// console.log(arr1);

// // Access elements in an array ----------
// // Access an item by its index
// console.log(arr2[2]);

// // Access an item's index by its value
// console.log(arr1.indexOf(2));

// // Access group of items from an array
// console.log(arr1.slice(0, 2)); // slice method will not change the original array
// // console.log(arr1);

// console.log(arr1.splice(0, 2, 10, 20, 44, 55)); // splice method will change the original array
// console.log(arr1);

// arr1[1] = "hello";
// console.log(arr1);

// let arr1Copy = [...arr1];
// arr1[1] = "javascript";
// console.log(arr1);
// console.log(arr1Copy);
// name1 = "hello";
// let obj = {
//   name1: "javascript",
//   printName: () => this.name1,
// };

// console.log("name2" in obj);
// Add and remove items to and from an array --------------

// Array Methods -------------
// map
// let newArray = [20, 12, 67, 89];
// console.log(newArray.map((item) => item + 5));
// // filter
// console.log(newArray.filter((item) => item > 50));
// console.log(newArray.find((item) => item > 50));

// // reduce
// console.log(newArray.reduce((acc, currentItem) => acc + currentItem, 0));

// Assignment
// Question 1: To find average rating for each restaurant
// Question 2: Write a function to filter the restaurants based on city
let restaurants = [
  {
    name: "KFC",
    city: "Chennai",
    cuisines: ["North Indian", "Chinese"],
    rating: 4,
  },
  {
    name: "Burger King",
    city: "Bangalore",
    cuisines: ["Fast Food", "Street Food"],
    rating: 3,
  },
  {
    name: "KFC",
    city: "Hyderabad",
    cuisines: ["North Indian", "Chinese"],
    rating: 5,
  },
  {
    name: "Burger King",
    city: "Pune",
    cuisines: ["Fast Food", "Street Food"],
    rating: 4,
  },
  {
    name: "Pizza Hut",
    city: "Mumbai",
    cuisines: ["Fast Food", "Chinese"],
    rating: 4.5,
  },
  {
    name: "Subway",
    city: "Chennai",
    cuisines: ["North Indian", "South Indian"],
    rating: 5,
  },
];

// Solution 1: ----
// Step 1: To find unique restaurants from the given restaurant data
const allRestaurants = restaurants.map((obj) => obj.name);

// Method 1: Getting unique items from an array using filter method
const uniqueRestaurants = allRestaurants.filter(
  (item, index, arr) => arr.indexOf(item) === index
);

// Method 2: Getting unique items from an array using Set constructor
const uniqueRestaurants1 = [...new Set(allRestaurants)];

// Calculating average rating for each restaurant
const averageRatings = uniqueRestaurants.map((restaurantName) => {
  const filteredData = restaurants.filter((obj) => obj.name === restaurantName);
  return {
    name: restaurantName,
    averageRating:
      filteredData.reduce((total, current) => total + current.rating, 0) /
      filteredData.length,
  };
});

console.log(averageRatings);

// Solution 2: ----
// Filter restaurants by city
const restaurantsByCity = (cityName) => {
  return restaurants.filter((obj) => obj.city === cityName);
};

let restaurantsInCity = restaurantsByCity("Chennai");
console.log(restaurantsInCity);
