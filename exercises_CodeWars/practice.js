// Practice from the Code Wars Kata

// Is Word a Palendrome
function isPalendrome(word) {
  // palendrom is same forward and backwards
  // take in word as is
  // create new word that is the reverse
  // compare and return
  let reverseWord = word.split("").reverse().join("");
  //console.log('Word', word)
  //console.log('Reverse', reverseWord);
  return reverseWord === word ? true : false;
}

let word1 = "nascar";
console.log(`Is ${word1} a palendrome? ${isPalendrome(word1)}`);

let word2 = "otto";
console.log(`Is ${word2} a palendrome? ${isPalendrome(word2)}`);

// Sum of Duplicates
function sumDuplicates(nums) {
  // Take in an array
  // Find duplicates and add together
  // Maybe keep track of which ones have been found?
  // Return the sum of all duplicates
  let dupes = nums.filter((num) => nums.indexOf(num) !== nums.lastIndexOf(num));
  let total = dupes.reduce((total, num) => {
    return total + num;
  });
  return total;
  /*for (let i = 0; i < dupes.length; i++) {
    total += dupes[i];
  }
  return total;*/
}

let nums1 = [1, 2, 3, 3, 3, 4, 4, 5, 5, 6]; // Should = 27
console.log(`The sum of duplicates in ${nums1} = ${sumDuplicates(nums1)}`);

let nums2 = [1, 1, 3, 2, 1]; // Should = 3
console.log(`The sum of duplicates in ${nums2} = ${sumDuplicates(nums2)}`);

let nums3 = [1, 2, 3, 2, 1]; // Should = 6
console.log(`The sum of duplicates in ${nums3} = ${sumDuplicates(nums3)}`);

// Count the Vowels in a string
function vowelCount(word) {
  let letters = word.split("");
  let vowels = letters.filter(
    (letter) =>
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
  );
  return vowels.length;
}

let otherWord = "apple";
console.log(`The number of vowels in ${otherWord} is ${vowelCount(otherWord)}`);

let otherWord2 = "sprucing";
console.log(
  `The number of vowels in ${otherWord2} is ${vowelCount(otherWord2)}`
);

// Create a phone number
function createPhoneNum(nums) {
  let phoneNum = "(XXX) XXX-XXXX";
  if (nums.length < 10 || nums.lenght > 10) {
    return "Not a Number";
  } else {
    for (let i = 0; i < 10; i++) {
      phoneNum = phoneNum.replace("X", nums[i]);
    }
    return phoneNum;
  }
}

let phoneNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(`A phone number from [${phoneNum}] is ${createPhoneNum(phoneNum)}`);

// Get the Middle Character of String
function findMiddle(word) {
  if (word.length % 2 === 0) {
    let mid1 = Math.floor(word.length / 2) - 1;
    let mid2 = mid1 + 1;
    return word[mid1] + word[mid2];
  } else {
    let mid = Math.floor(word.length / 2);
    return word[mid];
  }
  //console.log(s.length);
  //console.log(Math.ceil(s.length / 2 - 1));
  //return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

let str = "testing";
console.log(`The middle character of ${str} is : ${findMiddle(str)}`);

// Find the Outlier
function findOutlier(nums) {
  // Determine if array is even or odd
  let odds = nums.filter((num) => num % 2 !== 0);
  let evens = nums.filter((num) => num % 2 === 0);
  //console.log(odds, evens)
  if (odds.length > evens.length) {
    return evens[0];
  } else {
    return odds[0];
  }
}

let outlier = [2, 4, 6, 8, 3];
console.log(`The outlier from [${outlier}] is ${findOutlier(outlier)}`);

// String Transformation
function stringTransform(str) {
  let words = str.split(" "); // [word, word, ...]
  let letters = [];
  let newWords = words.map((word) => {
    let letters = word.split("");
    let newLetters = letters.map((letter) => {
      if (letter === letter.toUpperCase()) {
        return letter.toLowerCase();
      } else {
        return letter.toUpperCase();
      }
    });
    return newLetters.join("");
  });
  return newWords.reverse().join(" ");
}

console.log(stringTransform("Example string"));

// Find the unique number
function findUnique(arr) {
  let sorted = arr.sort((a, b) => a - b);
  if (sorted[0] === sorted[1]) {
    return sorted.pop();
  } else {
    return sorted[0];
  }
}

let someNums = [1, 1, 1, 1, 0, 1, 1, 1];
console.log(`The unique number in ${someNums} is ${findUnique(someNums)}`);

// Sum of Digits
function sumDigits(num) {
  let digits = num.toString().split("");
  let numDigits = digits.length;
  let digitSum = 0;
  while (numDigits > 0) {
    let newDigits = digits.map((digit) => {
      return parseInt(digit);
    });
    digitSum = newDigits.reduce(addNums);
    digits = digitSum.toString().split("");
    numDigits--;
  }
  return digitSum;
}

const addNums = (total, num) => total + num;

let num = 942;
console.log(`The sum of ${num} is ${sumDigits(num)}`);

// Highest and Lowest
function highLow(num) {
  let nums = num.split(" ").sort((a, b) => a - b);
  return nums[nums.length - 1] + " & " + nums[0];
}

let nums = "1 2 -3 4 5";
console.log(`The Max and Min of ${nums} are ${highLow(nums)}`);

// Filter Out Strings
function filterStrings(arr) {
  return arr.filter((item) => typeof item === "number");
}

console.log(filterStrings([1, "a", "b", 0, 15]));

// Square Digits
function squareDigits(num) {
  let digits = num.toString().split("");
  digits.forEach((digit, i) => {
    digits[i] = Math.pow(parseInt(digit), 2);
  });
  return parseInt(digits.join(""));
}

let digits = 9119;
console.log(`The square of digits from ${digits} is ${squareDigits(digits)}`);

// Sort the Odds
function sortOdds(nums) {
  let odds = nums.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  nums.forEach((num, i) => {
    if (num % 2 !== 0) {
      nums[i] = odds[0];
      odds.shift();
      console.log(odds, nums);
    }
  });
  return nums;
}

let numList = [5, 3, 2, 8, 1, 4]; // [1, 3, 2, 8, 5, 4]
console.log(`The odds sorted from ${numList} are [${sortOdds(numList)}]`);

// What's Unique
function uniqueNum(nums) {
  let numList = nums.split(" ").map((num) => {
    return parseInt(num);
  });
  let evens = numList.filter((num) => num % 2 === 0);
  let odds = numList.filter((num) => num % 2 !== 0);
  let uniqueNum = evens.length > odds.length ? odds[0] : evens[0];
  let uniqueIndex = 0;
  numList.forEach((num, i) => {
    if (num === uniqueNum) {
      uniqueIndex = i;
    }
  });
  return uniqueIndex + 1;
}

let moreNums = "2 4 7 8 10";
console.log(
  `The unique number from ${moreNums} is at place ${uniqueNum(moreNums)}`
);

// Sum Multiples of 3 and 5
function sumThreeFive(n) {
  if (n < 0) {
    return 0;
  } else {
    let nums = [0];
    for (let i = 0; i < n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        nums.push(i);
      }
    }
    return nums.reduce((sum, num) => sum + num);
  }
}

console.log(sumThreeFive(166));

// Filter the differences
// Original
/*function arrayDiff(a, b) {
  let filtered = [];
  if(b.length === 0){
    return a;
  } else {
    for(let i = 0; i < a.length; i++){
        if(!b.includes(a[i])){
          filtered.push(a[i]);
        }
      }
    }
  return filtered;
}*/

// Reworked
function arrayDiff(a, b) {
  if (b.length === 0) {
    return a;
  } else {
    return a.filter((num, i) => !b.includes(num));
  }
}

console.log(arrayDiff([-13, -6, -14, -20, -1, -8], [-8, -20]));

// Sum Positive Nums
function positiveSum(arr) {
  let posSum = 0;
  arr.forEach((num) => {
    if (num > 0) {
      posSum += num;
    }
  });
  return posSum;

  /*if(arr.length === 0) {
    return 0
  } else {
    let posNums = arr.filter((num) => num > 0);
    if(posNums.length === 0){
      return 0
    } else {
      return posNums.reduce((total, num) => total + num);
    }
  }*/
}

console.log(
  `The positive nums in ${[1, 2, 3, -4, 5, -6, -7, 8]} = ${positiveSum([
    1,
    2,
    3,
    -4,
    5,
    -6,
    -7,
    8,
  ])}`
);

// Remove the WUBs
function wubRemoval(str) {
  let lyrics = str.split("WUB");
  let cleanLyrics = lyrics.filter((letter) => letter !== "").join(" ");
  return cleanLyrics;
}

console.log(wubRemoval("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));

// Get Single Records
function uniqueOrder(items) {
  if (typeof items === "string") {
    items = items.split("");
  }
  let uniques = items.filter((item, i) => item !== items[i - 1]);
  return uniques;
}

console.log(uniqueOrder("AAAABBBCCDAABBB"));
console.log(uniqueOrder([1, 2, 2, 3, 3]));

// Find Friends 4 letters
function findFriends(friends) {
  return friends.filter((friend) => friend.length === 4);
}

console.log(findFriends(["Ryan", "Kieran", "Mark"]));

// Generate a Hashtag
function generateHashtag(str) {
  let words = str.split(" ").filter((letter) => letter !== "");
  if (str.length < 1 || !str || words.length === 0) {
    return false;
  }
  words.forEach((word, i) => {
    let tmp = word.split("");
    words[i] = tmp[0].toUpperCase() + word.slice(1);
  });
  let hashTag = "#" + words.join("");
  return hashTag.length > 140 ? false : hashTag;
}

console.log(generateHashtag("Cool Story Bro"));

// Find First Duplicate
function firstDup(s) {
  // your solution here
  let letters = s.split("");
  console.log(letters);
  let dupes = letters.filter(
    (letter) => letters.indexOf(letter) !== letters.lastIndexOf(letter)
  );
  return dupes[0];
}

console.log(firstDup("tweet"));

function goodVsEvil(good, evil) {
  console.log("Good", good);
  console.log("Evil", evil);
  let goodVals = good.split(" ");
  let evilVals = evil.split(" ");
  let newGoodVals = goodVals.map((val, i) => {
    switch (i) {
      case 0:
        return val * 1;
      case 1:
        return val * 2;
      case 2:
        return val * 3;
      case 3:
        return val * 3;
      case 4:
        return val * 4;
        case 5:
          return val * 10;
    }
  });

  let newEvilVals = goodVals.map((val, i) => {
    switch (i) {
      case 0:
        return val * 1;
      case 1:
        return val * 2;
      case 2:
        return val * 2;
      case 3:
        return val * 2;
      case 4:
        return val * 3;
      case 5:
        return val * 5;
      case 6:
          return val * 10;
    }
  });

  console.log(newEvilVals.reduce((tot, num) => tot + num));
  console.log(newGoodVals.reduce((tot, num) => tot + num));
}

goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1");
