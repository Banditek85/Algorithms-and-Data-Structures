// Start at end/start of the array, check if adjacent element satisfies condition 
// and swap elements accordingly.

function bubble_sort(arr) {
    function swap(arr, i, i_2) {
        var temp = arr[i];
        arr[i] = arr[i_2];
        arr[i_2] = temp;
    }

    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = arr.length - 1; j >= 0; j--) {
            if (arr[j] < arr[j - 1]) swap(arr, j, j - 1);
        }
    }
}

var arr = [3,2,5,7,1,4];
bubble_sort(arr);
console.log(arr);