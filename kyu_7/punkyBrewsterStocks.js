// Punky loves wearing different colored socks, but Henry can't stand it.

// Given an array of different colored socks, return a pair depending on who was picking them out.

// Example:

// getSocks('Punky', ['red','blue','blue','green']) -> ['red', 'blue']
// Note that Punky can have any two colored socks, in any order, as long as they are different and both exist. Henry always picks a matching pair.

// If there is no possible combination of socks, return an empty array.

function getSocks(n, s) {
  
  let empty = [];
  
  if(n === "Punky"){
    let checker = [...new Set(s)];
    return checker.length > 1 ? checker.slice(0, 2) : empty;
  }
  
  let d = {
    
  }
  
  for(let char of s){
    if(d[char]){
      d[char] += 1;
    } else{
      d[char] = 1;
    }
  }
  
  for(let char in d){
    if(d[char] > 1){
      return [char, char];
    }
  }
  return empty;
}

function getSocks(n, s) {
  
  if (n === "Punky") {
    let u = [...new Set(s)];
    return u.length > 1 ? u.slice(0, 2) : [];
  }
  
  let pair = s.find(x => s.indexOf(x) !== s.lastIndexOf(x));
  return pair ? [pair, pair] : [];
}