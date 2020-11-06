// Practicing with JS Exercises

// Reverse a string
function reverseString(word){
    return word.split('').reverse().join("");
}

var reverse = reverseString("Hello");
console.log(`Hello => ${reverse}`);
var reverse = reverseString("superduper");
console.log(`superduper => ${reverse}`);



// Check if Palindrome
function isPalindrome(word){
    return (word === word.split('').reverse().join('')) ? (true) : (false);
}

var p1 = isPalindrome("racecar");
var p2 = isPalindrome("otto");
var p3 = isPalindrome("pencil");
console.log(`${p1}, ${p2}, ${p3}`);


// Reverse a number
function reverseInt(num){
    var isNeg = false;    
    if(num < 0){
        isNeg = true;
    }
    var numFlip = parseInt(num.toString().split('').reverse().join(""));
    return (isNeg) ? numFlip * -1 : numFlip;
}

var num1 = reverseInt(-123456);
console.log(num1)
var num2 = reverseInt(96);
console.log(num2);


// Capitalize first letter in string
function capitalizeFirst(word){
    var letters = word.split('');
    letters[0] = letters[0].toUpperCase();
    return letters.join('');
}

var cap1 = capitalizeFirst("cat");
console.log(cap1);
var cap2 = capitalizeFirst("dog");
console.log(cap2);


// Return the most common letter in string
function commonLetter(word){
    var letters = word.split('').sort();
    var currMax = {letter: '', count: 0};
    var max = {letter: '', count: 0}
    console.log(letters);
    for(var i = 0; i < letters.length; i++){
        if(letters[i] === currMax.letter){
            currMax.count++;
        } else {
            if(max.count < currMax.count){
                max.count = currMax.count;
                max.letter = currMax.letter;
            }
            currMax.count = 0;
            currMax.letter = letters[i];
        }

    }
    return max;
}

console.log(commonLetter("coasssssssssssstal"));



// Return Fizz on multiple of 3, Buzz for multiple of 5, FizzBuzz for multiple of 5 and 3
function fizzBuzz(){
    for(var i = 0; i < 100; i++){
        if((i % 5 === 0) && (i % 3 === 0)){
            console.log("FIZZ BUZZ")    
        } else if( i % 3 === 0){
            console.log("FIZZ")
        } else if(i % 5 === 0){
            console.log("BUZZ")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz();