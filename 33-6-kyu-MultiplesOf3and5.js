/*
    If we list all the natural numbers below 10 
    that are multiples of 3 or 5, we get 3, 5, 6 and 9.
    The sum of these multiples is 23.
    Finish the solution so that it returns the sum of all 
    the multiples of 3 or 5 BELOW the number passed in.
*/

function solution(number){
  var total = 0;
  for (var i = 0; i < number; i+= 1) {
    if (i%5 == 0 || i%3 == 0) {
      total += i;
    } 
  }
  console.log( 'The function solution(' + number + ') returned ' + total);
  return total;
}

solution(11);  //  3,5,6,9,10, 12  = 45