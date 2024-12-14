"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function todaysDate() {

const date = new Date();

const trueDate = date.toLocaleDateString('no-NB' , {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

printOut("I dag er det " + trueDate);

return date;
}

todaysDate();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


function daysUntilGame () {
    
    const today = new Date(); 
    const todayCorrectFormat = today.toLocaleDateString('no-NB' , {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      
    const HypeTrain = new Date(2025, 4, 14);
    const HypeTrainCorrectFormat = HypeTrain.toLocaleDateString('no-NB' , {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    
    const timeDifference = HypeTrain - today;

    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    printOut("I dag er det " + todayCorrectFormat + ". Det er bare " + daysRemaining.toString() + " dager til game day " + HypeTrainCorrectFormat + "! Hvem tror du vinner denne gang?");

    return daysRemaining;

}

daysUntilGame();


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


function circleInfo(radius) {
    
    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius ** 2;

    printOut("Diameter:" + diameter.toFixed(2));
    printOut("Circumference: " + circumference.toFixed(2));
    printOut("Area: " + area.toFixed(2));

}
circleInfo(Math.ceil(Math.random()*10));

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function rectangleInfo({ width, height }) {

    

    const circumference = 2 * (width + height);
    const area = width * height;

    printOut("Circumference: " + circumference.toFixed(2));
    printOut("Area: " + area.toFixed(2));
    

}
const widthRandom = Math.ceil(Math.random()* 10)
const heightRandom = Math.ceil(Math.random()* 5)

printOut("Width: " + widthRandom + "     Height: " + heightRandom)

rectangleInfo({width: widthRandom, height: heightRandom})


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function temperatureConverter(value, type) {
    let celsius, fahrenheit, kelvin;

    if (type === 'C') {
        celsius = value;
        fahrenheit = Math.round((celsius * 9) / 5 + 32);
        kelvin = Math.round(celsius + 273.15);
    } else if (type === 'F') {
        fahrenheit = value;
        celsius = Math.round(((fahrenheit - 32) * 5) / 9);
        kelvin = Math.round(celsius + 273.15);
    } else if (type === 'K') {
        kelvin = value;
        celsius = Math.round(kelvin - 273.15);
        fahrenheit = Math.round((celsius * 9) / 5 + 32);

    }

    printOut("Celsius: " + celsius);
    printOut("Fahrenheit: " + fahrenheit);
    printOut("Kelvin: " + kelvin);
    

    }

    const CelsiusRandom = Math.ceil(Math.random()*200);
    const FahrenheitRandom = Math.ceil(Math.random()*200);
    const KelvinRandom = Math.ceil(Math.random()*200);

    printOut("Temperature Convert " + CelsiusRandom + "C")
    temperatureConverter(CelsiusRandom, 'C')
    printOut(newLine);
    printOut("Temperature Convert " + FahrenheitRandom + "F")
    temperatureConverter(FahrenheitRandom, 'F')
    printOut(newLine);
    printOut("Temperature Convert " + KelvinRandom + "K")
    temperatureConverter(KelvinRandom, 'K')
    
 

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateNetPrice(gross, vatGroup) {
    let vatRates = {
        'normal': 25,
        'food': 15,
        'hotel': 10,
        'transport': 10,
        'cinema': 10
    };
    let vatRate = vatRates[vatGroup.toLowerCase()];
    if (vatRate === undefined) {
        printOut(vatGroup + " is an unknown VAT group!");
        return;
    }
    let net = (100 * gross) / (vatRate + 100);
    printOut(gross + " is " + net.toFixed(2) + " without tax(" + vatGroup + ")" )
}

console.log(calculateNetPrice(125, 'normal'));
console.log(calculateNetPrice(115, 'food'));
console.log(calculateNetPrice(110, 'cinema'));
console.log(calculateNetPrice(100, 'Jet fuel'));



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function calculateSpeedDistanceTime(distance, time, speed) {
    if (speed === undefined) return distance / time;
    if (time === undefined) return distance / speed;
    if (distance === undefined) return speed * time;

printOut("Speed: " + speed + "km/h")
printOut("Time: " + time + "hours")
printOut("Distance: " + distance + "km")

}


console.log(calculateSpeedDistanceTime(100, 2, undefined)); // Calculate speed
console.log(calculateSpeedDistanceTime(100, undefined, 50)); // Calculate time
console.log(calculateSpeedDistanceTime(undefined, 2, 50));   // Calculate distance
console.log(calculateSpeedDistanceTime(undefined, undefined, 50)); // Invalid







printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
