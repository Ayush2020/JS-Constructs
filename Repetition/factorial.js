const prompt = require('prompt-sync')();


const number = parseInt(prompt("Enter a number: "));

if (number < 0) {
    console.log("Invalid input");
} else {
    let result = 1;
    for (let i = 2; i <= number; i++) {
        result *= i;
    }
    console.log(`Factorial of number  is: ` + result);
}