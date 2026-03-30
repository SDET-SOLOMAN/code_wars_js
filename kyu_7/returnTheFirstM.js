// Implement a function that takes two numbers m and n and returns an array of the first m multiples of the real number n. Assume that m is a positive integer.

// Ex.

// (3, 5.0) --> [5.0, 10.0, 15.0]

function multiples(m, n) {
  let i = 1;
  let res = [];
  while (res.length !== m) {
    res.push(n * i);
    i++;
  }
  return res;
}

// Refactored

function multiples(m, n) {
  return Array.from({ length: m }, (_, i) => n * (i + 1));
}