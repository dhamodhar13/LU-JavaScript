// Objects
// Create an object -----------
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 3,
};
// console.log(obj.b);

// obj.d = 10;
// obj.c = 20;
// console.log(obj);

// delete obj.b;
// console.log(obj);

// let obj1 = { name: "java", duration: " 2 months" };
// Object.assign(obj, obj1);
// console.log(obj);

// console.log(Object.values(obj));

// console.log(Object.entries(obj));

// console.log(Object.keys(obj));
// let converted = Object.entries(obj);
// console.log(converted);
// let result = converted.map((item) =>
//   item.find((num) => (num == 2 ? item : null))
// );
// console.log(result);
// // Access items in an object ------------
// // obj.a = "Hello";
// console.log(obj);
// // Add and remove items to and from an object
// // delete obj.a;
// console.log(obj);

// let obj1 = { b: 5, d: 7 };

// let newObj = Object.assign(obj, obj1);
// console.log(obj);

// // To find the key name of a value in an object
let array = Object.entries(obj);

console.log(array.find((entry) => entry.find((item) => item === 3))[0]);

// // Object methods ---------
