/*
Pig latin is created by taking all the consonants before the first vowel 
(for the purposes of this kata, a "vowel" is any letter from the set 
a, e, i, o, u) of a word and moving them to the back of the word followed 
by the letters "ay".

"hello" => "ellohay"
"creating" => "eatingcray"
If the first letter of the word is a vowel, the string is left the 
same and the letters "way" are appended to the end.

"algorithm" => "algorithmway"
This problem is different from other variations in that it expects 
casing to remain the same so:

"Hello World" => "Ellohay Orldway"
as well as punctuation (for the purposes of this kata, "punctuation" 
includes ,, ., !, ?, :, ;).

"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
Your job is to take a string and translate it to Pig Latin. 
The string will never be undefined but may contain both numbers and letters. 
A word will never be a combination of numbers and letters. Also, there will 
never be punctuation at the beginning of a word and the only capital letter 
in a word will be the first letter meaning there are zero all capitalized words.
*/

function translate(sentence) {
  const vowels = "aeiouAEIOU";
  let result = "",
    word = "",
    punct = "",
    isCapital = false;

  for (let i = 0; i <= sentence.length; i++) {
    let char = sentence[i] || " ";
    let isLetter = (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");

    if (isLetter) {
      if (!word) isCapital = char >= "A" && char <= "Z"; // Check capitalization
      word += char;
    } else {
      if (word) {
        if (",.!?;:".includes(word[word.length - 1])) {
          punct = word[word.length - 1];
          word = word.slice(0, -1);
        }
        let j = 0;
        while (j < word.length && !vowels.includes(word[j])) j++;
        word = j === 0 ? word + "way" : word.slice(j) + word.slice(0, j) + "ay";
        if (isCapital)
          word = word[0].toUpperCase() + word.slice(1).toLowerCase();
        result += word + punct;
        (word = ""), (punct = ""), (isCapital = false);
      }
      result += char;
    }
  }
  return result.trim(" ");
}
