// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

const removeChar = str => {
    return str.substring(1, str.length-1);
   };

   const removeChar = str => {
    return str.slice(1, str.length-1);
   };