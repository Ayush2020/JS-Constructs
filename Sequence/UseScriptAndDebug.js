let sum = 0;
let n = 5
for(i = 0; i < n ; i++){
    let random = Math.floor(Math.random() * 90) + 10
    sum = sum + random;
}
console.log(sum);
let average = sum / n
console.log(average)