// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
    let obj = {
      "a": "b",
      "b": "a"
    };
    return x.split("").map(char=> char in obj? obj[char]: char).join("");
  }