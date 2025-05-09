/* 
Agent 47, you have a new task!
Among citizens of the city X are hidden 2 dangerous criminal 
twins. Your task is to identify them and eliminate!

Everyone except the twins are single-born (i.e., 
unique individuals).

Given an array of integers, your task is to find two same 
numbers and return one of them. For example, in the array ```` 
the answer is 2. If there are no twins in the city - return 
None or the equivalent in the language that you are using.
*/

function elimination (arr) {
    
    const seen = new Set();
  
    for (let num of arr) {
      if (seen.has(num)) {
        return num;
      }
      seen.add(num);
    }
    return null;
}

function elimination2(arr){
    let seen = []
    let dupe = []
    for(let i in arr){
      if(seen.includes(arr[i])){
        if(!dupe.includes(arr[i])){
          dupe.push(arr[i]);
        }
      }
      seen.push(arr[i]);
    }
    return dupe.length > 0 ? dupe[0]: null;
}