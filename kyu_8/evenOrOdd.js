//Create a function that takes an integer 
// as an argument and returns "Even" 
// for even numbers or "Odd" for odd numbers.

function evenOrOdd2(number) {
    return ["Odd", "Even"][Number(number % 2 === 0)];
  }

evenOrOdd = (num) => num % 2 === 0? "Even": "Odd";