// Define a function that removes duplicates from an array of non negative numbers 
// and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

function distinct(a) {
    let newA = [];
    for(let i of a){
      if(!newA.includes(i)){
        newA.push(i);
      }
    }
    return newA;
  }

  const distinct2 = a => a.filter((item, index) => a.indexOf(item) === index);