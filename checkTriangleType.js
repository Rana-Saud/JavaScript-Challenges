
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

// ? Write a function called checkTriangleType that takes three parameters representing the length of the side of a triangle. The function should retrurn a string indicating the type of the triangle: "Equilateral", "Isosceles", or "Scalene".

function checkTriangleType(a, b, c) {
    // ? check if all three sides are equal length
    if (a === b && b === c)
        return "Equilateral";

    // ? check if two sides are equal length
    if (a === b || b === c || a === c)
        return "Isosceles";

    // ? check if all three sides are different length
    return "Scalene";
}

console.log(checkTriangleType(1, 1, 1)); // output: "Equilateral"
console.log(checkTriangleType(1, 2, 1)); // output: "Isosceles"
console.log(checkTriangleType(1, 2, 3)); // output: "Scalene"

// TODO: the function adhere to the following rules:
// ? If all three sides are equal length then return "Equilateral"
// ? If two sides are equal length then return "Isosceles"
// ? If all three sides are different length then return "Scalene"
