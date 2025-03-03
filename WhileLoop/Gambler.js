const prompt = require(`prompt-sync`)

let money = 100
const goal = 200
let bets = 0, wins = 0

while(money > 0 && money < goal){
    bets++;
    if(Math.random() < 0.5){
        money++
        wins++
    }else{
        money--
    }
    console.log("Bet: " + bets + " Wins: " + wins)
}
console.log("Game Over!! Total Bets: " + bets + " And Total Wins: " + wins)


if(money === goal){
    console.log("Gambler Goal Completed")
}else{
    console.log("Goal Not Completed")
}