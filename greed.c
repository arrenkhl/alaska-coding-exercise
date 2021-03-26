/*
------------------------------------------------------
Arren Leung
March 24th, 2021

This is Arren Leung's C implementation of Greed Kata!

Please feel free to follow this usage:
    $ gcc greed.c -o greed
    $ ./greed
------------------------------------------------------
*/

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define N 6 // number of rolls = 5

struct dice {
    int value; // die's value (1-6)
    int count; // count number of times die number is rolled
};

struct dice die[6]; // initialize die struct array

int main() 
{
    int roll[N];
    int score = 0;
    int i;

    // assigning values to die faces (1-6)
    for (i = 0; i < 6; i++) {
        die[i].value = i + 1;
    }

    time_t t;
    srand((unsigned)time(&t));

    // generate five dice rolls randomly and print
    for (i = 0; i < N; i++) {
        roll[i] = (rand() % 5) + 1;
        printf("%d ", roll[i]);
    }
    printf("\n");

    // counts number of die occurrences in roll array
    for (i = 0; i < N; i++) {
        /*
        This loop traverses the roll array and counts the times a specific die
        number appears. "roll[i]" returns the exact die number, and we subtract
        it by one to get the correct index in the die struct array.
        */
        die[roll[i] - 1].count++;
    }

    // triple cases 
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

    // account for single 1's (100pts) and 5's (50pts)
    score += die[0].count * 100;
    score += die[4].count * 50; 

    printf("Final score: %d points\n", score);

    return 0;
}