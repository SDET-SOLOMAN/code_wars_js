/*
Mutation is a genetic operator used to maintain genetic diversity 
from one generation of a population of genetic algorithm chromosomes 
to the next.

Mutation

A mutation here may happen on zero or more positions in a chromosome. 
It is going to check every position and by a given probability it will 
decide if a mutation will occur.

A mutation is the change from 0 to 1 or from 1 to 0.

Note: Some tests are random. If you think your algorithm is correct 
but the result fails, trying again should work.
*/

const mutate = (c, p) => {
  let result = "";

  for (let i = 0; i < c.length; i++) {
    if (Math.random() < p) {
      result += c[i] === "0" ? "1" : "0";
    } else {
      result += c[i];
    }
  }
  return result;
};
