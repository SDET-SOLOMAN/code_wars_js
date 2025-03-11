/*
Given a random non-negative number, you have to return the 
digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]
*/

function digitize(n) {
    let arr = [];
    let word = n.toString();
    
    for (let i = word.length - 1; i >= 0; i--) {
      console.log(i);
      arr.push(Number(word[i]));
    }
  
    return arr;
}

function digitize2(n) {
  //code here
  let numArr = [];
  
  while(n > 0){
    numArr.push(n % 10);
    
    n = Math.floor(n/10);
  }
  
  return numArr;
}

function digitize3(n) {
  return String(n).split('').map(Number).reverse()
}