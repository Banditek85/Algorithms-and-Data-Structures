// merging two sorted arrays into one big sorted array
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;

    // Compare elements in each array and push smaller one into result array
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }
    }

    // push the remaining values in result array
   while(i < arr1.length) {
       result.push(arr1[i]);
       i++;
   }

   while (j < arr2.length) {
       result.push(arr2[j]);
       j++;
   }
 
    return result;
}

// Recursively split up array into arrays with one element and merge them back together in sorted order
// with above function
function merge_sort(arr) {
    if (arr.length <= 1 ) return arr;
    
    let middle = Math.floor(arr.length / 2);
    let left = merge_sort(arr.slice(0, middle));
    let right = merge_sort(arr.slice(middle));
    return merge(left, right);
}

merge_sort([1,5,2,4,9,7,23,57,8]);