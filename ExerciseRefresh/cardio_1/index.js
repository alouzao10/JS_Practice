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



function reverseInt(num){
    return parseInt(num.toString().split('').reverse().join(""));
}

var num1 = reverseInt(123456);
console.log(num1)
var num2 = reverseInt(96);
console.log(num2);



function capitalizeFirst(word){
    var letters = word.split('');
    letters[0] = letters[0].toUpperCase();
    return letters.join('');
}

var cap1 = capitalizeFirst("cat");
console.log(cap1);
var cap2 = capitalizeFirst("dog");
console.log(cap2);



function commonLetter(word){
    var letters = word.split('').sort();
    var count = 0;
    var maxLetter = '';
    console.log(letters);
    for(var i = 0; i < letters.length - 1; i++){
        if(letters[i] === letters[i+1]){
            count++;
            maxLetter[i]
        } else {
            count = 0
        }
    }
}

commonLetter("coastal");




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