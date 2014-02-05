/*Write a function that accepts two arguments 
and returns the remainder after dividing the larger number by the smaller number. 
Division by zero should return NaN. 
Arguments will both be integers.*/

function remainder(a, b){
  // Divide the larger argument by the smaller argument and return the remainder
  if (a>b) {
    return a%b;
  } else {
    return b%a;
  }
}
console.log(remainder(2,5));