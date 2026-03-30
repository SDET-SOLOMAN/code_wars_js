// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. Implement a function 
// that determines whether a string that contains only letters
//  is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str) {
  
  let letters = [];

  for (let char of str.toLowerCase()) {
    if (letters.includes(char)) {
      return false;
    }
    letters.push(char);
  }

  return true;
}


function isIsogram(s){
  s = s.toLowerCase();
  return new Set(s).size === s.length;
}
