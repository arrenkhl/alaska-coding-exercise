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
var player = [0,0];
var turn = 1;
var byId = function(id) { return document.getElementById(id); };
byId("player0").style.color = "#e3e6eb";

function rollDice()
{
    turn = 1 - turn;
    var scoreFlag = 0;
    var score = 0;
    byId("score-calculator").innerHTML = ""; // reset score calculator text
    
    // change color depending on player turn
    byId("player" + (1-turn)).style.color = "#e3e6eb";
    byId("player" + turn).style.color = "#54585c";

    // generate five dice rolls randomly
    for (let i = 0; i < 5; i++) {
        /*
        For each roll, this loop will generate a random number 1-6 and update
        the picture and number correponding to each die.
        */
        roll[i] = Math.floor(Math.random() * 6) + 1;
        byId("die"+i).src = "assets/die" + roll[i] + ".png";
        byId("p"+i).innerHTML = roll[i];
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
                player[turn] += dice[i].value * 1000;
                score += dice[i].value * 1000;
            }
            else {
                player[turn] += dice[i].value * 100;
                score += dice[i].value * 100;
            }
            // add triple score to the score calculation text
            byId("score-calculator").innerHTML = score;
            scoreFlag++; // flag to indicate score calculated
        }
    }

    // single 1's (100pts)
    while (dice[0].count > 0) {
        player[turn] += 100;
        score += 100;
        // add "+" if score was calculated, else only add score
        if (scoreFlag > 0) {
            byId("score-calculator").innerHTML += " + 100";
        }
        else {
            byId("score-calculator").innerHTML += "100";
            scoreFlag++; // flag to indicate score calculated
        }
        dice[0].count--;
    }

    // single 5's (50pts)
    while (dice[4].count > 0) {
        player[turn] += 50;
        score += 50;
        // add "+" if score was calculated, else only add score
        if (scoreFlag > 0) {
            byId("score-calculator").innerHTML += " + 50";
        }
        else {
            byId("score-calculator").innerHTML += "50";
            scoreFlag++; // flag to indicate score calculated
        }
        dice[4].count--;
    }

    // if score was calculated, add "="
    if (scoreFlag > 0) {
        byId("score-calculator").innerHTML += " =";
    }

    // updates the score on webpage
    byId("score-value").innerHTML = score; 

    $('.player'+turn+'-blink').fadeOut(200); // blinks when adding to score
    $('.player'+turn+'-blink').fadeIn(200);
    byId("player"+turn+"-value").innerHTML = player[turn]; // update player's total score

    // win condition
    if (player[turn] >= 1000)
    {
        // hide roll button and score text
        byId("score").style.display = "none";
        byId("roll-button").style.display = "none";
        
        // display winner and play again button
        byId("win-display").style.display = "block";
        byId("player-win").innerHTML = "player " + (turn+1) + " wins!";
        byId("player" + (1-turn)).style.color = "#54585c";
    }

    // reset die counts for the next roll
    for (let i = 0; i < 6; i++) {
        dice[i].count = 0;
    }
}

function playAgain()
{
    // reset images, text, and scores for new game
    byId("player0-value").innerHTML = 0;
    byId("player1-value").innerHTML = 0;
    byId("score-value").innerHTML = 0;
    byId("score-calculator").innerHTML = "";
    byId("player-win").innerHTML = "";
    byId("score").style.display = "block";
    byId("roll-button").style.display = "block";
    byId("win-display").style.display = "none";

    player[0] = 0;
    player[1] = 0;
    byId("player" + (1-turn)).style.color = "#e3e6eb";
    byId("player" + turn).style.color = "#54585c";

    for (let i = 0; i < 5; i++) {
        byId("die"+i).src = "assets/die0.png";
        byId("p"+i).innerHTML = 0;
    }
}
