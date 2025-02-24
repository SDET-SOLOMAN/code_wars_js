/*
You will be given an array a and a value x. All you need to do is 
check whether the provided array contains the value.

a can contain numbers or strings. x can be either.

Return true if the array contains the value, false if not.
*/

function check(a, x) {
  return a.includes(x);
}

// using indexOf method
const check2 = (a, x) => a.indexOf(x) > -1;

function check3(a, x) {
  for (let i in a) {
    if (x === a[i]) {
      return true;
    }
  }
  return false;
}
