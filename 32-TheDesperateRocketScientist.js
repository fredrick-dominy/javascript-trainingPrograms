/**
 * Created by Freximus on 6/10/2014.
 */

/*****************
Jim, the rocket scientist has finished the code for the board
 computer of his new Mars rocket. Only one last function is
 missing, the function for creating the countdown. Because Jim
 is always nervous when starting a new rocket, he sometimes
 forgets a number when doing the final countdown from ten to
 zero, so in order to be sure everything will work perfectly
 on the great day, he wrote a JavaScript function that does the
 countdown for him.

  Jim is desperate because the countdown function has already
 been burned into a ROM deep inside the board computer that cannot
 be easily replaced. He has to fix the problem by calling a method
 in the startup code that is still accessible. Can you help poor Jim?

 Here is Jim's countdown code that he is not able to change any more:

 ******************/

var countdown = function() {
  var ret = "";
  var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (var number in numbers) {
    if (ret) ret += ", ";
    if (number < 10)
      number = 10 - number;
    else if (number == 10)
      number = "Zero";
    ret += number;
  }

  ret += "!";
  return ret;

};

var fix_countdown = function() {
  console.log('here is a fix_countdown function...');
  console.log(countdown());
  return countdown();
};

fix_countdown();

