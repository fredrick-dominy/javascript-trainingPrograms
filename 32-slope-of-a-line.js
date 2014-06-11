function getSlope(p1, p2) {
  var rise = p2[1] - p1[1];
  var run = p2[0] - p1[0];
  if (run == 0) {
    return null;
  } else {
    return rise / run;
  }
}

var point1 = [0,0];
var point2 = [0,0];

console.log(getSlope(point1, point2));
