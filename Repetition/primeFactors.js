const prompt = require('prompt-sync')();

const number = parseInt(prompt("Enter a number: "));
let N = number;
let factors = [];

if (N < 2) {
    console.log("No prime factors");
} else {
    while (N % 2 === 0) {
        factors.push(2);
        N /= 2;
    }

    for (let i = 3; i * i <= N; i += 2) {
        while (N % i === 0) {
            factors.push(i);
            N /= i;
        }
    }

    if (N > 2) {
        factors.push(N);
    }

    console.log(`Prime factors of numbers are:`, factors);
}
