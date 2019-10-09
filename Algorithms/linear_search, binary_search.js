// Linear search (Unordered arrays)
function linear_search(arr, search_term) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search_term) return i;
    }
    return -1;
}

let result = linear_search([1,2,3], 3);
let result2 = linear_search([1,2,3], 5);
console.log(result, result2);



// Binary Search (Order arrays)
function binary_search(arr, search_term) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end)/2);

    while (arr[middle] != search_term && start <= end) {
        if (search_term < arr[middle]) 
            end = middle - 1;
        else 
            start = middle + 1;

        middle = Math.floor((start + end)/2);
    }
    return arr[middle] === search_term ? middle : -1;   
}

binary_search([1,2,3,4,5,6,7,8,23,65], 999);

