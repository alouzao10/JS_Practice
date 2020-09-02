// Learning Arrow Functions

// Normal Functions
function sum(a, b) {
  return a + b;
}
console.log('SUM: ' + sum(2, 3));

function isPositive(num) {
  return num >= 0;
}
console.log('IS +: ' + isPositive(-3));

function doSomething() {
  return 'Hello';
}
console.log(doSomething());

document.addEventListener('click', function () {
  console.log('CLICK');
});

// Arrow Functions
let sumArrow = (a, b) => {
  return a + b;
};
console.log('SUM ARROW: ' + sumArrow(3, 4));

let positiveArrow = (num) => {
  return num >= 0;
};
console.log('IS + ARROW: ' + positiveArrow(9));

let somethingArrow = () => {
  return 'Hello Arrow';
};
console.log(somethingArrow());

document.addEventListener('click', () => {
  console.log('ARROW CLICK');
});
