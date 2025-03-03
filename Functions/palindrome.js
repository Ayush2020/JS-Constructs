const prompt = require(`prompt-sync`)()

function isPallindrome(num){
    let strNum = num.toString();
    let reversedNum = strnum.split('').reversed().join();
    return strNum === reversedNum
}
function checkPalindromes() {
    let num1 = parseInt(prompt("Enter the first number: "));
    let num2 = parseInt(prompt("Enter the second number: "));

    console.log(`${num1} is ${isPalindrome(num1) ? "a palindrome" : "not a palindrome"}`);
    console.log(`${num2} is ${isPalindrome(num2) ? "a palindrome" : "not a palindrome"}`);
}
checkPalindromes()

