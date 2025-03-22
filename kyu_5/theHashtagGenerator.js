// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {

    if (!str || str.trim() === "") return false;
    
    let temp = "";
    let list = [];
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        temp += str[i];
      } else {
        if (temp) {
          list.push(temp[0].toUpperCase() + temp.slice(1));
          temp = "";
        }
      }
    }
    
    if (temp) {
      list.push(temp[0].toUpperCase() + temp.slice(1));
    }
    
    let hashtag = "#" + list.join("");
    
    return hashtag.length > 140 || hashtag === "#" ? false : hashtag;
  }
  