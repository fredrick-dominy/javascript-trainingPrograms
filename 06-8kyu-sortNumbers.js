// Finish the solution so that it sorts the passed in array of numbers.
//If the function passes in an empty array or null/nil value then it should return an empty array. 

function solution(nums){ // pass in the array
  //console.log (nums);
  var numsArray = [];
  var newArray = numsArray.concat(nums);
    newArray.sort(function(a,b) {
    return a - b;
    });
    if (newArray[0] === null || newArray[0] === undefined){   // this is probably not the best way
      newArray.splice(0,1);      // to do this, but instructions are instructions.
    }
  }


// Okay here are some solutions... 

function solution(nums){
  return (nums || []).sort(function(a, b){
    return a - b    
  });
}
