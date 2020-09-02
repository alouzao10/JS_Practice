// Learning Promises
// Commit to do something and then provide 2 results being resolved or failed
// Mainly used within Callback Functions
// Executed within an arrow function
// Pass in two functions as parameters to the Promise object
// Return a success or failure in the resolve and reject parameter functions
// The result is assigned to the variable calling the Promise

let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a === 2) {
    resolve('SUCCESS');
  } else {
    reject('FAILURE');
  }
});

console.log(p); // Returns the resulting Promise object

// Can continue upon getting a response from the Promise with the .then method
// Access the return message provided by the resolve or reject calls within the Promise
// The then is used to capture the resolve case
// The catch is used to capture the reject case
p.then((message) => {
  console.log(`After the Promise you get: ${message}`);
}).catch((error) => {
  console.log(`Error Caught: ${error}`);
});

// Example when using a Callback Function
const thing1 = false;
const thing2 = false;

// Using Callback functions
function thingCallback(callback, errorCallback) {
  if (thing1) {
    errorCallback({
      name: 'Thing 1',
      message: 'You SUCK!',
    });
  } else if (thing2) {
    errorCallback({
      name: 'Thing 2',
      message: 'You also SUCK!',
    });
  } else {
    callback({
      name: 'Thing 1 and Thing 2',
      message: 'You guys are alright.',
    });
  }
}
thingCallback(
  (success) => {
    // Success Callback
    console.log('Success: ' + success.name + '. ' + success.message);
  },
  (error) => {
    // Error Callback
    console.log('Failure: ' + error.name + '. ' + error.message);
  }
);

// Using Promises
function thingPromise() {
  return new Promise((resolve, reject) => {
    if (thing1) {
      reject({
        name: 'Thing 1',
        message: 'You SUCK!',
      });
    } else if (thing2) {
      reject({
        name: 'Thing 2',
        message: 'You also SUCK!',
      });
    } else {
      resolve({
        name: 'Thing 1 and Thing 2',
        message: 'You guys are alright.',
      });
    }
  });
}
thingPromise()
  .then((success) => {
    console.log(
      'Promise SUCCESS: ' + success.name + ' with ' + success.message
    );
  })
  .catch((error) => {
    console.log('Promise ERROR: ' + error.name + ' with ' + error.message);
  });

// More Promise Practice
const prom1 = new Promise((res, rej) => {
  res('1 Done');
});
const prom2 = new Promise((res, rej) => {
  res('2 Done');
});
const prom3 = new Promise((res, rej) => {
  res('3 Done');
});
// Capture all Promises at the same time
// Don't have to wait for one to finish before the other
// Returns an array of messages as a result of the running order
// ALL is used when all have been completed
// RACE is used when one has been completed
Promise.all([prom1, prom2, prom3]).then((successes) => {
  successes.forEach((msg) => {
    console.log(msg);
  });
});

Promise.race([prom1, prom2, prom3]).then((success) => {
  console.log(success);
});
