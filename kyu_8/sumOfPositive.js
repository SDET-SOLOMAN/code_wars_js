/* 
Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 
1
+
7
+
12
=
20
1+7+12=20
Note
If there is nothing to sum, the sum is default to 0.

*/

function positiveSum(arr) {
    let num = 0;
    for(let i of arr){
      if(i > 0){
        num += i;
      }
    }
    return num;
}

const positiveSum2 = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);