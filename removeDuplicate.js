
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

// ? write a function that takes an array of integers as input and remove any duplicate elements, returning a new arraywith only the unique elements.

const removeDuplicates = (arr) => {
    let newArr = [...new Set(arr)]
    return newArr;
}

// Example usage:
console.log(removeDuplicates([1, 2, 3, 2, 1, 4])); //output: [1, 2, 3, 4]
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9])); // output: [5, 6, 7, 8, 9]
console.log(removeDuplicates([])); // output: []


// ? The new Set() method in javascript creates a new set object. A set object is a collection of unique values. It can store any type of value, whether primitive values or object references.


// TODO requirments:
// ? The input array may contain both positive and negative integers.
// ? The input array may be empty.
// ? The elements in the input array are not guaranteed to be sorted.
// ? The output should retain the original order of elements from the input array.