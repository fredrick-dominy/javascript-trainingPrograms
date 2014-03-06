'use strict';
function disemvowel(str) {
  var arr = str.split('');
  // console.log(arr);
    for (var i = 0; i < arr.length; i += 1) {
      if (arr[i]=== 'a' ||
          arr[i]=== 'e' ||
          arr[i]=== 'i' ||
          arr[i]=== 'o' ||
          arr[i]=== 'u' ||
          arr[i]=== 'A' ||
          arr[i]=== 'E' ||
          arr[i]=== 'I' ||
          arr[i]=== 'O' ||
          arr[i]=== 'U') {
        arr.splice(i,1);
        i -= 1;  // took some thinking and testing to figure this out...
      console.log(arr);

      }
    str = arr.join('');
    }
    console.log(str);
  return str;
}
disemvowel("blooady heall beeatch");
