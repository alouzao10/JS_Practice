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
//console.log(countSheep(15));

console.log('+++++++++++++++++++++++++++++++++++++');

// Arrow Functions
let helloArrow = () => {
  console.log('Hello Arrow Function');
};
helloArrow();

let countArray = (arr) => {
  return arr.reduce((result, num) => {
    return result + num;
  }, 0);
};

console.log(countArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

console.log('+++++++++++++++++++++++++++++++++++++');

// Working with Promises
let holdOn = (sec) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sec > 10000) {
        reject('Waited too long');
      } else {
        resolve('The time has passed');
      }
    }, sec);
  });
};

let doSomething = async () => {
  console.log("Let's wait 5 seconds");
  let response = await holdOn(5000);
  console.log(response);
  console.log('All done');
  let somePromise = new Promise((resolve, reject) => {
    if ((5000 / 1000) % 5 === 0) {
      resolve('Waited Correctly');
    } else {
      reject('Waited Incorrectly');
    }
  });
  somePromise
    .then((ret) => {
      console.log(ret);
    })
    .catch((err) => {
      console.log(err);
    });
};

doSomething();
