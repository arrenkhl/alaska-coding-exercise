/*
Arren Leung
March 24th, 2021

This is Arren Leung's C implementation of Greed Kata!

Please feel free to run this code as follows:
$ gcc greed.c -o greed
$ ./greed
*/

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define N 5

struct dice {
    int value;
    int count;
};

struct dice die[6];

int main() 
{
    int roll[N];
    int score = 0;
    int i;

    // assigning values to dice
    for (i = 0; i < 6; i++) {
        die[i].value = i + 1;
    }

    time_t t;
    srand((unsigned)time(&t));

    // generate five dice rolls randomly
    for (i = 0; i < N; i++) {
        roll[i] = (rand() % 5) + 1;
        printf("%d ", roll[i]);
    }
    printf("\n");

    // counts number of dice occurrences
    for (i = 0; i < N; i++) {
        // roll[i] - 1 gives the index to the die struct that must be increased
        die[roll[i] - 1].count++;
    }

    // triple cases 
    for (i = 0; i < 6; i++) {
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

    score += die[0].count * 100; // single one = 100 pts
    score += die[4].count * 50;  // single five = 50 pts

    printf("Final score: %d points\n", score);

    return 0;
}