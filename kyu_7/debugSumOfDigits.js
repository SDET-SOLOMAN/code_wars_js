function getSumOfDigits(integer) {
  let sum = 0;
  const digits = Math.floor(integer).toString();
  for (let ix = 0; ix < digits.length; ix++) {
    sum += parseInt(digits[ix]);
  }
  return sum;
}
