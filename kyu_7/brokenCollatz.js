// The Collatz sequence is a set of numbers formed by taking an arbitrary positive integer and applying an operation to it: if the number is even, divide it by two, and if it's odd, multiply by three and add one. Repeat this process, taking the result as the input for the next step, until the resulting number is one.

// The following function is not working. It's purpose is to return the length of any Collatz sequence. Can you fix it?

function collatz(n) {
  let count = 1;    
    while (n !== 1) {
        n = (n % 2 === 0) ? n / 2 : 3 * n + 1;
        count++;
    }   
    return count;
}   

function collatz2(n) {
  
  let arr = [n];
  
  while (arr[arr.length - 1] !== 1) {
    let last = arr[arr.length - 1];
    arr.push(last % 2 === 0? last / 2: (last * 3) + 1)
  }
  
  return arr.length;
}
