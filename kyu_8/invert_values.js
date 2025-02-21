/* Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives.

[1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
[1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
[] --> []
You can assume that all values are integers. Do not mutate the input array.
*/

let invert = (x) => x.map((a) => -1 * a);

function invert2(x) {
  let newX = [];
  for (let i in x) {
    if (x[i] > 0) {
      newX.push(-x[i]);
    } else {
      newX.push(-1 * x[i]);
    }
  }
  return newX;
}
