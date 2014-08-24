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
function once(fn) {
  var count = 0;
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

for(var i = 0; i < 300; i+=1){
    names = ["exam", "essay", "quiz"];
    for(var j = 0; j < names.length; j += 1 ){
        db.scores.insert( {"student":i, "type":names[j], "score":Math.round( Math.random()*100) } );
    }
};