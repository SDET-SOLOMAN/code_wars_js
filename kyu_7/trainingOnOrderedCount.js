// Count the number of occurrences of each character and return 
// it as a (list of tuples) in order of appearance. For empty output return 
// (an empty list).

// Consult the solution set-up for the exact data structure implementation 
// depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

let orderedCount = function (text) {
  
    let word = [...text];
    let resultArray = [];
    
    for(let i = 0; i < word.length; i++) {
      let charCount = [];
      if(word[i] !== null) {
        charCount[0] = word[i];
        word[i] = null;
       } else {
         continue;
       }
      charCount[1] = 1;
      
      for(let j = i+1; j < word.length; j++) {
        if(word[j] === charCount[0]){
          charCount[1]++;
          word[j] = null; 
        }
      }
      
      resultArray.push(charCount);
    }
    return resultArray;
  }