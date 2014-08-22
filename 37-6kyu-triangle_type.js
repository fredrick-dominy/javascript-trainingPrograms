/**
 * Created by FMD on 8/20/14.
 */
"use strict";
function triangleType(a, b, c){
    //If A^2 + B^2 = C^2 is satisfied, it is a right triangle.
      //  If A^2 + B^2 > C^2 is satisfied, it an acute triangle.
        //If A^2 + B^2 < C^2 is satisfied, it an obtuse triangle.
    if (a <= 0 || b <= 0 || b <= 0) {
        return 0;
    }

    // reject case where 2 sides don't equal 3rd.
    var findLargestSide = [a, b, c];

    findLargestSide.sort(function(a,b) {
        return a - b;
    });

    console.log(findLargestSide);
    var a = findLargestSide[0],
        b = findLargestSide[1],
        c = findLargestSide[2];

    if ((a + b) <= c) {
        console.log("0");
        return 0;
    }

    var a2 = a * a,
        b2 = b * b,
        c2 = c * c;


    if (a2 + b2 == c2){
        console.log("RIGHT");
        return 2;
    } else if (a2 + b2 > c2) {
        console.log("ACUTE");
        return 1;
    } else if (a2 + b2 < c2) {
        console.log("OBTUSE");
        return 3;
    } else {
        console.log("0");
        return 0;
    }

}

triangleType(7,12,8);
