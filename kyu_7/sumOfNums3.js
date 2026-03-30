// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b) {
  if (b < a) {
    let c = b;
    b = a;
    a = c;
  }
  let num = 0;
  while (a <= b) {
    num += a;
    a++;
  }
  return num;
}

// or

function getSum(a, b) {
  if (a === b) return a;
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
}

function getSum(a, b) {
  let num = [a, b].slice().sort((a, b) => a - b);

  a = num[0];
  b = num[1];

  let result = 0;

  while (a <= b) {
    result += a;
    a++;
  }

  return result;
}
