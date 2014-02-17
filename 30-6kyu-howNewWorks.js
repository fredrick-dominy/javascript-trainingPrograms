/*The new operator in JavaScript 

1: First, it creates a new empty object. (Already done for you here.)
2: Next, it sets the new object’s .__proto__ property to match 
the prototype property of the function being invoked.
3: Finally, the operator invokes the function and passes the new 
object as the “this” reference.

Use this understanding of the new operator to create an instance 
of the object MyObject, but do so without calling "new MyObject()".
*/

//*******************************************************
// Implement the functionality of the 'new' operator as if you had the code:
// var myObj = new MyObject();
// but do not use the 'new' operator.
//
// Start with a simple empty Object literal.

'use strict';
var myObj = {};
var MyObject = function(name) {
  this.name = instanceof myObj;
};