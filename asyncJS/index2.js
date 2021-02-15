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
getPosts();

// create a post
function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 3000);
}
createPost({
  id: 4,
  title: 'This is some more Post',
  content: 'Some more other cool content goes here...',
});

// Callback Functions
function createCallbackPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}
createCallbackPost(
  {
    id: 5,
    title: 'This is a Callback Post',
    content: 'Some cool callback content goes here...',
  },
  getPosts
);

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
