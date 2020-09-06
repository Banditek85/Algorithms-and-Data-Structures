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
countUniqueValues([1,1,34,2,3]);


/* Function checks if there are any duplicates in it's arguments */
function areThereDuplicates() {
    var result = {};

    for (var i = 0; i < arguments.length; i++) {
        var current = arguments[i];
        !result[current] ? result[current] = 1 : result[current] += 1; 
    }

    console.log(result);
}

console.log("Are there duplicates:");
areThereDuplicates(1,2,3,4,2,2,2);