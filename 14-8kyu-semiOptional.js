'use strict';
// We have implemented a function wrap(value) that takes
// a value of arbitrary type and wraps it in a new JavaScript
// Object setting the 'value' key on the new Object to the 
// passed-in value

// Prior to attempt...

var wrap = function(value) { // create a function wrap that takes a value ...
  return {'value': value};  // and returns an object property
};

var wrappedObj = wrap("MyWrappedString"); // {}
// and
console.log(wrappedObj.value === "MyWrappedString");