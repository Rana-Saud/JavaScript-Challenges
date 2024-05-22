
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

// ? write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

function findMax(arr) {
    // ? sort the array in ascending -> solution
    // return Math.max(...arr);

    // ? sort the array in descending -> solution 2
    return arr.sort((a, b) => b - a)[0];
}


console.log(findMax([1, 5, 6, 8, 10])); // Output: 10
console.log(findMax([-10, -5, -6, -8, -1])); // Output: -1
console.log(findMax([5])); // Output: 5