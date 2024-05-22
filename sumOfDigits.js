
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

// ? Write a function that takes numbers as input to calculate the sum of the digits of an integer.

// TODO requirments:
// ? The input number will always be a positive integer.
// ? The input number can have multiple digits.
// ? The output should be the sum of all the digits in the input number.

function sumOfDigits(num) {
    if (num < 0) return false;
    return [...num.toString()].reduce((a, e) => a + parseInt(e), 0)
}

console.log(sumOfDigits(1234)); // output: 10
console.log(sumOfDigits(4312)); // output: 10
console.log(sumOfDigits(123456)); // output: 21


// & Note:
// ? This function calculate the sum of digits without converting the number to a string.