// Start at start/end of the array and compare every element after it storing the index
// of the smallest value. If value at starting index is not the smallest value, swap elements at the end.
// Differenct between selection sort and bubble sort is less swapping.

function selection_sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var min_index = i;

        for (var j = i + 1; j < arr.length; j++) {
            console.log(i, j);
            if (arr[j] < arr[min_index]) min_index = j;
        }

        if (arr[i] != arr[min_index]) {
            var temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index] = temp;
        }
    }
    console.log(arr);
}

selection_sort([3, 4, 6, 8, 2, 1, 34, 21, 11]);