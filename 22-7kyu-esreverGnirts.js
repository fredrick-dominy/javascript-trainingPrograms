// Create a function called reverse for the String prototype
//  that will allow the following functionality:
'use strict';
String.prototype.reverse = function() {
  return (this.split('').reverse().join(''));
};
console.log('evian'.reverse());
console.log("String".reverse()); // => returns "gnirtS"
console.log("Super awesome string".reverse()); // => returns "gnirts emosewa repuS"
// passed!!