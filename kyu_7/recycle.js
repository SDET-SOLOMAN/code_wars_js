// You are having a BBQ, and after the BBQ you are left with some rubbish to recycle.

// There are 3 recycling boxes: Red: Plastic, Green: Glass, Blue: Card.

// You want to sort the rubbish according to the material and return the number of items in each box as an array (or a tuple in Python):

// [plastic, glass, card]
// The material type can be determined based on the sign of the item's value:

// Plastic: value > 0
// Glass: value < 0
// Card: value = 0
// Example
// rubbish = [5, -9, 0, 6, -84, -95, 15]
// // Plastic = 3, Glass = 3, Card = 1
// // Output: [3, 3, 1]

function recycleMe(r){ 
  
  let d = {
    p: 0,
    g: 0,
    c: 0
  }
  
  for (let char of r) {
    if (char > 0) {
      d.p += 1;
    } else if (char < 0) {
      d.g += 1;
    } else {
      d.c += 1;
    }
  }
  
  return [d.p, d.g, d.c];
}