// You are going to be given a non-empty string. 
// Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s) {
  
  const len = s.length;
  const middle = len / 2;
  
  if(len % 2 === 1) {
    return s.at(middle);
  }
  return s.substring(middle - 1, middle + 1);
}

// Refactored
function getMiddle(s) {
    const middle = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? s.substring(middle - 1, middle + 1) : s.charAt(middle);
}   

const getMiddle = s => {
  const middle = Math.floor(s.length / 2);
  return s.length % 2 === 0? s.substring(middle - 1, middle + 1) : s.charAt(middle);
}