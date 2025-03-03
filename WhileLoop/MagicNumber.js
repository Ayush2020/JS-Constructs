const prompt = require(`prompt-sync`)();
let low = 1, high = 100
let mid;

console.log(`think of nnumber between 1 - 100: `)

while(low <= high){
    mid = Math.floor((low + high)/2);
    let response = prompt(`Is your number ${mid}? (yes/higher/lower)`).toLowerCase();

    if(response === "yes"){
        console.log("Magic Number is : " + mid)
        break
    }else if(response === "Higher"){
        low = mid + 1
    }else if(response === "Lower"){
        high = mid - 1
    }else{
        console.log("Enter the valid Response")
    }

}