//Our counter prototype is broken. 
//Can you spot, what's wrong here?
'use strict';
var Counter = function() {
  return this.value = 0;
};

Counter.prototype.increase = function() { // took me a while to
  //figure out that you needed  to add '= function' to each line
  // original line was Counter.prototype.increase() {   ... 
  this.value+=1;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  this.value = 0;
};