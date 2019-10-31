//count unique values with multiple pointers pattern
function countUniqueValues(arr) {
    let i = 0;
    let j = 1;

    while (j < arr.length) {
        if (arr[i] != arr[j]) {
            arr[i + 1] = arr[j];
            i++;
        }
        j++;
    }

    console.log(i + 1);
}

countUniqueValues([]);