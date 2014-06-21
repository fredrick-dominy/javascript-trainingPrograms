/* Here you will create the classic pascal's triangle.
Your function will be passed the depth of the triangle
and you code has to return the corresponding pascal
triangle upto that depth

The triangle should be returned as a nested array, for example:
pascal(5) // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

 To build the triangle, start with a single 1 at the top, for each
 number in the next row you just take the two numbers above it and
 add them together (except for the edges, which are all "1").

 */

function pascal(depth) {
  var count = 0;
  var pascArray = [];
  for (var i = 0; i < depth; i += 1) {
    var array = [];
    if (count == 0) {
      array.push(1);
      pascArray.push(array);
    } else if (count == 1) {
      array.push(1,1);
      pascArray.push(array);
    } else if (count > 1) {
      totalArrayItems = count;
      array.push(1);
      var tempArr = pascArray[count-1];
      for (j = 1; j < totalArrayItems; j+=1) {
        var tempArrCombo = tempArr[j] + tempArr[j-1];
        array.push(tempArrCombo);
      }
      array.push(1);

      pascArray.push(array);
    }
    count++;
  }
return(pascArray);
}

console.log(pascal(12));