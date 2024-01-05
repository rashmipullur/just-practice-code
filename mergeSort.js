// Implement the merge sort algorithm to sort an array.

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  let result = [],
    leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    result.push(
      left[leftIndex] < right[rightIndex]
        ? left[leftIndex++]
        : right[rightIndex++]
    );
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([2, 5, 4, 7, 8, 5, 4, 5, 1, 1, 2, 0, -8, 5]));
