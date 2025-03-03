const prompt = require(`prompt-sync`)
function isPallindrome(num){
    let strNum = num.toString();
    let reversedNum = strNum.split('').reverse().join();
    return strNum === reversedNum
}
function isPrime(num){
    if(num <= 1) return false;
    for(let i=2; i<num; i++){
        if(num % i === 0) return false;
    }
    return true;
}

function getPallindrome(){
    return parseInt(num.toString().split('').reverse().join(''));
}
function checkPrimePallindrome(){
    let num = parseInt(prompt("Enter a number:"))
    if(isPrime(num)){
        console.log(`${num} is a prime number`)
        let pallindrome = getPallindrome(num)
        console.log(`${num} is also a palindrome.`)

        if(isPrime(pallindrome)){
            console.log(`${pallindrome} is a prime number as well.`)
        }else{
            console.log(`${pallindrome} is not a prime number.`)
        }

    }else{
        console.log(`${num} is not a prime number`) 
    }
}
checkPrimePallindrome()
