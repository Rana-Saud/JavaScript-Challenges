
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

// ? write a funtion findMin that takes an array of numbers as input and returns the minimum number in the array.

// TODO requirments:
// ? The input array may contain both positive and negative integers.
// ? The input array may be empty.
// ? The input array may contain duplicate values.

const findMin = (arr) => {
    return Math.min(...arr);
}


// TODO example:
console.log(findMin([5, 10, 2, 8])); //output: 2
console.log(findMin([5, -3, 0, 12, -7])); //output: -7
console.log(findMin([])); //output: undefined

// ! Note:
// ? Ensure the function handles edge cases gracefully, such as an empty input array.
// ? Consider using ES6 features such as (...) like a spread syntax for a concise implementation.

// TODO In javaScript, the spread operator (...) is used to spread the elements of an array into a new array.
// ? For Example: if arr is [1,2,3], then ...arr expands to 1,2,3.