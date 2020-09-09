// count unique values with frequency counter pattern
function countUniqueValues_frequency(arr) {
    var result = {};
    for (var i = 0; i < arr.length; i++) {
        var val = arr[i];

        if (result[val]) result[val]++;
        else result[val] = 1;
    }
    console.log(result);
}


// Challenges
/* Write a function called sameFrequency. Given two positive integers, find out if the two numbers
 have the same frequency of digits. Your solution must have the O(N) complexity.
 
 sameFrequency(182,281) true
 */

 function sameFrequency(int1, int2) {
    var str1 = int1.toString();
    var obj1 = {};

    for (let i = 0; i < str1.length; i++) {
        var current = str1[i];

        obj1[current] ? obj1[current] += 1 : obj1[current] = 1;
        // if (obj1[current]) 
        //     obj1[current] += 1;
        //  else 
        //     obj1[current] = 1;
    }

    var str2 = int2.toString();

    for (var i = 0; i < str2.length; i++) {
        var current = str2[i];

        if (!obj1[current]) {
            console.log("false");
            return false;
        }
        else obj1[current] -= 1;
    }

    console.log('true');
    return true;
 }

 sameFrequency(1235, 5132);