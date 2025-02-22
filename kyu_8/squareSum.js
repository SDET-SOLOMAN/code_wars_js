/*
Complete the square sum function so that it squares each number passed 
into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1
2
+
2
2
+
2
2
=
9
1 
2
 +2 
2
 +2 
2
 =9.

*/

function squareSum(numbers) {
  return numbers.reduce((sum, num) => sum + num ** 2, 0);
}

function squareSum2(numbers) {
  let x = [];

  for (let i in numbers) {
    x.push(numbers[i] * numbers[i]);
  }
  return x.reduce((z, y) => z + y, 0);
}
