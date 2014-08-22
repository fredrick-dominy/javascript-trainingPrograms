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
var once = function(fn) {

  var count = {
    executed: false
  }

  if (count.executed == false) {
    count.executed = true;
    return fn;
  } else {
    console.log('Not gonna happen');
    return undefined;
  }

};


function heyThere(){
  console.log('Hi there')
}

once(heyThere());
once(heyThere());
once(heyThere());