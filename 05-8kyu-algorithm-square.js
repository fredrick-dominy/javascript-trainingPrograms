// start with a guess (g)
// if g * g is close enough to x (the number you are trying to find the root)
// then you are good, however if it is not close to the number (x)
// then take gNew = ((gOld + x/gOld)/2)
// repeat if necessary

console.log ('let\'s find the square root of 25... we\'ll start with gOld = 33');
var squareRootOf = 25;  // we want to find the root of 25 by starting with 33 * 33  
var rootG = function (gOld) {
  for (i=0; i < 5; i++) {

    var gOld = (((gOld + (squareRootOf/gOld))/2));
    console.log ('the square of '+ gOld +'is '+ (gOld * gOld));
  }
}
rootG(33);
