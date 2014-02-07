/*Write a small function that returns the values of an 
array that are not odd.

All values in the array will be integers. Return the 
good values in the order they are given.*/

'use strict';

function noOdds( values ){
  var n = values.length;
  var evenArray = [];
  for (var i = 0; i < n; i+= 1) {
    if (values[i]%2 === 0) {
      evenArray.push(values[i]);
    }
  }
  return evenArray;
}
console.log(noOdds([73,62,32,42,5,6,72])); // returns [2,4,6]

// different way to do the same....
function no_odds( values ){
  return values.filter(function(val){return val%2===0})
}
console.log(no_odds([2,22,331,234,15,18,39,40]));

// this uses the array.prototype.filter() method...
// Syntax
  //  *** arr.filter(callback[, thisArg]) ***
    // callback = function to test each element of the array
    // thisArg = Value to use as _this_ when executing callback

// filter calls a provided callback function once for each element 
// in an array, and constructs a new array of all the values for 
// which callback returns a true value.

var isBigEnough = function(element) {
  return element >= 10;
}
var filtered = [4,6,8,10,12,15,22,44].filter(isBigEnough);
console.log(filtered); // [ 10, 12, 15, 22, 44 ]


