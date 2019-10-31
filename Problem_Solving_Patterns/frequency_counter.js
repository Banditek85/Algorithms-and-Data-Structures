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