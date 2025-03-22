// Move the first letter of each word to the end of it, 
// then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  
    let checker = x => {
      let code = x.charCodeAt(0);
      return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
    };
    
    let i = [];
    for (let char of str.split(" ")) {
      if (checker(char[0])) {
        if (char.length > 1) {
          i.push(char.slice(1) + char[0] + "ay");
        } else {
          i.push(char + "ay");
        }
      } else {
        i.push(char);
      }
    }
  
    return i.join(" ");
  }