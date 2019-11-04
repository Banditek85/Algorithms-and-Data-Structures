// Recursion with helper function
function collectOddValues(arr) {
    var result = new Array();

    function helper(helperArr) {
        // condition when to finish recursive calls!
        if (helperArr.length === 0) return;
        if (helperArr[0] % 2 != 0) {
            // build up the result array
            result.push(helperArr[0]);
        }
        // functions calls itself with incrementing smaller array.
        helper(helperArr.slice(1));
    }
    helper(arr);
    console.log(result);
    return result;
}

// collectOddValues([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 13, 24]);


// Pure recursive function without helper function
function pure_count_Odd(arr) {
    let newArr = [];

    if (arr.length === 0) 
        return newArr;

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(pure_count_Odd(arr.slice(1)));
    return newArr;
}

console.log(pure_count_Odd([1,2,3,4,5]));