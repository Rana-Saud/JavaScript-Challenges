
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

// ? write a function called isPowerOfTwo() that takes an integer num as input and return true if num is a power of two and false  otherwise.

const isPowerOfTwo = (num) => {
    for (let i = 0; i < num; i++) {
        // if (Math.pow(2, i) == num) return true;
        if (2 ** i == num) return true;
    }
    return false;
}


// Example usage:
console.log(isPowerOfTwo(8)); // output: true
console.log(isPowerOfTwo(16)); // output: true
console.log(isPowerOfTwo(7)); // output: false


// TODO requirments:
// ? The input num will be a positive integer.
// ? Zero (0) and negative are not considered power of two.
// ? The function should return true if num is a power of two and false  otherwise.


// ! Home work
// ? we can solve it using bitwise operator too but its your chance to do it. 