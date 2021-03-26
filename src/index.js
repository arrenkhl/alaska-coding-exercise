/*
--------------------------------------------------------------
Arren Leung
March 25th, 2021

This is Arren Leung's JavaScript implementation of Greed Kata!
--------------------------------------------------------------
*/

var dice = [];

for (let i = 0; i < 6; i++) {
    // initializing the dice array with die objects 1-6
    let die = {
        value: i + 1,
        count: 0
    }
    dice.push(die);
}

var roll = [];
var highScore = 0;

function rollDice()
{
    document.getElementById("score-calculator").innerHTML = ""; // reset score calculator text
    var score = 0;
    var scoreFlag = 0;

    // generate five dice rolls randomly
    for (let i = 0; i < 5; i++) {
        /*
        For each roll, this loop will generate a random number 1-6 and update
        the picture and number correponding to each die.
        */
        roll[i] = Math.floor(Math.random() * 6) + 1;
        document.getElementById("die"+i).src = "assets/die" + roll[i] + ".png";
        document.getElementById("p"+i).innerHTML = roll[i];
    }

    // counts number of die occurences in roll array
    for (let i = 0; i < 5; i++) {
        /*
        This loop traverses the roll array and counts the times a specific die
        number appears. "roll[i]" returns the exact die number, and we subtract
        it by one to get the correct index in the die struct array.
        */
        dice[roll[i] - 1].count++;
    }
    
    // triple cases
    for (let i = 0; i < 6; i++) {
        /* 
        After detecting die count values >= 3, we need to multiply the die
        value by 100 and add it to the score. If the die value is 1, then
        we multiply by 1000. We subtract the die count value by 3 to account
        for extra 1's and 5's.
        */
        if (dice[i].count >= 3) {
            dice[i].count -= 3;
            if (dice[i].value == 1) {
                score += dice[i].value * 1000;
            }
            else {
                score += dice[i].value * 100;
            }
            document.getElementById("score-calculator").innerHTML = score;
            scoreFlag++; // flag to indicate score calculated
        }
    }

    // single 1's (100pts)
    while (dice[0].count > 0) {
        score += 100;
        // add "+" with score if score was calculated, else only add score
        if (scoreFlag > 0) {
            document.getElementById("score-calculator").innerHTML += " + 100";
        }
        else {
            document.getElementById("score-calculator").innerHTML += "100";
            scoreFlag++; // flag to indicate score calculated
        }
        dice[0].count--;
    }

    // single 5's (50pts)
    while (dice[4].count > 0) {
        score += 50;
        // add "+" with score if score was calculated, else only add score
        if (scoreFlag > 0) {
            document.getElementById("score-calculator").innerHTML += " + 50";
        }
        else {
            document.getElementById("score-calculator").innerHTML += "50";
            scoreFlag++; // flag to indicate score calculated
        }
        dice[4].count--;
    }

    // if score was calculated, add "="
    if (scoreFlag > 0) {
        document.getElementById("score-calculator").innerHTML += " =";
    }

    // updates the score on webpage
    document.getElementById("score-value").innerHTML = score; 

    // updates the high score when applicable
    if (score > highScore) {
        highScore = score;
        document.getElementById("highscore-value").innerHTML = highScore;
    }

    // reset die counts for the next roll
    for (let i = 0; i < 6; i++) {
        dice[i].count = 0;
    }
}


