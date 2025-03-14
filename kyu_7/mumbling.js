/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

FundamentalsStringsPuzzles
*/
function accum(s) {
	
    let word = "";
    let num = 1;
    for(let i of s.split("")){
      word += i.toUpperCase() + i.toLowerCase().repeat(num - 1) + "-";
      num ++;
    }
    return word.slice(0, word.length - 1);
 }

 function accum2(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}