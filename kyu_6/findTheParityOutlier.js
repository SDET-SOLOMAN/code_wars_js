// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(int){
  
    let odd = [];
    let even = [];
    for(let i of int){
      if(i % 2 === 0){
        even.push(i);
      } else {
        odd.push(i);
      }
    }
    return odd.length > even.length? even[0]: odd[0];
  }

  function findOutlier2(i){
    let odd = i.filter(x => x % 2 !== 0);
    let even = i.filter(x => x % 2 === 0);
    return odd.length > even.length? even[0]: odd[0];
  }