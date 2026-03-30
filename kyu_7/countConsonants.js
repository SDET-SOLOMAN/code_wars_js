// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(s) {
  
  s = s.toLowerCase();
  let counter = 0;
  for(let char of s){
    if(!"aouei".includes(char) && char.toLowerCase() !== char.toUpperCase()){
      counter++;
    }
  }
  return counter;
}