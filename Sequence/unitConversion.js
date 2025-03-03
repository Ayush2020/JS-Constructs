//a inches in feet
let inches = 42;
let feet = inches / 12;
console.log("42 inches in " + feet + " Feet");


// b 60 * 40 in meters
let lengthFeet = 60;
let widthFeet = 40;
let feetToMeters = 0.3048; 

let lengthMeters = lengthFeet * feetToMeters;
let widthMeters = widthFeet * feetToMeters;
console.log("Rectangular Plot: " + lengthFeet + " m in length and " + widthFeet + " m in Width")


//c Area in Acres
let singlePlotAreaMeters = lengthMeters * widthMeters
let totalAreaMeters = singlePlotAreaMeters * 25
let metersToAcres = 0.000247105

let totalAreaAcres = totalAreaMeters * metersToAcres;
console.log("Total Area of 25 Plots: " + totalAreaAcres);
