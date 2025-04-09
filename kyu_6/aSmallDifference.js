// Write a function that given two strings determines if they differ by exactly 
// one character.

// The difference may consist of one charater being added, removed or replaced, 
// in which case the function must return true. In all other cases it must return false.

// Examples:

// tower / towe -> true
// tower / towner -> true
// tower / bower -> true
// tower / token -> false
// tower / tower -> false

function oneCharDifference(a, b) {
  
    let  m = a.length;
    let n = b.length;
    let diff = 0;
    
    for (let i = 0, j = 0; i < m || j < n; i++, j++) {
      
      if (a[i] === b[j])
        continue;
      
      diff++;
      
      if(a[i + 1] === b[j])
        j--;
        
      else if(a[i] === b[j + 1])
        i--;
    }
    
    return diff === 1;
  }