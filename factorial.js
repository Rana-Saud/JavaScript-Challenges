
// * ---------------------------------------------
// * Interview Question
// * ---------------------------------------------

// ? write a fumction that takes a non negative integer number as input and returns the factorial of that number. The factorial of a non negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 * 4 * 3 * 2 * 1 = 120.

function factorial(n) {
    // ! Solution 1: using recursion

    if(n == 0 || n == 1) return 1;

    return n * factorial(n - 1);

    // ! Solution 2: using for loop
    // ? check n is negative or not
    // let fact = 1;

    // ? calculate the factorial of n
    // for (let i = 1; i <= n; i++) {
    //     fact *= i;
    // }

    // return fact;
}


console.log(factorial(0)); // output: 1
console.log(factorial(5)); // Output: 120