// Sliding window pattern involves creating a window which can either be an array or number from one position to another.
// Depending on a certain condition, window increases or closes. Useful for keeping track of subset of data in array / string etc.

// Write a function maxSubarraySum which accepts an array of integers and number n and calculates maximum sum of n consecutive elements in the array


//naive solution
function maxSubbarraySumNaive(arr, num) {
    var max = 0;

    // Nested loops, where we keep track of the max sum of three consecutive digits
    // starting at the beggining
    for (var i = 0; i < arr.length - num + 1; i++) {
        var temp = 0;

        // For every index, calculate sum of it's value and n number of consecutive elements
        for (var j = 0; j < num; j++) {
            temp = temp + arr[i + j];
        }
        if (temp > max) max = temp;
        console.log(temp);
    }
}


// We don't need to calculate sums every time, we can just subtract the value of previous starting index and add the
// value of next element that was not yet added to already calculated sum.
function maxSubarraySum(arr, num) {

    let maxSum = 0;
    let tempSum = 0;

    // calculate the sum of first num digits
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = maxSum + arr[i] - arr[i - num];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

maxSubbarraySumNaive([1,2,5,6,8,9,10], 3);