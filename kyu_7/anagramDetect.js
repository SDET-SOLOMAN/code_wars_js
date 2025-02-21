/* 
An anagram is the result of rearranging the letters of a word to 
produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are 
anagrams of each other; return false otherwise.

Examples

"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/
let isAnagram = function (test, original) {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
};

// using Dictionary
let isAnagram2 = function (test, original) {
  let testD = {};
  let originalD = {};

  // Count occurrences of each character in `test`
  for (let char of test.toLowerCase()) {
    testD[char] = (testD[char] || 0) + 1;
  }

  // Count occurrences of each character in `original`
  for (let char of original.toLowerCase()) {
    originalD[char] = (originalD[char] || 0) + 1;
  }

  // Compare both dictionaries
  for (let k in originalD) {
    if (!(k in testD) || testD[k] !== originalD[k]) {
      return false;
    }
  }

  // Ensure `testD` doesn't have extra characters
  for (let k in testD) {
    if (!(k in originalD)) {
      return false;
    }
  }

  return true;
};
