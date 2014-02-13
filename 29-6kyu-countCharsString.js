/*

The main idea is to count all the occuring ASCII
 characters in string. If you have string like this
  aba then the result should be 

  { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should 
be empty object literal { }

1.xxx take the string, split it into an array. a, b, c, etc.
1a. create an empty letter object
2. iterate through the array
  2a. if it is a character not yet encountered: 
      2a.1 create an object with the new letter property with value 1.
  2b. if the letter property exists, add 1 to the value
3. return the object


*/
'use strict';
var count = function(string) {
    // return the empty object with an empty argument
    if (string === undefined) {
      return {};
    }

  var strArray = string.split(''); // array with each character
  var letterCounter = {}; // create empty object
  var n = strArray.length;

  // if there are spaces in the string, remove them.
    for (var i = 0; i < n; i+= 1) {
      if (strArray[i] === ' ') {
        strArray.splice(i,1);
      }
    }

  // initialize each property
  for (var i = 0; i < n; i+= 1) {
    var n = strArray.length;
    letterCounter[strArray[i]]=0;
  }

  // count each property value
  for (var i = 0; i < n; i+= 1) {
    var n = strArray.length;
    letterCounter[strArray[i]]+=1;
  }
  return(letterCounter);
};

// not my function... greatly abstracted
function countA (string) {  
  return string.split('').reduce(function(r,c) {r[c] = (r[c]||0)+1;return r;},{});}