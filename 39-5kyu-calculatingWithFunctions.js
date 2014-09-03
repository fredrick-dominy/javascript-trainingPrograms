/**
 * Created by FMD on 8/31/14.
 * This time we want to write calculations using functions and get the results. Let's have a look at some examples:
 *
 * seven(times(five())); // must return 35
 * four(plus(nine())); // must return 13
 * eight(minus(three())); // must return 5
 * six(dividedBy(two())); // must return 3
 *
 * Requirements:
 *
 * There must be a function for each number from 0 ("zero") to 9 ("nine")
 * There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
 * Each calculation consist of exactly one operation and two numbers
 * The most outer function represents the left operand, the most inner function represents the right operand
 *
 *

// from eloquent javascript ...

    function multiplier(factor) {
        return function(number) {
        return number * factor;
        };
    }

     var twice = multiplier(2);
     console.log(twice(5));
     // → 10

*/

 function zero(a) {

}
function one(a) {

}
function two(a) {}
function three(a) {}
function four(a) {}
function five(a) {}
function six(a) {}
function seven(a) {
    var seven = 7;
    return function(number){

    };
}
function eight(a) {}
function nine(a) {}

function plus(addend) {}
function minus(addend) {}
function times(factor) {}
function dividedBy(factor) {}

seven(times(five())); // 35