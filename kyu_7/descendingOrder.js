/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/
function descendingOrder(n) {
    let num = String(n)               // Convert to string
                 .split("")           // Make it an array of digits
                 .sort((a, b) => b - a) // Sort descending
                 .join("");           // Join back into a string
                 
    return Number(num);               // Convert back to number
  }

function descendingOrder2(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}
  