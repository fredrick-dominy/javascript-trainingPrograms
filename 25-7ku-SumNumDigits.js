// Write a function named sumDigits which takes a number as
// input and returns the sum of the absolute value of each
// of the numbers's decimal digits. For example: 

// sumDigits(10); // will return 1
// sumDigits(99); // will return 18
// sumDigits(-32); // will return 5

// Let's assume that all numbers in the input will be integer
// values. 

'use strict';

var sumDigits = function(n) {
  // make the number a string
  var stringify = n;
    if (stringify<0){
      stringify = stringify*-1;
      console.log(stringify);
    }
  stringify = stringify.toString();

  console.log(stringify); // should print string number
  console.log(typeof stringify); // string
  // split the string
  var stringifiedArray = []; // empty array for split
  stringifiedArray = stringify.split(''); // splits 
  console.log(stringifiedArray); // ['1','1']
  // add numbers
  var stringifiedSummation = 0;
  var m = stringifiedArray.length;
  for (var i = 0; i < m; i+= 1) {
    stringifiedSummation += parseInt(stringifiedArray[i]);
  }
  return stringifiedSummation;
  // return result
  // 
};


// cleaned up...
'use strict';
var sumDigits = function(n) {
  var stringify = n;
    if (stringify<0){
      stringify = stringify*-1;
    }
  var stringify = stringify.toString();
  var stringifiedArray = [];
  var stringifiedArray = stringify.split('');
  var stringifiedSummation = 0;
  var m = stringifiedArray.length;
    for (var i = 0; i < m; i+= 1) {
      stringifiedSummation += parseInt(stringifiedArray[i]);
    }
  return stringifiedSummation;
};

// one line submission by a pro 
function sumDigits(number) {
  return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
}
// Math.abs ***

// I don't know what's going on with .reduce(function(a,b){return +a + +b}, 0)
// will research later...

// similar example
function sumDigits(number) {
  return (Math.abs(number) + '').split('').reduce(function(a, b){
    return +a + +b;
  }, 0);
}
