
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

// ? write a function that takes a string as input and returns the number of vowels in the string. Consider a, e, i, o, and u as vowels (Both upper and lower case).

const countVowels = (str) => {
    let count = 0;
    let strArr = str.toLowerCase().split("");
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of strArr) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}



// Example usage:
console.log(countVowels("Helloo world")); // Output: 4
console.log(countVowels("ThE QuIck BrOwn fOx")); // Output: 5
console.log(countVowels("Brrrp")); // Output: 0


// TODO requirments:
// ? 