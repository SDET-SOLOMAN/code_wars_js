/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s){
  
    let sjr = s.split(" ");
    let num = 9999;
    for(let i of sjr){
      if(i.length < num){
        num = i.length;
      }
    }
    return num;
    
}

function findShort2(s){
    return Math.min(...s.split(" ").map (s => s.length));
}