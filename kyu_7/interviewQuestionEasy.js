// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

// More examples:

// "Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
// "Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"

function getStrings(city){
  
    city = city.toLowerCase();
    let dict = {};
    for(let i of city.split("")){
      if(i in dict){
        dict[i] += 1;
      } else{
        if(i === " "){
          continue;
        }
        dict[i] = 1;
      }
    }
    let s = "";
    for(let k in dict){
      s += `${k}:${'*'.repeat(dict[k])},`;
    }
    return s.slice(0, -1);
  }