
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

// ? write a function to sort an array of numbers in an ascending order.


function sortAscendingOrder(arr) {
    // ? sort the array in ascending order without sort method
    let clone = [...arr]
    for (let i = 0; i < clone.length; i++) {
        for (let j = i + 1; j < clone.length; j++) {
            if (clone[i] > clone[j]) {
                let temp = clone[i];
                clone[i] = clone[j];
                clone[j] = temp;
            }
        }
    }
    return clone;
}


console.log(sortAscendingOrder([5, 2, 1, 4, 3])); // Output: [1, 2, 3, 4, 5]

// TODO requirments:
// ? The function should take an array of numbers as input.
// ? It should  return new array with the numbers sorted in ascending order.
// ? The original array should remain unchanged.
// ? You are not allowed to use the build-in sort() method.