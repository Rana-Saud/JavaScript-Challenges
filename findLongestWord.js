
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

// ? Write a JavaScript program to find the longest word in a given string.
function findLongestWord(str) {
    //? check str is empty or not
    if (str === '') return false;

    //? split the str into words and sort the words from longest to shortest
    const words = str.split(' ').sort((a, b) => b.length - a.length)[0];

    // ? return the longest word
    return `The longest word in "${str}" is "${words}" and its length is ${words.length}.`;

}

// ^ test
const result = findLongestWord("Web Development Tutorial");
console.log(result);

//! output sample: Development and its length is 11