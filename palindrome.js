
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

// ? write a function to determine whether a given string is palindrome or not. A plaindrome is a word, phrase, number or other sequence of characters that reads the same backward as forward, ignoring spaces, punctuation and capitalization.


function isPalindrome(str) {
    str = str.toLowerCase().replace(/\W/g, "");
    let strArr = str.split("").reverse().join("");
    if (strArr === str)
        return true;

    return false;
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // output: true
console.log(isPalindrome("racecar")); // output: true
console.log(isPalindrome("hello")); // output: false


// TODO requirments:
// ? The input string may contain letters, digits, spaces, punctuation and special characters.
// ? The function should be case-sensitive, meaning "RaceCar" and "racecar" are considered palindromes.
// ? Ignore spaces, punctuation and special characters when determining if a string is a palindrome.
// ? The function should return true if the input string is palindrome and otherwise false.


//& Note:
// ? .replace(/\W/g, ""): uses the replace() method with a regular expression (/\W/g) to remove all non-alphanumeric characters from the string. This includes spaces, punctuation, and special characters.
// ? \W : matches any non-alphanumeric character (equal to [^a-zA-Z0-9]).
// ? The g flag in the regular expression (/\W/g) means "global", meaning it will match all occurrences of the non-alphanumeric character in the input string.
// ? so .replace(/\W/g, "") replace all non-alphanumeric characters from the string.