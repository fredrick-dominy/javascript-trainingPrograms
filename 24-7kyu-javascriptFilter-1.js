/*While developing a website, you detect that some of the members
have troubles logging in. Searching through the code you find
that all logins ending with a "_" make problems. So you want
to write a function that takes an array of pairs of login-names
and e-mails, and outputs an array of all login-name, 
e-mails-pairs from the login-names that end with "_".

If you have the input-array:
[ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]

it should output
[ [ "bar_", "bar@bar.com" ] ]

You have to use the filter-method of Javascript, which returns
each element of the array for which the filter-method returns true.*/

'use strict';



function searchNames( logins ){
  //return logins.filter(function(val){return val.indexOf('_')!= false})}

  //return logins.filter(function(args){args.indexOf('_')});
  return logins.filter(function(x) { if(x.indexOf('f')=== true) { return x }})
}


var testSearch01 = searchNames([ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]);
console.log(testSearch01);

// code brought in from msdn reference...
/*function IsC(value) {SB
    var firstChar = value.substr(0, 3);
    if (firstChar.toLowerCase() == "css")
        return true;
    else
        return false;
    }*/