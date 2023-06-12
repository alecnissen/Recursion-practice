// Write a function called sumRange. 

// It will take a number and return the sum of all numbers 

// from 1 up to the number passed in.

// Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6.


// #1
// function sumRange(n) { 
//   if (n == 1) { 
//     return 1;
//   } else { 
//     return n + sumRange(n - 1);
//   }
// } 

// console.log(sumRange(3));

// sum range, 
// will take a number and return the sum of all numbers 
// added together, 
// function, takes in n == number 
// base case if n == 0 return sum? 
// call the function and return the sum of adding the numbers, 
//  


// #2 
// Write a function called power 
// which takes in a base and an exponent. 
// If the exponent is 0, return 1.


// function power(base, exponent) { 
//     if (exponent == 0) { 
//         return 1;
//     } else { 
//         return base * power(base, exponent - 1);
//     }
// }

// console.log(power(2, 4));


// #3 

// Write a function that returns the factorial of a number. 

// As a quick refresher, a factorial of a number 

// is the result of that number multiplied by the number before it, 

// and the number before that number, and so on, 

// until you reach 1. The factorial of 1 is just 1.

// Sample:

// factorial(5); // 5 * 4 * 3 * 2 * 1 === 120

// function factorial(n) { 
//     if (n == 1) { 
//         return 1;
//     } else { 
//     return n * (factorial(n - 1));        
//     }
// } 

// console.log(factorial(5)); 


// #4 


