// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

function missingNo(nums) {
  
    let sorted = nums.sort((a, b) => a - b);
    let num = sorted.at(0);
    
    for(let i = 0; i <= sorted.length; i++){
      if(sorted[i] !== num) {
        return num;
      }
      num += 1;
    } return 0;
  }