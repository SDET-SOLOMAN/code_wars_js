/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
Note: In COBOL, it should return "found the needle at position 6"
*/
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (
      typeof haystack[i] === "string" &&
      haystack[i].toLowerCase() === "needle"
    ) {
      return `found the needle at position ${parseInt(i)}`;
    }
  }
  return "";
}

// using indexOf method
function findNeedle2(haystack) {
  return `found the needle
   at position ${haystack.indexOf("needle")}`;
}

// using findIndex method
function findNeedle3(haystack) {
  return `found the needle at position ${haystack.findIndex(
    (x) => x === "needle"
  )}`;
}

// using find method
function findNeedle4(haystack) {
  return `found the needle at position ${haystack.find((x) => x === "needle")}`;
}
