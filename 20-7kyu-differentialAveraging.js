'use strict';
/*write a function that takes the *current* average, 
the current number of ratings (data *points*) made, 
and a new value to *add* to the average. */

var AverageArray = [];
var currentTally = 0;
var runningTotal = 0;
function addToAverage(current, points, add) {
  AverageArray.push(add);
  points += 1;
  runningTotal += add;
  current = runningTotal/points;
  //console.log('The average is now '+current+', with '+points+' data points. Array = ['+AverageArray+']');
}

addToAverage(0, 0, 1);
addToAverage(1, 1, 3);
addToAverage(2,2,5);

