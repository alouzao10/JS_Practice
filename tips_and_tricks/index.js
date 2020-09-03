// JS Tips and Tricks

// 1) Turnary Operator
// Another way to write out if statements
// Simplify logic statements

var something = false;
// Normal
if (something == true) {
  console.log('True');
} else {
  console.log('False');
}

// Turnary
something == true ? console.log('True') : console.log('False');
// Nested Turnary
var num = 2;
num > 20
  ? num < 50
    ? console.log('Between 20 and 50')
    : console.log('Greater than 50')
  : console.log('Smaller than 20');

// 2) Convert a number to a string
const ageNum = 20; // Number
console.log(ageNum + ' ' + typeof ageNum);
const ageString = 20 + ''; // String by concatinating an empty string
console.log(ageString + ' ' + typeof ageString);

// 3) Fill an Array
const users = Array(5); // Empty array of length 5 (0-4)
const fillUsers1 = Array(5).fill(''); // Array of 5 empty strings
console.log(fillUsers1);
const fillUsers2 = Array(5).fill(1); // Array of 5 indexes with the number 1
console.log(fillUsers2);

// 4) Unique Arrays
// Return unique values of an array
const people = ['Mike', 'Betty', 'Paul', 'Jessica', 'Sam', 'Paul', 'Dana'];
const uniquePpl = Array.from(new Set(people)); // Returns a list of unique values, no repetition
console.log(uniquePpl);

// 5) Dynamic Objects
// Allow to add properties and values to an already existing object
const dynamic = 'hobbies';
const obj = {
  name: 'Benny',
  email: 'bunbun@bunny.gov',
  [dynamic]: ['Carrot Thief', 'Sleeper'],
};
console.log(obj);

// 6) Slicing Arrays
// A way to make the array shorter by removing values
const nums = [1, 2, 3, 4, 5, 6, 7];
nums.splice(5, nums.length); // Removes elements on X, Y-1
console.log(nums);
nums.length = 3; // Specify length of array to return those values in the array
console.log(nums);
console.log(nums.slice(-2)); // Returns the last # elements of the array

// 7) Convert Array to an Object
const arr = ['Mike', 'Betty', 'Paul', 'Jessica'];
const arrObject = { ...arr }; // Converts an array to an object
console.log(arrObject);

// 8) Convert Object to an Array
const object = {
  name: 'Loopy',
  age: 765,
  isOld: true,
};
const objArrayAttr = Object.keys(object); // Returns the attributes of an object and assigns to an array
const objArrayVal = Object.values(object); // Returns the values of an object and assigns to an array
console.log(objArrayAttr);
console.log(objArrayVal);

// 9) Performance
// Check the performance of the code execution
let startAt = performance.now();

// EXECUTE THE CODE...
for (let i = 0; i < 50; i++) {
  console.log(i);
}

let endAt = performance.now();

const runTime = endAt - startAt;
console.log(runTime + ' ms to execute');
