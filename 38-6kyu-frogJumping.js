/**
 * Created by FMD on 8/24/14.
 * Description:
 * You have an array of integers and have a frog that starts at the first position. Every integer tells you the length of step that you have to make. The length is measured in number of indices.
 * Your objective is to find how many steps the frog needs to make to go out of array.
 * The function should return count of steps or -1 in any other case such as: the frog can't move out of the array.
 */

"use strict";
function solution(a) {
    var totalJumpDistance = 0,
        pathArray = a,
        frogJumps = 0,
        arrayOfJumpedPositions = [],
        arrayDistance = pathArray.length;

    for (var i = 0; i < arrayDistance; i += pathArray[i]) {
        totalJumpDistance += pathArray[i];
            console.log(Math.abs(totalJumpDistance) + "a");
            if ((Math.abs(totalJumpDistance)) >= arrayDistance) {
                frogJumps += 1;
                console.log(frogJumps + "b");
                return frogJumps;
            }

            if (arrayOfJumpedPositions.length > arrayDistance) {
                console.log( -1 + "c");
                return -1;
            }

        frogJumps += 1;
        arrayOfJumpedPositions.push(pathArray[i]);
        }
    console.log( -1 + "d");
    return -1;
}

var path1 = [1, 2 ,2, -1],
    path2 = [1,1,1,1,1, -1], // 1 -> -1 -> 1 -> -1 -> steps = -1
    path6 = [3,1,1, -1], // 1 -> -1 -> 1 -> -1 -> steps = -1
    path3 = [1,2,2,8],  // 3
    path4 = [0],    // -1
    path5 = [-3]; // 1


solution(path6);

