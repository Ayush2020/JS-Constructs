const prompt = require(`prompt-sync`)();

let  headsCount = 0, TailsCount = 0

while(headsCount < 11 && TailsCount < 11){
    let flip = Math.random() < 0.5 ? "Heads" : "False"
    console.log("Flip " + flip)
    if(flip === "Heads"){
        headsCount++
    }else{
        TailsCount++
    }
    console.log("HeadCounts : " + headsCount + " TailsCounts : " + TailsCount)
}
console.log(headsCount === 11 ? "Heads" : "Tails" + " Wins The game")

