"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/

let wakeUpTime = Math.floor(Math.random()*3)+ 6;

if (wakeUpTime === 7 ) {
  printOut("I can take the bus to school.");
 
} else if (wakeUpTime === 8) {
  printOut("I can take the train to school.");

} else {
  printOut("I have to take the car to school.");

}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let NegativeOrPositiveInt = Math.floor(Math.random()*6)-3;

if (NegativeOrPositiveInt < 0) {
  printOut("Negative integer");

} else if (NegativeOrPositiveInt === 0) {
  printOut("Zero");


} else {
  printOut("Positive Integer");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const ImgMinSize = 4;
let ImgSize = Math.floor(Math.random()*8 ) + 1;

printOut(ImgSize.toString() + "MP")

if (ImgSize >= ImgMinSize ) {
  printOut("Thank you.");

} else {
  printOut("Sorry Image too small");
}



printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const ImgMaxSize = 6;

if (ImgSize >= ImgMinSize && ImgSize < ImgMaxSize) {
  printOut("Thank you.");

} else if (ImgSize < ImgMinSize) {
  printOut("Sorry the image too small.");

} else {
  printOut("Image is too large");

}



printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList =["January", "February", "March", "April", "May",
  "June", "July", "August", "September", "October", "November", "December"];
  const noOfMonth = monthList.length;
  const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

printOut(monthName)

if (monthName.toLowerCase().includes("r") ) {
  printOut("You need to take Vitamin D");

} else {
  printOut("You do not need Vitamin D")

}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (
  monthName === "January",
  monthName === "March",
  monthName === "July", 
  monthName === "August",
  monthName === "October",
  monthName === "December",
  monthName === "May") 

  { printOut(monthName + " has 31 days.");


} else if (monthName === "February") {
  printOut(monthName + " has 28 days (29 on leap year)");


} else {
  printOut( monthName + " has 30 days.");

}

printOut(newLine);


printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

if (monthName === "March" || monthName === "May") {
  printOut("The gallery is closed due to refurbishing.");
} else if (monthName === "April") {
  printOut("The gallery is temporarily open in the building next door.");
} else {
  printOut("The gallery is open as usual.");
}

printOut(newLine);
