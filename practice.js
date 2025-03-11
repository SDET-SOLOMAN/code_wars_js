const firstName = "James";

switch (firstName){
    case "Mark":
        console.log("Hi");
    case "James":
        console.log("Bye");
        break;
    default:
        console.log("Yes");
}

let i = 2;
console.log(isNaN(i) ? "Yes" : "No");
let i2 = '3';
i2 = parseInt(i2);

let num = [2, 3, 4, 5];
let num2 = [2, 3, 4, 5];
console.log(num.toString === num2.toString);