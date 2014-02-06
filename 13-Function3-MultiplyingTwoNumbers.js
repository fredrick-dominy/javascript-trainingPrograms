// This function has to be called multiply and 
// needs to take two numbers as arguments, and
// has to return the multiplication of the two 
// arguments. 
'use strict';
var multiply = function(num1,num2) {
  return num1 * num2;
};

console.log(multiply(32,35)); // 1120
console.log(multiply(0,0)); // 0
console.log(multiply("2", 4)); // 8
console.log(multiply('bob', 2)); // NaN
