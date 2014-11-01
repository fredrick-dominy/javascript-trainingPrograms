 
/*
Zonk is addictive dice game. In each round player rolls 6 dice. Then (s)he composes combinations from them. Each combination gives certain points.

Then player can take one or more dice combinations to his hand and re-roll remaining dice or save his score. Dice in player's hand won't be took into account in subsequent rolls.

If no combinations can be composed - situation is called "zonk". Player thrown zonk loses all points in this round and next player moves. So it's player decision when to reroll and when to stop and save his score.

Your task is simple - just evaluate current roll and return maximum number of points can be scored from it. If no combinations can be made - function must return string "Zonk" (without quotes).

There are different variations of Zonk. In this kata, we will use most common table of combinations:

Combination                     Example roll            Points
Straight (1,2,3,4,5 and 6)      6 3 1 2 5 4             1000 points
Three pairs of any dice         2 2 4 4 1 1             750 points
Three of 1                      1 4 1 1                 1000 points
Three of 2                      2 3 4 2                 200 points
Three of 3                      3 4 3 6 3 2             300 points
Three of 4                      4 4 4                   400 points
Three of 5                      2 5 5 5 4               500 points
Three of 6                      6 6 2 6                 600 points
Four of a kind                  1 1 1 1 4 6             2 × Three-of-a-kind score (in example, 2000 pts)
Five of a kind                  5 5 5 4 5 5             3 × Three-of-a-kind score (in example, 1500 pts)
Six of a kind                   4 4 4 4 4 4             4 × Three-of-a-kind score (in example, 1600 pts)
Every 1                         4 3 1 2 2               100 points
Every 5                         5 2 6                   50 points

Each die cannot be used in multiple combinations the same time, so three pairs of 2, 3 and 5 will worth you only 750 points (for three pairs), not 850 (for three pairs and two fives). But you can select multiple combinations, 2 2 2 1 6 will worth you 300 points (200 for three-of-kind '2' plus 100 for single '1' die)

Of course, in real Zonk game it's sometimes not worth to collect all combination from roll. Taking less dice and rerolling more remaining may be better, but task is just to calculate maximum possible score from current single roll.

*/

function getScore(dice){
    // check for nonsensical input
    if (Array.isArray(dice) === false) {
        console.log("No dice compadre, the parameter is not an array");
        return "Zonk";
    }
    // if an array is input...
    var diceRoll = dice,
        numberOfRolls = diceRoll.length,
        score = 0,
        numberOfPairs=0,
        multiplier=100,

        rollObject = {
            rolls: {
                one:0,
                two:0,
                three:0,
                four:0,
                five:0,
                six:0,
            },
            init: function() {
                if (numberOfRolls < 1) {
                    console.log("Dice roll was invalid due to number of rolls being " + numberOfRolls);
                } else {
                    rollObject.categorizeRolls();
                    rollObject.scoreTrips();
                    rollObject.scorePairs();
                    rollObject.scoreSingles();
                    rollObject.seriesScore();
                }   
            },
            categorizeRolls: function() {
                for (var i = numberOfRolls-1; i >= 0; i--) {
                    if(diceRoll[i]==1){
                        rollObject.rolls.one++;
                    } else if (diceRoll[i]==2) {
                        rollObject.rolls.two++;
                    } else if(diceRoll[i]==3){
                        rollObject.rolls.three++;
                    } else if (diceRoll[i]==4) {
                        rollObject.rolls.four++;
                    } else if(diceRoll[i]==5){
                        rollObject.rolls.five++;
                    } else if (diceRoll[i]==6){
                        rollObject.rolls.six++;
                    }
                }
                console.log(rollObject.rolls);
            },
            scoreTrips: function() {
                // three of a kind with odd multiplier for one
                var cardNum = 1;
                for(var trips in rollObject.rolls) {
                    var triplet = rollObject.rolls[trips];
                    if (triplet >=3) {
                        if (cardNum==1){
                            multiplier = 1000;
                        } else {
                            multiplier = 100;
                        }
                        score += (cardNum*multiplier)*(triplet-2);
                        console.log("A triplet was found, card " + trips);
                        rollObject.rolls[trips] = 0;
                    }
                    cardNum+=1;
                } 
            },
            scorePairs: function() {
                // iterate through rolls object and count any that === 2
                for(var pairs in rollObject.rolls) {
                    if (rollObject.rolls[pairs] === 2) {
                        numberOfPairs += 1;
                    }
                }
                // now add up the number of pairs
                if (numberOfPairs===3) {
                    for(var pairs in rollObject.rolls) {
                        if (rollObject.rolls[pairs] ===2) {
                            score += 250;
                            console.log("A pair was found, card " + pairs);
                            rollObject.rolls[pairs] = 0;
                        }
                    } 
                }
            },
            scoreSingles: function() {
                // handle Ones
                if (rollObject.rolls.one <= 2 && rollObject.rolls.one > 0) {
                    score += 100*rollObject.rolls.one;
                    console.log("The one is in play for "+100*rollObject.rolls.one+" points.")
                    rollObject.rolls.one -= rollObject.rolls.one;
                }
                // handle fives
                if (rollObject.rolls.five >= 1) {
                    score += rollObject.rolls.five*50;
                    console.log("The five is in play for 50 points");
                    rollObject.rolls.five -= rollObject.rolls.five;
                }
            },
            seriesScore: function() {
                console.log(rollObject.rolls);
                if (score===0) {
                    console.log("Zonk");
                    return "Zonk";
                } else {
                    console.log(score);
                    return score;
                }
            }
        };
    
        rollObject.init();
};
// Examples
// getScore();
getScore([1]); // invalid, empty array
// getScore([1,2,3,6]); // returns 100 = points from one 1
// getScore([3,4,1,1,5]); // returns 250 = points from two 1 and one 5
// getScore([2,3,2,3,3,2]); // returns 500 = three of 2 + three of 3
// getScore([3,3,1,5,3,5]); // returns 500
// getScore([1,5,5,5,5]); //  returns 1100 = five 4 + one one
// getScore([2,3,4,3,6,6]); // returns "Zonk" = no combinations here
// getScore([2,2,6,6,2,2]); // returns 400 = four 2, this cannot be scored as three pairs
// getScore([1,3,4,3,4,1]); // returns 750 = three pairs
// getScore([3,3,3,3]); // returns 600 = four of 3
// getScore([1,2,3,4,5]); // returns 150 = it's not straight 
// getScore("Bob");
// getScore(1);
// getScore(true);
// getScore(NaN);
// getScore(["yes"]);