// Exercise 9: Write a function named 'flattenArray' that takes an array of nested arrays and returns a single flattened array.
// TODO
function flattenArray(arr) {
  // your code here
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      array = array.concat(flattenArray(arr[i]));
    } else {
      array.push(arr[i]);
    }
  }
  return array;
}

console.log(flattenArray([[1, 2], [3, 4], [5, [6, 7]]])) // [1, 2, 3, 4, 5, 6, 7]