/*

The main idea is to count all the occuring ASCII
 characters in string. If you have string like this
  aba then the result should be 

  { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should 
be empty object literal { }

*/
'use strict';
var count = function(string) {
  var stringObj = {
      input: string
    }
    console.log(stringObj.input);
  }
  
count('whooziwhatsit');