// Chingel was creating a function which would return true if the input followed this time format 14-10-2016 01:12 (it doesn't need to reflect an actual time) and false otherwise. But looks like he has messed it up. Could you help him out? Please!

function isItBugged(code) {
  if (code.length !== 16) return false;
  let nums = "0123456789";

  for (let i = 0; i < code.length; i++) {
    if ([0, 1, 3, 4, 6, 7, 8, 9, 11, 12, 14, 15].includes(i)) {
      if (!nums.includes(code[i])) {
        return false;
      }
    }

    if ([2, 5].includes(i)) {
      if (code[i] !== "-") {
        return false;
      }
    }

    if (i === 10 && code[i] !== " ") {
      return false;
    }

    if (i === 13 && code[i] !== ":") {
      return false;
    }
  }

  return true;
}
