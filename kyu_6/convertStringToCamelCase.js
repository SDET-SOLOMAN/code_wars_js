// Complete the method/function so that it converts dash/underscore delimited 
// words into camel casing. The first word within the output should be capitalized 
// only if the original word was capitalized (known as Upper Camel Case, also 
// often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"


function toCamelCase(str) {
    str = str.replace(/_/g, "-").replace(/-/g, " ").split(" ");
    return str[0] + str.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
  }