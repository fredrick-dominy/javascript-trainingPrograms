/**
 * Created by FMD on 9/1/14.
 * Jaden Casing Strings
 *
 * Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word.

 Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

 Example:
    Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
    Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

....from eloquent javascript
 function styleHyphenFormat(propertyName)
 {
   function upperToHyphenLower(match)
   {
     return '-' + match.toLowerCase();
   }
   return propertyName.replace(/[A-Z]/g, upperToHyphenLower);
 }
 */

String.prototype.toJadenCase = function () {
    var rExp = /(\b\w)/g;
    function low2Up(match) {
        return match.toUpperCase();
    }
    return this.replace(rExp, low2Up);
};


console.log(   ("How can mirrors be real if our eyes aren't real").toJadenCase()   );
console.log(   ("Yo what is the deal??").toJadenCase()   );