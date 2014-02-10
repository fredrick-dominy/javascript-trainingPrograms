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
/*
function range(start, end, step) {
  var startFrom = start;
  //console.log(startFrom);
  var endAt = end;
  if (endAt === 0) {
    return [];
  }
  if (endAt === undefined) {
    startFrom = 0;
    endAt = start;
  }
  //console.log(endAt);

  var jump = step; // currently undefined
  var rangeArray = [startFrom];
    if (jump === undefined) {
      jump = 1;
    }
    if (jump === 0) {
        for (i = startFrom; i < endAt-1; i+= 1) {
            rangeArray.push(startFrom);
          }
        return rangeArray;
      }
 
    //console.log(jump);
  // count from startFrom to endAt by jump...
  //console.log(rangeArray);
  if (endAt > 0){
    for (var i = startFrom; i < endAt-jump; i+= jump) {
      rangeArray.push(startFrom += jump);
    }
}

  if (endAt < 0) {
    for (var i = startFrom; i > endAt-jump; i+=jump) {
      rangeArray.push(startFrom += jump);
    }
  }
  return rangeArray;
} */
//console.log(range(1,-4, 0));
'use strict';
var range = function(start,end,step) {

// Set initial variables based on parameter input
  if (start === 0 && end === undefined) {return [];}
  var startFrom = (end === undefined) ? 0 : start;
  var endAt = (end === undefined) ? start : end;
  var jump = (step === undefined) ? 1 : Math.abs(step);
  //console.log('The range starts here ...'+startFrom + ' And ends here...' + endAt);
  //console.log('The step is ' + jump);
  var rangeArray = [];

  // Assert that the parameters must be an integer...
  if (startFrom %1 !== 0 || endAt %1 !== 0 || jump %1 !== 0) {
     //return console.log("END: Parameters need to be integers.");
     return [];
  }

// if Positive endAt is < start, return an empty array.
  if (endAt >= 0 && startFrom < endAt) {
    if (startFrom > endAt) {
      //console.log("END: This function cannot count down...");
      return [];
    } else {
      // run the counter ... 
      if (jump !== 0) {
        for (var i = startFrom; i < endAt; i += jump) {
          rangeArray.push(i);
        }
      } else if (jump === 0) {
          for (var i = startFrom; i < endAt; i += 1) {
            rangeArray.push(startFrom);
          }
        }
      //console.log('END: ' + rangeArray);
      return rangeArray;
      }
    }







// if Negative endAt is > than startFrom, return an empty array
  if (endAt <= 0 && startFrom > endAt) {
    if (endAt > startFrom) {
      //console.log ("END: Negative values cannot count back to zero");
      return [];
    } else {
      // run the negative counter
      if (jump !== 0){
        for (var i = startFrom; i > endAt; i -= jump) {
        rangeArray.push(i);
        }
      } else if (jump === 0) {
        for (var i = startFrom; i > endAt; i -= 1) {
          rangeArray.push(startFrom);
        }
      }
      //console.log('END: ' + rangeArray);
      return rangeArray;
    }
  }
};
console.log(range(10, 0));