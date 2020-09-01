// Key Array Methods

// Basic Array
const items = [
  { name: 'Book', count: 5, isOld: true },
  { name: 'Computer', count: 2, isOld: true },
  { name: 'Games', count: 4, isOld: false },
  { name: 'Shirts', count: 11, isOld: false },
  { name: 'Pants', count: 8, isOld: true },
];

// FILTER method
// Returns a new array based on a condition
// If true it will be added to the new array set by the variable
// Doesn't alter the original array
const filteredItems = items.filter((item) => {
  return item.count < 7;
});
console.log(filteredItems);

// MAP Method
// Takes an array and converts it into a new one
// Return what you want in the new array from the original array
// Only can return a single element from the array
const mappedItems = items.map((item) => {
  return item.cost;
});
console.log(mappedItems);

// FIND Method
// Finds a single object in an array
// Returns the first instance it occurs in the array
const findItem = items.find((item) => {
  return item.name === 'Shirts';
});
console.log(findItem);

// FOR EACH Method
// Works similar to a for loop but takes in a function to iterate each index
items.forEach((item) => {
  console.log(item.count);
});

// SOME Method
// Returns true or false based on condition for some of the items
const someItems = items.some((item) => {
  return item.count <= 8;
});
console.log(someItems);

// EVERY Method
// Returns true or false if ALL items meet the condition
const everyItem = items.every((item) => {
  return item.count <= 8;
});
console.log(everyItem);

// REDUCE Method
// Can execute some procedures on the element in the array and return some value
// Define a starting index to start and return the updated value and the expression
// Runs a function on all array elements and keeps track of the main parameter
// Perform some operation to get information about the whole array
const reduceItem = items.reduce((currentCount, item) => {
  return item.count + currentCount;
}, 0);
console.log(reduceItem);

// INCLUDES Method
// Takes an argument and returns true or false if it exists
// Simplifies not having to iterate through each element
const nums = [1, 2, 3, 4, 5];
const includes = nums.includes(2);
console.log(includes);
