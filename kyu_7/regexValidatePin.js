// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

let checker = (num) => "0123456789".includes(num);

function validatePIN(pin) {
  if (!(pin.length == 4 || pin.length == 6)) {
    return false;
  }

  for (let char of pin) {
    if (!checker(char)) {
      return false;
    }
  }

  return true;
}

// or
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin);
}
