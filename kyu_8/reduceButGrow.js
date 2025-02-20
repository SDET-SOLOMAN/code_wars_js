// Given a non-empty array of integers, return the result of multiplying the values
// together in order. Example:[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x) {
  let num = 1;
  for (let i = 0; i < x.length; i++) {
    num *= x[i];
  }
  return num;
}

// using reduce method
let grow2 = (nums) => nums.reduce((product, num) => product * num, 1);

function grow3(x) {
  let number = 1;

  for (let num of x) {
    number *= num;
  }

  return number;
}
