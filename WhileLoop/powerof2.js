const prompt = require('prompt-sync')();

const input = prompt("Enter number: ");
const n = parseInt(input, 10);

if (!isNaN(n) && n >= 0) {
    let power = 1;
    let exponent = 0;
    
    console.log("Power of 2 Table:");
    
    while (power <= 256 && exponent <= n) {
        console.log(`2^${exponent} = ${power}`);
        power *= 2;
        exponent++;
    }
} else {
    console.log("Please enter a valid non-negative integer.");
}