/**
 * Created by Freximus on 6/22/2014.
 * You'll implement once, a function that takes another function
 * as an argument, and returns a new version of that function
 * that can only be called once.
 * Subsequent calls to the resulting function should have no effect
 * (and should return undefined).
 *
 * For example:
 *
 * logOnce = once(console.log)
 * logOnce("foo") // -> "foo"
 * logOnce("bar") // -> no effect
 *
 */
var count = 0;
function once(fn) {
  if (count == 0) {
    count += 1;
    return fn;
  } else {
    console.log('Undefined');
    return undefined;
  }

}

function heyThere(){
  console.log('Hi there')
}

once(heyThere());
once(heyThere());
once(heyThere());