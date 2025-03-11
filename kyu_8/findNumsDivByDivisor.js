/*
Complete the function which takes two 
arguments and returns all numbers which 
are divisible by the given divisor. First 
argument is an array of numbers and the 
second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/

function divisibleBy(n, d){
  
    let newA = [];
    for(let i in n){
      if(n[i] % d === 0){
        newA.push(n[i]);
      }
    }
    return newA;
}

divisibleBy2 = (n, f) => n.filter(num => num % f === 0)