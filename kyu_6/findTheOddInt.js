// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  
    let ob = {};
    
    for(let i of A){
      if(i in ob){
        ob[i] += 1;
      } else{
        ob[i] = 1;
      }
    }
    
    for(let i in ob){
      console.log(i);
      if(ob[i] % 2 !== 0){
        return parseInt(i);
      }
    }  
  }

  function findOdd2(A) {
    var obj = {};
    // comprehension 
    A.forEach(x => {
      obj[x] ? obj[x]++ : obj[x] = 1;
    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }