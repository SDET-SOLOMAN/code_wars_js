// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false

function solution(s, e){
  if (e === "") return true;
  return s.slice(-e.length) === e;
}

// or

function solution(str, ending){
  return str.endsWith(ending);
}

// or

function solution(str, ending){
  return str.substr(-ending.length) === ending;
}