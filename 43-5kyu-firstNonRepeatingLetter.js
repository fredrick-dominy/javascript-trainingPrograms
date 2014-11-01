/*
Write a function named firstNonRepeatingCharacter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return the empty string ('').


*/

function firstNonRepeatingLetter(s) {
  // Add your code here
  var stringInput = s;
  var caseSensitiveArray = s.split('');
  var lowercaseInput = s.toLowerCase();
  var stringInputArray = lowercaseInput.split('');
  var stringLength = stringInputArray.length; 
  var letter = '';
  var letterObject = {};
  var count = 0;
  var parseArray = function(array) {
    // console.log(array);
    for (var i = 0; i < array.length; i++) {
        console.log('The letter is a ' + array[i]);
        // if doesn't exist create 1 else add 1
        if (!letterObject[array[i]]){
            console.log('LetterObject does not have a '+ array[i])
           letterObject[array[i]] = 1; 
           console.log('creating letterObject ' + letterObject[array[i]]);
       } else {
            letterObject[array[i]] +=1;
            console.log('adding to ' + array[i]);
       }
    };
    // console.log(letterObject);
    for(var firstNonRepLetters in letterObject) {
        var singlet = letterObject[firstNonRepLetters];
        console.log(' counting down object items ' + singlet);
        if (singlet===1) {
            //TODO --- BROKEN HERE
            // var singlet = letterObject[firstNonRepLetters];
            letter = caseSensitiveArray[count];
            console.log("The first single letter is " + letter);
            return letter;
        }
        count += 1;
    }
  }
  var returnSinglet = function() {

  }
  if (stringLength<2) {
    letter = stringInput;
  } else {
    parseArray(stringInputArray);
  }
}

// firstNonRepeatingLetter('e') //e
// firstNonRepeatingLetter('sTress') //T
// firstNonRepeatingLetter('stress') //t
// firstNonRepeatingLetter('sTresset') //r
firstNonRepeatingLetter('acabcbdefdefghhiijzlmn') //g