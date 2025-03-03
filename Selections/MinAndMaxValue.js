let number = []
let n = 5
for (i = 0; i< n; i++){
    let random = Math.floor(Math.random() * 900) + 100
    number.push(random)
}
let x = Math.min(...number)
let b = Math.max(...number)
console.log(number)
console.log(x)
console.log(b)