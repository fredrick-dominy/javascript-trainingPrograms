/**
 * Created by FMD on 8/24/14.
 * Description:
 * You have an array of integers and have a frog that starts at the first position. Every integer tells you the length of step that you have to make. The length is measured in number of indices.
 * Your objective is to find how many steps the frog needs to make to go out of array.
 * The function should return count of steps or -1 in any other case such as: the frog can't move out of the array.
 */

"use strict";
var frogJump = function(array) {
    var totalJumpDistance = 0,
        count = 1,
        infiniteLoop = false,
        arrayOfJumpedPositions = [],
        arrayDistance = array.length;

    while (infiniteLoop === false) {

        for (var i = 0; i < arrayDistance; i += array[i]) {
            console.log("Count is " + count);
            totalJumpDistance += array[i];
            console.log("total jump distance is " + totalJumpDistance);

            if (totalJumpDistance > arrayDistance) {
                console.log("Function RETURNS with count "+count);
                return count;
            } else if (arrayOfJumpedPositions.length>array.length) {
            // look for infinite loop and return -1 if true
                console.log("This is an infinite loop. RETURN -1");
                return -1;
            }
//            arrayOfJumpedPositions.push(totalJumpDistance);
            arrayOfJumpedPositions.push(array[i]);
            console.log("arrayOfJumpedPositions is " + arrayOfJumpedPositions);
            count += 1;
        }
    }

};

var path1 = [1, 2, 1, 5], // 1 -> 2 -> 5 -> out  steps = 3
    path2 = [1,1,1, -1], // 1 -> -1 -> 1 -> -1 -> steps = -1
    path6 = [3,1,1, -1], // 1 -> -1 -> 1 -> -1 -> steps = -1
    path3 = [1,2,3,-1],  // 4
    path4 = [0],    // -1
    path5 = [2,4,-1,1]; // 3


frogJump(path5);

