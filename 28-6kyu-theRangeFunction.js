/*
Let's implement the range function:
    - range([start], stop, [step]) - 

Notes:
start, if omitted, defaults to 0; step defaults to 1.
   -  defaults are range([0], stop, [1])

Returns a list of integers from start to stop, incremented (or decremented) by step, exclusive.
Note that ranges that stop before they start are considered to be zero-length instead of negative.

*/
function range(start, end, step) {
  var startFrom = start;
  //console.log(startFrom);
  var endAt = end; //11
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
    };
} 

  if (endAt < 0) {
    for (var i = startFrom; i > endAt-jump; i+=jump) {
      rangeArray.push(startFrom += jump)
    };
  }
  return rangeArray;
}

console.log(range(1,-4, 0));