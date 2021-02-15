/*
Async JS

- Use of AJAX = Async JS and XML (or JSON)
- Common way to send data between the server and client
- Normal behavior of the code is synchronous
- AJAX makes requests from the background while other elements load in
- JSON data from the server is returned and parsed to display to the client

*/

// Synchronous Code (Read and execute code one line at a time)
// Will add the functions and variables to memory and execute following lines in the call stack
function someFunction() {
  console.log('In a Function');
  console.log('Doing Something...');
}
console.log('Start Sync');
someFunction();
console.log('End Sync');

console.log('');

// Asynchronous Code (Wait for something to finish before moving on)
// Will still add items to the call stack and execute, but complete when other functions execute
// Use of call-back functions to execute something when the data is available (Not always Async)
console.log('Start Async');
setTimeout(() => {
  console.log('In a Timeout');
}, 2000);
console.log('End Async');

// Use of Callbacks
// A function that can be passed in as a parameter of another and execute upon its completion
console.log('Start Callbacks');

function getUser(email, pass, callback) {
  setTimeout(() => {
    callback({ userEmail: email, userPass: pass });
  }, 5000);
}

function getVideos(email, callback) {
  setTimeout(() => {
    callback(['Cool Story', "What's Up Fam?", 'Cookies!?!?!', email]);
  }, 1000);
}

function getResponse(response) {
  console.log(response);
  getVideos(response.userEmail, (videos) => {
    videos.forEach((video, i) => {
      console.log(video + ' video#: ' + (i + 1));
    });
  });
}

// Stacking callbacks to get all data before completing the execution
const user = getUser('bob@boo.goo', 123456, getResponse);
// console.log(user); = Results in undefined because the data hasn't returned at this point

console.log('End Callbacks');

// Use of Promises
// An object that gives back the result or failure of an async procedure
console.log('Start Promises');

const promise = new Promise((resolve, reject) => {
  setTimeout((num = 5) => {
    if (num % 2 === 0) {
      resolve({ user: 'AL' });
    } else {
      reject(new Error('Not an Even Number'));
    }
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((error) => {
    console.log(error.message);
  });

function getOtherUser(email, password) {
  return new Promise((pass, fail) => {
    setTimeout(() => {
      pass({ userEmail: email, userPass: password });
    }, 4000);
  });
}

function getOtherVideos(email) {
  return new Promise((pass, fail) => {
    setTimeout(() => {
      pass([
        'Cool Story 2',
        "What's Up Fam? 2",
        'Cookies!?!?! 2: The Crumbling',
      ]);
    }, 4000);
  });
}

let user2 = getOtherUser('loop@coolp.co', 321654);
user2.then((user) => {
  console.log(user);
  let videos = getOtherVideos(user.userEmail);
  videos.then((videos) => {
    videos.forEach((video) => {
      console.log(video);
    });
  });
});

console.log('End Promises');

// Using await for Sync Code
async function displayUser() {
  const loginUser = await getOtherUser('stump@rump.gov', 5546132);
  const videos = await getOtherVideos(loginUser.userEmail);
  console.log(loginUser);
  videos.forEach((video) => {
    console.log(video);
  });
}

displayUser();
