// Fix this code. 


/*'use strict';
function mystery() {
  var results =
    {sanity: 'Hello'};
  return
    results;
}*/

console.log(mystery()); // returns undefined 

// rewrite

var mystery = function() { // this is a function mystery that ...
  var results = {sanity: 'Hello'}; // creates a variable object property
  return results;
};