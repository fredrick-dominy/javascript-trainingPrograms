//Write a function named numbers that returns true if all the parameters it is passed are numbers. 
//Otherwise, the function should return false. The function should accept any number of parameters.
//create an empty array to put arguments in..
var argumentArray = [];

// function with variable arguments
var numbers = function(){
  // add each argument to the array argumentArray
  for (var i = 0; i < arguments.length; i++) {
    argumentArray = Array.prototype.slice.call(arguments)
    return argumentArray[i];
    }
}

// trying to create a function that tests whether an element is finite..(a number)
var isANumber = function(j){
  return (isFinite(j));
}
// trying to use the new function with .every element in the array
console.log(argumentArray.every(isANumber));

numbers('t');  // test function with multiple arguments
//console.log("these are the arguments passed into the function... "+argumentArray);