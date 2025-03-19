// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

const spinner = x => {
    let newX = "";
    for(let i = x.length - 1; i > -1; i--){
      newX += x[i];
    }
    return newX;
  };
  
  function spinWords(s){
    let newX = [];
    for(let i of s.split(" ")){
      if(i.length >= 5) {
        newX.push(spinner(i));
      } else{
        newX.push(i);
      }
    }
    return newX.join(" ");
  }


  function spinWords2(str){
    return str.split(' ').map(spinSingleWord).join(' ');
  }
  
  function spinSingleWord2(word){
    return word.length>4 ? word.split('').reverse().join('') : word;
  }