// Move all exclamation marks to the end of the sentence

// Examples
// "Hi!"          ---> "Hi!"
// "Hi! Hi!"      ---> "Hi Hi!!"
// "Hi! Hi! Hi!"  ---> "Hi Hi Hi!!!"
// "Hi! !Hi Hi!"  ---> "Hi Hi Hi!!!"
// "Hi! Hi!! Hi!" ---> "Hi Hi Hi!!!!"

function remove (s) {
    return s.split("").filter(x=> x !== "!").join("") + s.split("").filter(x=> x==="!").join("");
  }