//count unique values with multiple pointers pattern
function countUniqueValues(arr) {
    let i = 0;
    let j = 1;

    // Put unique values at the start of the array and return last unique index + 1 at the end.
    while (j < arr.length) {
        if (arr[i] != arr[j]) {
            arr[i + 1] = arr[j];
            i++;
        }
        j++;
    }
    console.log(i + 1);
}

console.log("countUniqueValues");
countUniqueValues([1, 1, 34, 2, 3]);


/* Function checks if there are any duplicates in it's arguments. First we sort arguments, then
we use multiple pointers pattern to check if there are two duplicate values next to each other */
function areThereDuplicates() {
    var result = {};
    var args = Array.from(arguments).sort();

    var first = 0;
    var next = 1;

    while (next < args.length) {
        if (args[first] === args[next]) {
            return true;
        }

        first++;
        next++;
    }

    return false;
}

console.log("Are there duplicates:");
areThereDuplicates(1, 2, 3, 4, 2, 2, 2);


/* Write a function averagePair. Given a sorted array of integers and a target average,
determine if there is a pair of values in the array where the average of the pair equals
the target average. There may be more than one pair that matches the average target. 

averagePair([1,2,3], 2.5) true
averagePair([1,3,3,5,6,7,10,12,19], 8) true

*/

function averagePair(arr, average) {

    if (arr.length == 0) return false;

    var first = 0;
    var last = arr.length - 1;

    while (first != last) {
        console.log("checking first:" + arr[first] + ", last " + arr[last]);

        var current_average = (arr[first] + arr[last]) / 2;
        console.log("current average is: " + current_average);

        if (current_average == average) {
            console.log("true");
            return true;
        } else if (current_average > average) {
            last--;
        } else if (current_average < average) {
            first++;
        }
    }

    console.log("false final");
    return false;
}

averagePair([1, 2, 3], 2.5);

/** Write a function called isSubsequence which takes in two strings and checks whether the characters
 * in the first string form a subsequence of the characters in the second string. In other words,
 * the function should check whether the characters in the first string appear somewhere in the second string, 
 * without their order changing.
 */

// isSubsequence('hello', 'hello world') true
// isSubsequence('sing', 'sting') true

function isSubsequence(str1, str2) {
    if (str1.length == 0 || str2.length == 0) return false;

    let first = 0;
    let second = 0;

    while (true) {
        if (second > str2.length) { return false; }
        if (first > str1.length - 1) { return true };

        if (str1[first] === str2[second]) {
            first++;
            second++;
        } else if (str1[first] != str2[second]) {
            second++;
        }
    }
}

isSubsequence('sing', 'sting');