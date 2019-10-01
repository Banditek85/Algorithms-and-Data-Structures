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

    
}