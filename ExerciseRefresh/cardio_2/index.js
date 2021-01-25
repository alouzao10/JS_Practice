// Second round of cardio exercises

// Return the longest word(s) from string
function returnLongest(phrase){
    let words = phrase.split(' ');
    let longest = [words[0]];
    for(let i = 1; i < words.length; i++){
        if(words[i].length >= longest[0].length){
            if(words[i].length === longest[0].length){
                longest.push(words[i]);
            } else {
                longest = [words[i]];
            } 
        }  
    }
    if(longest.length === 1){
        return longest[0];
    } else {
        return longest;
    }

}

console.log("Return Longes Word in: Hello World, this is going to be a fantastic coding challenge");
const longWord = returnLongest("Hello World, this is going to be a fantastic coding challenge");
console.log(longWord);



// Array Chunking
function arrayChunking(arr, n){
    let retArray = [];
    let i = 0;
    while(i < arr.length){
        retArray.push(arr.slice(i, n + i));
        i += n;
    }

    return retArray;
}

console.log("Group into subarrays based on number: [1,2,3,4,5,6,7], 2/3")
const arrayChunk1 = arrayChunking([1,2,3,4,5,6,7], 3);
console.log(arrayChunk1)
const arrayChunk2 = arrayChunking([1,2,3,4,5,6,7], 2);
console.log(arrayChunk2);



// Flatten array into single array
function flattenArray(arr){
    return arr.flatMap(x => x);
}

const arr1 = [[1,2], [3], [4,5,6]]
console.log(flattenArray(arr1));



// Is an Anagram 
function isAnagram(word1, word2){
    let w1 = word1.toLowerCase().split('').sort().join('');
    let w2 = word2.toLowerCase().split('').sort().join('');
    return w1 === w2 ? 'Match' : 'No Match';
}

console.log(isAnagram("RICE", "ERIC"));
console.log(isAnagram("river", "rider"));