/**
 * Created by Freximus on 6/15/2014.
 * Step 1: Create a function called encode() to replace all the lowercase vowels
 * in a given string with numbers according to the following pattern:
 *
 *
 * REG EXP for vowels .... /[aeiouAEIOU]/g

 a -> 1

 e -> 2

 i -> 3

 o -> 4

 u -> 5

 For example, encode("hello") would return "h2ll4" There is no need to worry about
 uppercase vowels in this kata.

 Step 2: Now create a function called decode() to turn the numbers back into vowels
 according to the same pattern shown above.

 For example, decode("h3 th2r2") would return "hi there"

 For the sake of simplicity, you can assume that any numbers passed into the function
 will correspond to vowels.
 */

// turn vowels into numbers
function encode(string){

  var encStr = string.split('');
  console.log('"' + string + '"' + ' was changed to ' + encStr);

  for (var i = 0; i < encStr.length; i += 1) {

    if (encStr[i] == 'a') {
      encStr.splice(i, 1, 1);
    }

    if (encStr[i] == 'e') {
      encStr.splice(i, 1, 2);
    }

    if (encStr[i] == 'i') {
      encStr.splice(i, 1, 3);
    }

    if (encStr[i] == 'o') {
      encStr.splice(i, 1, 4);
    }

    if (encStr[i] == 'u') {
      encStr.splice(i, 1, 5);
    }

  }
  console.log('which ended up as ' + encStr);
  var encoded = encStr.join('').toString();
  console.log('Finally after a join and a toString, we have '+encoded);
  return encoded;
}

//turn numbers back into vowels
function decode(string){

  var encStr = string.split('');
  console.log('"' + string + '"' + ' was changed to ' + encStr);

  for (var i = 0; i < encStr.length; i += 1) {

    if (encStr[i] == 1 ) {
      encStr.splice(i, 1, 'a');
    }

    if (encStr[i] == 2 ) {
      encStr.splice(i, 1, 'e');
    }

    if (encStr[i] ==  3 ) {
      encStr.splice(i, 1, 'i');
    }

    if (encStr[i] == 4 ) {
      encStr.splice(i, 1, 'o');
    }

    if (encStr[i] == 5 ) {
      encStr.splice(i, 1, 'u');
    }

  }
  console.log('which ended up as ' + encStr);
  var encoded = encStr.join('').toString();
  console.log('Finally after a join and a toString, we have '+encoded);
  return encoded;

}

encode('Pack my box with five dozen liquor jugs');
decode('P1ck my b4x w3th f3v2 d4z2n l3q54r j5gs');


// This is another person's solution using string.replace().... much better!
// turn vowels into numbers
function newEncode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function newDecode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}