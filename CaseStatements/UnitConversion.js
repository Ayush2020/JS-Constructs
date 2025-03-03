const prompt = require("prompt-sync")();
let choice = parseInt(prompt("Enter the number: "));

switch (choice) {
    case 1:
        let feet1 = parseInt(prompt("Enter value in Feet: "));
        console.log(feet1 + " Feet = " + (feet1 * 12) + " Inches");
        break;
    case 2:
        let feet2 = parseInt(prompt("Enter value in Feet: "));
        console.log(feet2 + " Feet = " + (feet2 * 0.3048) + " Meters");
        break;
    case 3:
        let inch = parseInt(prompt("Enter value in Inches: "));
        console.log(inch + " Inches = " + (inch / 12) + " Feet");
        break;
    case 4:
        let meter = parseInt(prompt("Enter value in Meters: "));
        console.log(meter + " Meters = " + (meter * 3.28084) + " Feet");
        break;
    default:
        console.log("Invalid");
}