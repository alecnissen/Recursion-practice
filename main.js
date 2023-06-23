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


// Write a function called all which accepts an array and a callback and returns true if every value 

// in the array returns true when passed as parameter to the callback function

// Sample:

// var allAreLessThanSeven = all([1,2,9], function(num){
// 	return num < 7;
// });

// // console.log(allAreLessThanSeven); // false

// // loop through the arr 
// // 

// console.log(allAreLessThanSeven); // false

// function all(array, callback) {
// 	var copy = copy || array.slice(); // shallow copies array

// 	if(copy.length === 0) return true;

// 	if(callback(copy[0])){
// 		copy.shift(); // remove first element from array
// 		return all(copy, callback);
// 	} else {
// 		return false;
// 	}
// } 




// #5 

// #2 
// review power function, might be good to start there, 

//  function power(base, exponent) {
// 	if(exponent == 0) return 1;
// 	return base * power(base, exponent - 1);
// }  

// console.log(power(2, 4)); 

// #6 

// Write a function called productOfArray 
// which takes in an array of numbers and returns the product of them all

// Sample:

// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60 

// takes in arr of numbers, sums them all to return a total product, 

// init product var 

// loop thru numbers, multiple the current and add onto the product variable, 

// var six = productOfArray([1,2,3]) // 6
// var sixty = productOfArray([1,2,3,10]) // 60


// function productOfArray(array) {
// 	if(array.length === 0) return 1;

// 	return array.shift() * productOfArray(array);
// } 

// console.log(six, sixty); 

// #6 

// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

// Sample:

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false

// var nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, "foo"); // false
// console.log(hasIt, doesntHaveIt);

// function contains(obj, value){
// 	for(var key in obj){
// 		if(typeof obj[key] === 'object'){
// 			return contains(obj[key], value);
// 		}

// 		if (obj[key] === value){
// 			return true;
// 		}
// 	}
// 	return false;
// } 


// Given a multi-dimensional integer array, 

// return the total number of integers stored inside this array

// Sample:

// var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7 


// sumTo(n) 

// sumTo 

// takes a number 

// adds all the previous numbers together 

// init total var 


// add n to total, and recursively call function, 

// base case! If n == 1 return 1

// function sumTo(n) { 
//     if (n == 1) return 1;
//     return n + sumTo(n - 1);
// } 
// console.log(sumTo(2));
// console.log(sumTo(3));
// console.log(sumTo(4)); 

// factorial 

// function, 

// base case, if it reaches 1 return 1 

// else keep recursing, 

// recurisvely call the function, subtract one from n 

// factorial problem 

function factorial(n) { 
    if (n == 1) { 
        return 1;
    }

    return n * factorial(n - 1); 
} 

console.log(factorial(3));

console.log(factorial(4));

console.log(factorial(5)); 

