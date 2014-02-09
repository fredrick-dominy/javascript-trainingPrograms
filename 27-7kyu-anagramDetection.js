/*

An anagram is the result of rearranging the letters of
 a word to produce a new word. (Ref wikipedia). Note: 
 anagrams are case insensitive

Examples: foefet is an anagram of toffee, Buckethead is
 an anagram of DeathCubeK

The challenge is to write the function isAnagram to return
true if the word test is an anagram of the word original and
false otherwise. The function prototype is as given below:

*/

'use strict';
var isAnagram = function(test, original) {
  // pass original into an array and split
    if (test.length !== original.length) { 
      return false;
    } else {
    var oArray = original.toLowerCase().split('').sort();
    var tArray = test.toLowerCase().split('').sort();
    //console.log(oArray);
    //console.log(tArray);
    // pall test into an array and split
    // return original === test
      var n = oArray.length;
      for (var i = 0; i < n; i+= 1) {
          console.log(oArray[i] + '  ' + tArray[i]);
          if (oArray[i] !== tArray[i]) {
            return false;
          }
      };
      return true;
    }
};
//console.log(isAnagram('deRfzaz', 'FREdzay'));


// Cleaned up for submission
'use strict';
var isAnagram = function(test, original) {
    if (test.length !== original.length) { 
      return false;
    } else {
    var oArray = original.toLowerCase().split('').sort();
    var tArray = test.toLowerCase().split('').sort();
      var n = oArray.length;
      for (var i = 0; i < n; i+= 1) {
          if (oArray[i] !== tArray[i]) {
            return false;
          }
      };
      return true;
    }
};
console.log(isAnagram('deRf', 'FREd'));


// Another option ... reduced by a true programmer (not me) 
// it looks like the .join() option is what I was missing... 
var isAnagram = function(test, original) {
  return test.toLowerCase().split('').sort().join() === original.toLowerCase().split('').sort().join();
};