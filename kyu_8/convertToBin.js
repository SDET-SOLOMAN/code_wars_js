// Task Overview
// Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is the same as the decimal representation of d.

// Examples:

// n = 1 should return 1
// n = 5 should return 101
// n = 11 should return 1011
function toBinary(n){
  
    let s = "";
    while(n > 0){
      s += n % 2;
      n = Math.floor(n / 2);
    }
    
    let x = '';
    for(let i = s.length - 1; i > -1; i--){
      x += s[i];
    }
    return Number(x);
}

function toBinary2(n) {
    let s = "";
    
    if (n === 0) return 0; // Optional: handle zero
    
    while (n > 0) {
      s = (n % 2) + s; // Add to the front instead of reversing later
      n = Math.floor(n / 2);
    }
  
    return Number(s);
  }
  