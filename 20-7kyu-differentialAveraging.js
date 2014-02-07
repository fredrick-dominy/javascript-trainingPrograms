'use strict';
/*write a function that takes the *current* average, 
the current number of ratings (data *points*) made, 
and a new value to *add* to the average. */

var AverageArray = [];
var currentTally = 0;
var runningTotal = 0;
function addToAverage(current, points, add) {
  // 1. push add to an array
  // 2. display the average and print the array
  // why do you need to input 'points'? Can't it automate that?
  // why make a function where you manually have to input the current average?
  // should this just be addToAverage(add) ??  
  // then just output the climbing datapoint and changing average
  AverageArray.push(add);
  points += 1;
  // calculate the average of the array...
  runningTotal += add;
  current = runningTotal/points;
  console.log('The average is now '+current+', with '+points+' data points. Array = ['+AverageArray+']');
}

addToAverage(0, 0, 1);
addToAverage(1, 1, 3);
addToAverage(2,2,5);

