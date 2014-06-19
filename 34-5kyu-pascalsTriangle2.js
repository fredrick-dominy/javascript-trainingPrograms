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
  var numberOfRows = depth;
  var pascalArr = [];
  var builderArr = [];
  var newArray = [];

  for ( var j = 0; j < numberOfRows; j += 1){
    var workingArray = [];

    if (newArray[0] === 1) {
      var count = builderArr.length + 1;
      for (var i = 0; i < count; i += 1) {
        if (i == 0 || i == count - 1) {
          workingArray.push(newArray[0]);
        } else {
          workingArray.push( (newArray[(i - 1)] + newArray[i]) );
        }
      }
      pascalArr.push(workingArray);
    } else {
      newArray.push(1);
      pascalArr.push(newArray);
    }
    builderArr = workingArray;
    workingArray = newArray;
    console.log(pascalArr);
  }
}

pascal(4);