// 3rd round of JS practice

// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20
function addAll() {
  //console.log(arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(`The sum of 2,5,6,7 = ${addAll(2, 5, 6, 7)}`);

// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17
function sumAllPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(`The sum of prime numbers up to 10 = ${sumAllPrimes(10)}`);

// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
function seekAndDestroy(arr, num1, num2) {
  return arr.filter((num) => num !== num1 && num !== num2);
}

console.log(
  `Seek out and remove 2,6 from the array ${seekAndDestroy(
    [2, 3, 4, 6, 6, 'hello'],
    2,
    6
  )}`
);

// CHALLENGE 4: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
function sortByHeight(arr) {
  let people = arr.filter((item) => item !== -1).sort((a, b) => a - b);
  let orderCount = 0;
  //console.log(people);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = people[orderCount];
      orderCount++;
    }
  }
  return arr;
}

let order = [-1, 200, 4, -1, -1, -1, 2, 560, 450, 99, -1, 1, 256, 100, -1, -1];
console.log(
  `Sorting this list in order around trees (-1) ${order} ===>>> ${sortByHeight(
    order
  )}`
);

// CHALLENGE 5: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present, return undefined
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined
function missingLetters(letters) {
  let range = letters.split('');
  //console.log(range);
  // turn string into array to break up letters
  // need to then go through each to get their charCode
  // from their charCode determine which one is missing to return
  let codes = range.map((letter, i) => letters.charCodeAt(i));
  //console.log(codes);
  let missingLetter, missingCode;
  for (let i = 0; i < codes.length; i++) {
    if (codes[i] !== codes[i + 1] - 1) {
      missingCode = codes[i] + 1;
      missingLetter = String.fromCharCode(missingCode);
    }
  }
  return missingLetter;
}

let abc = 'abcd';
console.log(`The missing letter from ${abc} is = ${missingLetters(abc)}`);

// CHALLENGE 6: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
function evenOddSums(nums) {
  let odds = nums.filter((num) => num % 2 !== 0);
  let evens = nums.filter((num) => num % 2 === 0);
  return [evens.reduce(sumNums), odds.reduce(sumNums)];
}

const sumNums = (total, num) => total + num;

let nums = [50, 60, 60, 45, 71];
console.log(
  `The sum of Evens and Odds from ${nums} are = [${evenOddSums(nums)}]`
);
