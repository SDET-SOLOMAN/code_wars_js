// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

let maps = (arr) => arr.map((x) => x * 2);

function maps2(x) {
  let y = [];
  for (let num of x) {
    y.push(num * 2);
  }
  return y;
}
