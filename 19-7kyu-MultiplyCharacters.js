// Here we have a function that help[s] us spam our 
// hearty laughter. But it is not working! I need
// you to find out why...
'use strict';
function spam(number){
  //TODO: Not returning the expected value.
  return "hue" * number;
}

console.log(spam(1)); // hue - get NaN
console.log(spam(6)); // huehuehuehuehuehue  - get NaN

var spam = function(number) {
  // sounds like a job for a for loop
  var canOfSpam = '';
  for (var i = 0; i < number; i+= 1) {
    canOfSpam += "hue";
  }
  return canOfSpam;
};

console.log(spam(1)); // hue
console.log(spam(6)); // huehuehuehuehuehue

// PASSED