/* 
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

Examples (Input -> Output)

* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5
Notes

You may consider that there will not be any empty arrays/vectors.
*/
let min = (lst) => {
  return Math.min(...lst);
};

let max = (lst) => {
  return Math.max(...lst);
};

/* let min = (lst) => {
    
  let myMin = lst[lst.length - 1];
  for(let i in lst){
    if(lst[i] < myMin){
      myMin = lst[i];
    }
  }
  return myMin;
}

let max = (lst) => {
    
  let myMax = lst[lst.length - 1];
  for(let i in lst){
    if(lst[i] > myMax){
      myMax = lst[i];
    }
  }
  return myMax;
} */

let min2 = function (list) {
  list.sort((a, b) => a - b);
  return list[0];
};

let max2 = function (list) {
  list.sort((a, b) => b - a);
  return list[0];
};
