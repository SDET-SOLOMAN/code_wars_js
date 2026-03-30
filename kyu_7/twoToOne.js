// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  
  s1 = new Set(s1);
  s2 = new Set(s2);
  
  let result = new Set();
  
  for (let char of s1) {
    result.add(char);
  }
  
  for (let char of s2) {
    result.add(char);
  }
  
  return [...result].sort().join("");
}


// 

let longest = (num1, num2) => [... new Set(num1 + num2)].sort().join("");