//Write a function which calculates the average of the numbers in a given array.

function findAverage(array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let x = 0;
  for (let i in array) {
    x += array[i];
  }
  return x / array.length;
}

function find_average2(arr) {
  return arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0;
}
