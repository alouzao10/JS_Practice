// More practice with ASYNC JS Functions

// mimic data that could be on a server or DB
let posts = [
  { id: 1, title: 'This is a Post', content: 'Some cool content goes here...' },
  {
    id: 2,
    title: 'This is another Post',
    content: 'Some other cool content goes here...',
  },
  {
    id: 3,
    title: 'This is yet another Post',
    content: 'Some more cool content goes here...',
  },
];

// get the posts
function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}:::::${post.content}</li>`;
    });
    document.getElementById('posts').innerHTML = output;
  }, 1000); // delay 2 seconds and execute
}
//getPosts();

// create a post
function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 3000);
}
/*createPost({
  id: 4,
  title: 'This is some more Post',
  content: 'Some more other cool content goes here...',
});*/

// Callback Functions
function createCallbackPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
/*createCallbackPost(
  {
    id: 5,
    title: 'This is a Callback Post',
    content: 'Some cool callback content goes here...',
  },
  getPosts
);*/

// Other Callback Example
let cart = [
  { id: 1, item: 'Ball', color: 'Red', price: 5.0 },
  { id: 2, item: 'Stick', color: 'Brown', price: 1.55 },
  { id: 3, item: 'Basket', color: 'Blue', price: 25.3 },
  { id: 4, item: 'Blanket', color: 'Purple', price: 12.45 },
  { id: 5, item: 'Hat', color: 'White', price: 32.32 },
];
let total = 0.0;

function addCart(cart, callback) {
  let cartPrices = cart.map((cartItem) => cartItem.price);
  return callback(cartPrices.reduce(totalCartCost, 0.0));
}

function totalCartCost(total, price) {
  return total + price;
}

function isABudget(totalCost) {
  total = totalCost;
  return totalCost < 50.0 ? 'Under Budget' : 'Over Budget';
}

console.log(addCart(cart, isABudget));

function removeCartItem(itemID, callback) {
  cart.filter((item) => item.id !== itemID);
  return callback(cart.filter((item) => item.id === itemID));
}

function itemRemoved(thing) {
  return `${thing[0].item} was removed`;
}

console.log(`Removing item id = 5...${removeCartItem(5, itemRemoved)}`);
console.log('Your Cart is:');
cart.forEach((cartItem) => {
  console.log(`A ${cartItem.color} ${cartItem.item} ==== $ ${cartItem.price}`);
});
console.log(`Total ==== $ ${total}`);

// Promises
let users = [
  { id: 1, name: 'Paul', age: 34, healthy: false },
  { id: 2, name: 'Sally', age: 32, healthy: true },
  { id: 3, name: 'Susie', age: 23, healthy: false },
  { id: 4, name: 'Ally', age: 76, healthy: true },
  { id: 5, name: 'Mike', age: 61, healthy: false },
  { id: 6, name: 'Nicky', age: 27, healthy: true },
  { id: 7, name: 'Sammy', age: 25, healthy: false },
  { id: 8, name: 'Richard', age: 39, healthy: true },
  { id: 9, name: 'Lupe', age: 55, healthy: false },
  { id: 10, name: 'Dana', age: 82, healthy: false },
];

function getReport(users) {
  let sick = users.filter((user) => !user.healthy);
  let well = users.filter((user) => user.healthy);

  return new Promise((pass, fail) => {
    if (sick.length > well.length) {
      fail('You are a sick bunch');
    } else {
      pass('All seem to be well');
    }
  });
}

let healthReport = getReport(users)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Using Promise.all()
const fetch = require('node-fetch');
const promise1 = Promise.resolve('A resolution');
const promise2 = Promise.reject('A reject');
const promise3 = new Promise((pass, fail) => {
  setTimeout(() => {
    pass('Another resolution');
  }, 2000);
});
const promise4 = fetch(
  'https://jsonplaceholder.typicode.com/users'
).then((res) => res.json());
const promise5 = new Promise((pass, fail) => {
  setTimeout(() => {
    pass('Another reject');
  }, 2000);
});

// Returns all instances of a pass / fail case
// If there is one instance of a reject the Promise goes into the catch and terminates
Promise.all([promise1, promise2, promise3, promise4, promise5])
  .then((values) => {
    console.log(values);
  })
  .catch((errors) => console.log(errors));

// Using async + await
let user = { name: 'Randy', age: 62 };
async function getSome(user) {
  let { name, age } = user;
  let nameInfo = await checkName(name);
  let ageInfo = await checkAge(age);
  let userInfo = '';
  nameInfo
    .then((info) => (userInfo = info.msg))
    .catch((err) => (userInfo = err.errMsg));

  ageInfo
    .then((info) => (userInfo += info.msg))
    .catch((err) => (userInfo += err.errMsg));
  return userInfo;
}

function checkName(name) {
  return new Promise((pass, fail) => {
    if (name.length < 4) {
      pass({ msg: 'Name is short' });
    } else {
      fail({ errMsg: 'Name is long' });
    }
  });
}

function checkAge(age) {
  return new Promise((pass, fail) => {
    if (age < 50) {
      pass({ msg: 'Age is young' });
    } else {
      fail({ errMsg: 'Age is old' });
    }
  });
}

console.log(getSome(user));
