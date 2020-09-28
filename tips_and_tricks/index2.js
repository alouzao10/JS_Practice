// Even more JS Tips and Tricks

// 1) Hoisting
// Variable and Function declarations are taken to the top upon compiling/running code
// Will take 'var name' and move it to the top but left undefined
// Variables will be undefined due to no instantiation
// Function will work as usual because of their declaration but will fail if initialized to a variable

var name = 'Eddy';
console.log(name);

function hello() {
  console.log('Hello there');
}
hello();

var bye = function anotherOne() {
  console.log('Ok Byee');
};

// 2) Call Stack
/*
The data structure that dictates how the functions are run
The functions are executed in the order they appear in line of the file
*/

// 3) Scope
/*
Where in the code are variables and functions accessible
Global and Function scope
Global can be used anywhere within the bounds of the application
Function can only be used within the bounds of the function definition
*/

// 4) Callbacks And Promises
/*
A function that gets passed into the parameter of another function
Will be ran once the function is completed
Default is a synchronous callback
*/
const sayName = (name, callBack) => {
  console.log('Running Code ' + name);
  callBack();
};

function callBack() {
  console.log('This is the Call Back');
}

sayName('Eddy', callBack);

// Async Callback
console.log('first');
setTimeout(() => {
  console.log('In the Middle');
}, 1000);
console.log('last');

const doSomething = new Promise((resolve, response) => {
  if (2 === 3) {
    response('Bad MSG');
  } else {
    resolve('Good MSG');
  }
});
console.log('Make a Promise: ' + doSomething);
