function TempConverter(){
    let choice = prompt("Enter 1 to convert Celsius to Fahrenheit, 2 to convert Fahrenheit to Celsius:")
    choice = parseInt(choice)

    switch(choice){
        case 1:
            let degC = parseFloat(prompt("Enter temperature in Celsius :"))
            if(degC >= 0 && degC <= 100){
                let degF = (degC * 9/5) + 32
                console.log(degC + "is equal to : " + degF.toFixed(2) + " F")
            }else{
                console.log("Please enter a value between 0°C and 100°C.");
            }
            break
        case 2:
            let degF = parseFloat(prompt("Enter temperature in Fahrenheit :"));
            if (degF >= 32 && degF <= 212) {
                let degC = (degF - 32) * 5/9;
                console.log(degF + "is equal to : " + degC.toFixed(2) + " C")
            } else {
                console.log("Please enter a value between 32°F and 212°F.");
            }
            break;
        default:
            console.log("Invalid Choice")
    }
}
TempConverter()