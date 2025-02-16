/* There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

*/

let mySwitch = (x) => {
  switch (x.toLowerCase()) {
    case "ą":
      return x === x.toUpperCase() ? "A" : "a";
    case "ć":
      return x === x.toUpperCase() ? "C" : "c";
    case "ę":
      return x === x.toUpperCase() ? "E" : "e";
    case "ł":
      return x === x.toUpperCase() ? "L" : "l";
    case "ń":
      return x === x.toUpperCase() ? "N" : "n";
    case "ó":
      return x === x.toUpperCase() ? "O" : "o";
    case "ś":
      return x === x.toUpperCase() ? "S" : "s";
    case "ź":
    case "ż":
      return x === x.toUpperCase() ? "Z" : "z";
    default:
      return x;
  }
};

function correctPolishLetters(string) {
  let new_s = "";

  for (let i = 0; i < string.length; i++) {
    new_s += mySwitch(string[i]);
  }
  return new_s;
}
