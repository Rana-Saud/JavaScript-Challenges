
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

// ? write a function to calculate the sum of squares of all elements in an array. For exapmle, given the array [1,2,3], the function should return 14 becaues 1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14.

const sumOfSquares = (arr) => {
    return arr.reduce((accum, ele) => accum += (ele * ele), 0);
}


console.log(sumOfSquares([1, 2, 3])); // output: 14
console.log(sumOfSquares([4, 5, 6])); // output: 77