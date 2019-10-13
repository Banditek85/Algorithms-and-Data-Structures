/* We start at the first index, store it's value and compare item before it.
If index at item before it is greater than zero and it's value is greater than current 
value, move it's value up. At the end insert current value at index where loop broke
*/

function insertion_sort(arr) {
  for (var i = 1; i < arr.length; i++) {
      const current = arr[i];
      for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
          arr[j + 1] = arr[j];
      }
      arr[j + 1] = current;
  }
  console.log(arr);
}

insertion_sort([32,4,1,2,5,46]);