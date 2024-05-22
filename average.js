
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

// ? write the function to calculate the average of an array of numbers.


// TODO requirments:
// ? Accept an array of numbers as input.
// ? Calculate the sum of all the numbers in the array.
// ? Divide the sum by the total number of elements in the array to find the average.
// ? return the average of the numbers in the array.


function calculateAverage(arr) {
    // ? calculate the sum of all the numbers in the array.
    let sum = arr.reduce((accum, curEle) => curEle += accum, 0)
    return sum / arr.length;
}

console.log(calculateAverage([5, 10, 2, 8]));  // output: 6.25