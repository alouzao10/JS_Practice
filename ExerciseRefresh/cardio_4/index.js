// Some JS Exercises

// Different ways to execute the same function
// function countSheep(num) {}

// For Loop
function countSheep(num) {
  let sheep = '';
  for (let i = 1; i <= num; i++) {
    sheep += `${i} sheep...`;
  }
  return sheep;
}

// While Loop
function countSheep(num) {
  let sheep = '';
  let count = 1;
  while (count <= num) {
    sheep += `${count} sheep...`;
    count++;
  }
  return sheep;
}

// Array Methods ForEach
function countSheep(num) {
  let sheep = '';
  let arr = Array.from({ length: num });
  arr.forEach((item, i) => {
    sheep += `${i + 1} sheep...`;
  });
  return sheep;
}

// Array Methods Map
function countSheep(num) {
  let arr = Array.from({ length: num });
  let sheep = arr.map((item, i) => {
    return `${i + 1} sheep...`;
  });
  return sheep.join('');
}

// Array Methods Reduce
function countSheep(num) {
  let arr = Array.from({ length: num });
  let sheep = arr.reduce((str, item, i) => {
    return str + `${i + 1} sheep...`;
  }, '');
  return sheep;
}

console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
console.log(countSheep(15));
