
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

// ? Write a function arrayAreEqual that takes two arrays as input and return true if the arrays are equal (i.e., contain the same elements in the same order) and false otherwise.


// TODO requirments:
// ? The function should return false if the array have different lengths.
// ? The function should return true if the arrays are equal (i.e., contain the same elements in the same order).
// ? The function should return false if the arrays are not equal.

function arrayAreEqual(arr1, arr2) {
    // ? check arr1 and arr2 length is equal or not
    if (arr1.length != arr2.length) return false;

    // ? check arr1 and arr2 elements are equal or not
    // for (let i = 0; i < arr1.length; i++) {
    //     if (arr1[i] != arr2[i]) return false;
    // }

    // return true;

    // ? solution 2: 
    return arr1.every((x, i) => x === arr2[i])
}

console.log(arrayAreEqual([1, 2, 3], [1, 2, 3])); // Output: true
console.log(arrayAreEqual([1, 2, 3], [1, 2, 4])); // output: false
console.log(arrayAreEqual([], [])); // output: true