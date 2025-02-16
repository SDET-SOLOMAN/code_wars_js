/*Description:

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples

"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"
*/

function replace(s) {
  let vowels = "auioeAUIOE";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (!vowels.includes(s[i])) {
      result += s[i];
    } else {
      result += "!";
    }
  }
  return result;
}

function replace2(s) {
  return s.replace(/[aeiou]/gi, "!");
}

replace3 = (s) => s.replace(/[aeiou]/gi, "!");
