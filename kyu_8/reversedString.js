// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
    return str.split('').reverse().join('');
}

function solution2(s){
    let o = '';
    for (var i = s.length - 1; i >= 0; i--)
      o += s[i];
    return o;
}