// Create an array with the song 99 bottles of beer on the wall, 99 bottles of beer.',
var sing = function(){
var beerSong = [];
  for (var i = 99; i > 0; i--) {
    if (i > 2) { 
      var subThreeBeer = beerSong.push(i+' bottles of beer on the wall, '+i+' bottles of beer.', 'Take one down and pass it around, ' +(i-1)+' bottles of beer on the wall.');
    }
    if (i === 2){
      var subTwoBeer = beerSong.push('2 bottles of beer on the wall, 2 bottles of beer.','Take one down and pass it around, 1 bottle of beer on the wall.')
    }
    if (i === 1){
      var subOneBeer = beerSong.push('1 bottle of beer on the wall, 1 bottle of beer.', 'Take one down and pass it around, no more bottles of beer on the wall.','No more bottles of beer on the wall, no more bottles of beer.','Go to the store and buy some more, 99 bottles of beer on the wall.')
    }
  }
return beerSong;
}
console.log(sing());