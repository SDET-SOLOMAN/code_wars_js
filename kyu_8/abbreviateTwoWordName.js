/* Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevName(name) {
  name = name.split(" ");
  return `${name[0][0]}.${name[1][0]}`.toUpperCase();
}

function abbrevName2(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

function abbrevName3(name) {
  return name
    .split(" ")
    .map((i) => i.slice(0, 1).toUpperCase())
    .join(".");
}
