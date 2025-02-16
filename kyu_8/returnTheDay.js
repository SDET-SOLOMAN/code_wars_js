/* Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7" 
*/

function whatday(num) {
  let days = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];

  if (!num || num > 7) {
    return "Wrong, please enter a number between 1 and 7";
  }
  return days[num - 1] + "day";
}

whatday2 = (n) => {
  switch (n) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";
    default:
      return "Wrong, please enter a number between 1 and 7";
  }
};

let whatday4 = (n) =>
  [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ][n - 1] || "Wrong, please enter a number between 1 and 7";
