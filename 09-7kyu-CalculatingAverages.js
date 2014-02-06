'use strict';
var Calculator = {
  average: function() {
    var i = 0;
    var n = arguments.length;
    var total = 0;
    if (n !== 0) {
        for (i=0;i<n;i+=1){
          total += arguments[i];
        }
        return total/n;
    } else {
      return 0;
    }
  }
};