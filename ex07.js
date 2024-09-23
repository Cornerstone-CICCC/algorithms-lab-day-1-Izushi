// Exercise 7: Write a function named 'calculateAverage' that takes an array of numbers and returns the average value.

function calculateAverage(arr) {
  // your code here
  let totalNum = 0;
  let averageNum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalNum += arr[i];
  }
  return averageNum = totalNum / arr.length
}

console.log(calculateAverage([10, 20, 30, 40, 50])) // 30