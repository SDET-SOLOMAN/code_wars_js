// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  
    let noZero = arr.filter(x => x !== 0);
    let zeros = Array(arr.length - noZero.length).fill(0);
    return noZero.concat(zeros);
    
  }
  
  
  function moveZeros2(arr) {
    return [
      ...arr.filter(x => x !== 0),
      ...arr.filter(x => x === 0)
    ]
  }