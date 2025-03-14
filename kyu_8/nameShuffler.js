/* 
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"
*/
function nameShuffler(str){
    str = str.split(" ");
    return str.at(1) + " " + str.at(0);
}

function nameSuffler2(str){
    return str.split(' ').reverse().join(' ');
}