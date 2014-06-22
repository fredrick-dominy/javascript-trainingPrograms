/**
 * Created by Freximus on 6/22/2014.
 */
function swapValues(arr) {
  var temp = arr[0];
  arr[0] = arr[1];
  arr[1] = temp;
  return arr;
}

//
var arr = [6, 3];
swapValues(arr);