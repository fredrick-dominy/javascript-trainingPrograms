// finish two functions, minimumSum and maximumSum, that take
// two parameters:
//  -values - an array of integers with an arbitrary length
//  -how many integers should be summoned 
  // sum the n smallest integers in the array values (not necessarily ordered)
  // if n is 0 ... should return 0
function minimumSum(values, n) {
    values.sort(function(a,b) {
      return a - b;
    });
    console.log(values); //test for sort
    var addVal = 0;  //placeholder variable for the forloop
    for (var i = 0; i < n; i++) {
      console.log (i, values[i]);
      var addVal = addVal+values[i];
    };
    console.log (addVal);  // test 
    return addVal;
}
// 
//
function maximumSum(values, n) {
    values.sort(function(a,b) {
      return b - a;
    });
    console.log(values); //test for sort
    var addVal = 0;  //placeholder variable for the forloop
    for (var i = 0; i < n; i++) {
      console.log (i, values[i]);
      var addVal = addVal+values[i];
    };
    console.log (addVal);  // test 
    return addVal;
}

var values = [32,16,8,1,4,2,64];
maximumSum(values, 2); // should return 64+32 = 96
minimumSum(values, 2); // should return 1+2 = 3
