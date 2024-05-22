
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------


// ? Write a JavaScript function to count the number of characters in a string.
function countChar(str, chr) {
    //? check str is empty or not
    if (str.trim().length === 0) return false;

    //? split the str into words and filter the words that are equal to chr
    let count = str.split("").filter(x => x.toLowerCase() === chr.toLowerCase()).length
    return `There are ${count} ${chr} in "${str}"`;
}

// ^ test
const result = countChar("web development Tutorial", 't');
console.log(result);