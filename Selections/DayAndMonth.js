let day = 20
let month = 2

let isValid = ((month == 3) && (day >= 20) || (month == 4) || (month ==5) || (month == 6) && (day <= 20 ))
console.log(isValid)