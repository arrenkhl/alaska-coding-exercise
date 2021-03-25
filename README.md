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

## Possible Paths/Solutions
### Solution 1: Brute Force
- In order to first approach the exercise, I tried using a brute-force method by going through the array of dice rolls with two loops
- After some trial-and-error, I found that it was difficult to keep track of triple cases and accomodate for cases when there would be a quadruple occurrence (my code would add the triple score twice)
  - Also, this brute-force method was pretty inefficient with run-time efficiency O(n^2)
- My code wasn't producing the right outputs and the efficiency was poor, so I decided to scrap this approach and move on to a different one!
### Solution 2: Dynamic Programming
- After my brute-force approach didn't work, I tried employing a dynamic programming technique
- I started the brainstorming process on paper, trying to find possible recurrence relations that could be used, such as:
```
F(n) = max{F(n-j) + Sj}, Sj = score for jth roll 1-6
```
- I struggled to find a recurrence relation that would account for the triple cases, and the implementation would most likely be inefficient, as well, so I also scrapped this approach
### Solution 3: Counting Occurrences
- A little bit of thinking later, I realized that the triple cases could easily be accounted for if I just counted the amount of times a number is rolled!
- In order to do this, I used structs for each die face, assigning a value 1-6 and a count integer to count the number of times the die number is rolled
- To count the number of times a die occurs in the array:
```c
for (i = 0; i < N; i++) {
  /*
  This loop traverses the roll array and counts the times a specific die
  number appears. "roll[i]" returns the exact die number, and we subtract
  it by one to get the correct index in the die struct array.
  */
  die[roll[i]-1].count++;
 }
```
- To detect triple cases and add the appropriate amount of points to the score:
```c
for (i = 0; i < 6; i++) {
    /* 
    After detecting die count values >= 3, we need to multiply the die
    value by 100 and add it to the score. If the die value is 1, then
    we multiply by 1000. We subtract the die count value by 3 to account
    for extra 1's and 5's.
    */
    if (die[i].count >= 3) {
        die[i].count -= 3;
        if (die[i].value == 1) {
            score += die[i].value * 1000;
        }
        else {
            score += die[i].value * 100;
        }
    }
}
```
- Finally, to account for any single 1's and 5's:
```c
score += die[0].count * 100; // single one = 100 pts
score += die[4].count * 50;  // single five = 50 pts
```
- This gives a run-time efficiency of O(6), and so I decided to keep this solution and move on to creating an interface

## Questions
1. Is there a way to solve this problem dynamically? Would this be a good idea in the first place?

## Assumptions Made


