// Return true with any plural (add an 's' to the number of object(s)
//  i.e. 1 ball, 2 balls, 0 balls, 0.4 balls....
function plural (n) {
  if (n === 0) {
    return true;
  }
    if (n===-1 || n===1) {
      return false;
  } else {
    return true;
    }
  }
console.log(plural(1)); // false
console.log(plural(2)); // true
console.log(plural(0.5)); // true
console.log(plural(-1));  // false
console.log(plural(4)); // true

// after reviewing other submissions: here are a few that are much better
function plural2 (n) {
  return !!--n;  // had to look this up.. 
}

function plural3(n){
  return (n !== 1);
}
