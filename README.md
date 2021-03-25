# Coding Exercise: Greed Kata
These programs were made for Alaska Airline's Internship Coding Exercise

[Color palette for my reference](https://colorhunt.co/palette/272788)

## Instructions
[Greed](http://brendan.enrick.com/file.axd?file=2014%2F1%2Fgreed%20kata.pdf) is a press-your-luck dice rolling game. In the game, the roller will be rolling dice trying to earn as many points as possible. For the purposes of this kata, we will just be scoring a single roll of five dice.

- A single one (100)
- A single five (50)
- Triple ones [1,1,1] (1000)
- Triple twos [2,2,2] (200)
- Triple threes [3,3,3] (300)
- Triple fours [4,4,4] (400)
- Triple fives [5,5,5] (500)
- Triple sixes [6,6,6] (600)

## Questions

## Assumptions Made
1. 

## Possible Paths/Solutions
### Solution 1: Brute Force (C)
- In order to first approach the exercise, I tried using a brute-force method by going through the array of dice rolls with two loops
- After some trial-and-error, I found that it was difficult to keep track of triple cases and accomodate for cases when there would be a quadruple occurrence (my code would add the triple score twice)
- On top of this, the brute-force method was inefficient with a run-time efficiency of O(n^2)
- I decided to scrap this approach and move on to a different one!
### Solution 2: Counting Occurrences (C)
- 
