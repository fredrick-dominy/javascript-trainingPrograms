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
  console.log(startFrom);
  var endAt = end; //11
  console.log(endAt);
  var jump = step; // currently undefined
    if (jump === undefined) {
      jump = 1;
    }
    console.log(jump);
  // count from startFrom to endAt by jump...
  var rangeArray = [start];
  console.log(rangeArray);

  for (var i = startFrom; i < endAt-jump
    ; i+= jump) {
    rangeArray.push(startFrom += jump);
  };
  return rangeArray;
}

console.log(range(10,0,1)); // [1,2,3,4,5,6,7,8,9,10]
//console.log(range(0,30,5)); // [0,5,10,15,20,25]