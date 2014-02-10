/*
Let's implement the range function:
    - range([start], stop, [step]) - 

Notes:
start, if omitted, defaults to 0; step defaults to 1.
   -  defaults are range([0], stop, [1])

Returns a list of integers from start to stop, incremented (or decremented) by step, exclusive.
Note that ranges that stop before they start are considered to be zero-length instead of negative.

*/

'use strict';
var range = function(start,end,step) {

// Set initial variables based on parameter input
  if (start === 0 && end === undefined) {return [];}
  if (end === 0) {return [];}
  var startFrom = (end === undefined) ? 0 : start;
  var endAt = (end === undefined) ? start : end;
  var jump = (step === undefined) ? 1 : Math.abs(step);
  //console.log('The range starts here ...'+startFrom + ' And ends here...' + endAt);
  //console.log('The step is ' + jump);
  var rangeArray = [];

  // Assert that the parameters must be an integer...
  if (startFrom %1 !== 0 || endAt %1 !== 0 || jump %1 !== 0) {
     //console.log("END: Parameters need to be integers.");
     return [];
  }

// if Positive endAt is < start, return an empty array.
    if (startFrom > endAt) {
      //console.log("END: This function cannot count down...");
      return [];
    }

    if (endAt > startFrom && jump !== 0) {
      for (var i = startFrom; i < endAt; i += jump){
        rangeArray.push(i);
        }
        return rangeArray;
      } else if (endAt > startFrom && jump === 0) {
        for (var j = startFrom; j < endAt; j += 1) {
          rangeArray.push(startFrom);
        }
        return rangeArray;
      }
};

console.log(range(5));