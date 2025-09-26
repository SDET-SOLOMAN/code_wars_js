// function consecutiveOnes(nums) {}
// that takes in array nums and returns the maximum consecutive 1's

// For example

// consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
// consecutiveOnes([1, 1, 0, 0, 1]) === 2
// consecutiveOnes([0, 0, 0, 0, 0]) === 0
// PLEASE NOTE THAT THIS KATA HAS HEAVY PERFORMANCE TESTS AND YOU NEED OPTIMIZED CODE TO PASS IT

function consecutiveOnes(nums) {
  let counter = 0;
  let temp = 0;

  for (let num of nums) {
    if (num === 1) {
      temp++;
    } else {
      counter = temp > counter ? temp : counter;
      temp = 0;
    }
  }
  return counter > temp ? counter : temp;
}
