
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

//* write a function generateHash to accomplish this task.
function generateHashTag(str) {
    //? check str is greater than 280 or empty
    if (str.trim().length === 0 || str.trim().length > 280) {
        return false;
    }
    //? split the str into words and capitalize the first letter of each word
    let strArr = str.split(" ").map(x => x.charAt(0).toUpperCase() + x.slice(1)).join("");
    return `#${strArr}`
}

//^ test
const result = generateHashTag("web development tutorial");
console.log(result);

//! output sample: #WebDevelopmentTutorial