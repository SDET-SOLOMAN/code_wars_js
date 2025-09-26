// In languages that use UTF-16 encoding for strings (JavaScript, JVM languages like Java, .NET languages like C#...), if the code point of a character is larger than 0xFFFF, it will be treated as two code units.

// For example:

// The code point of the emoji 🙉 (U+1F649, Hear-No-Evil Monkey) is 0x1F649.

// '🙉'.length // 2
// Write a function that returns the number of codepoints in a UTF-16 string.

// "abcd"   --> 4
// "🙉"     --> 1
// "😸🦌🚀" --> 3

function getRealLength(s) {
  console.log(s);

  let x = 0;

  for (let num of s) {
    console.log(num);
    x += 1;
  }
  return x;
}

function getRealLength2(s) {
  return [...s].length;
}

getRealLength3 = (num) => [...num].length;
