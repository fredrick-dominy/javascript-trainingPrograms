 
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
    var diceRoll = dice,
        numberOfRolls = diceRoll.length,
        score = 0,

        rollObject = {
            rolls: {
                one:0,
                two:0,
                three:0,
                four:0,
                five:0,
                six:0,
            },

            categorizeRolls: function() {
                console.log("We have a good roll");
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
            },

            scoreSingles: function() {
                // handle Ones
                if (rollObject.rolls.one <= 2) {
                    score += 100*rollObject.rolls.one;
                } else {
                    score += 1000*(rollObject.rolls.one-2);
                }

                // handle fives
                if (rollObject.rolls.five === 1) {
                    score += 50;
                } else if (rollObject.rolls.five >= 3) {
                    score += (rollObject.rolls.five-2)*500;
                }
            }
        };

    if (!diceRoll || numberOfRolls < 1) {
        console.log("Nothing input, dice roll was invalid");
    } else {
        rollObject.categorizeRolls();
        console.log(rollObject.rolls);
        rollObject.scoreSingles();
        console.log(score);
    } 
        
}
// Examples
//getScore([]);
// getScore([1,2,3,6]); // returns 100 = points from one 1
// getScore([3,4,1,1,5]); // returns 250 = points from two 1 and one 5
//getScore([2,3,2,3,3,2]); // returns 500 = three of 2 + three of 3
getScore([1,1,1,1,1,5]); // returns 3050 = five 1 + one 5
getScore([1,1,5,5,5,5]);
// getScore([2,3,4,3,6,6]); // returns "Zonk" = no combinations here
// getScore([2,2,6,6,2,2]); // returns 400 = four 2, this cannot be scored as three pairs
// getScore([1,3,4,3,4,1]); // returns 750 = three pairs
// getScore([3,3,3,3]); // returns 600 = four of 3
// getScore([1,2,3,4,5]); // returns 150 = it's not straight 