"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const result = 2 + (3*(2-4))*6;
printOut("Answer = " + result);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

const mmInInch = 25.4;
const mmInMeter = 1000;
const meter = 25.34;
const answer = (meter * mmInMeter) / mmInInch;
const answerTwoDec = answer.toFixed(2);

printOut("answer = " + answerTwoDec.toString() +" Inches");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

const secPerMin = 60;
const MinPerHour = 60;
const HourPerDay = 24;
const AnswerInMinutes = (3*HourPerDay * MinPerHour) + (12 * MinPerHour) + 14 + (45 / secPerMin)

printOut("answer = " + AnswerInMinutes.toString() + " Minutes");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");

const numberOfMinutes = 6322.52;
let part4Calc = numberOfMinutes / (60 * 24);
const part4Days = Math.floor(part4Calc);

part4Calc = part4Calc - part4Days
part4Calc = part4Calc * HourPerDay
const part4Hours = Math.floor(part4Calc);

part4Calc = part4Calc - part4Hours
part4Calc = part4Calc * MinPerHour
const part4Min = Math.floor(part4Calc);

part4Calc = part4Calc - part4Min
part4Calc = part4Calc * secPerMin
const part4Sec = Math.floor(part4Calc);


printOut(part4Days + " Days, "+ part4Hours + " Hours, " + part4Min + " Minutes, " + part4Sec + " Seconds");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

const NOK = 76 / 8.6;
const USD = 8.6 / 76;
let amountUSD = 54;
const amountNOK = Math.round(amountUSD*NOK);
amountUSD = Math.round(amountNOK*USD);


printOut(amountUSD + "USD is " + amountNOK + "NOK");
printOut(amountNOK + "NOK is " + amountUSD + "USD")
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let part6Text = "There is much between heaven and earth that we do not understand.";
printOut("Number of characters: " + part6Text.length);

printOut("Character at position 19: " + part6Text.charAt(19));

printOut("Characters from position 35-43: " + part6Text.substring(35, 43));

printOut("The word earth starts at: " + part6Text.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let x = 5;
let y = 3;
printOut("5 is greater than 3 = " + (x > y) );

printOut("7 is greater or equal to 7 = " + (7 >= 7)   );

printOut("'1' is less than 'a' = " + ('1' < 'a') );

printOut("Is '2500' less than 'abcd'? " + ('2500' < 'abcd') );

printOut("'arne' is not equal to 'thomas' = " + ('arne' !== 'thomas'));

printOut("(2 equals 5) is this statement true? " + (2===5));

printOut("('abcd' us greater than 'bcd') is this statement false? " + !('abcd' > 'bcd'));

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let number1 = "254";
parseInt = number1;
printOut("Convert '254' to a number = " + number1);

let number2 = parseFloat("57.23");
printOut("Convert '57.23' to a number = " + number2);

let number3 = "25 kroner";
parseInt = number3;
printOut("Convert '25 Kroner' to a number = " + number3);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let r = Math.floor(Math.random() * 360 ) + 1;

printOut("Random number between 1 and 360: " + r);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const totalDays = 131;
const weeks = Math.floor(totalDays / 7);
const days = totalDays % 7;

printOut("131 days is " + weeks + " weeks and " + days + " days.");
printOut(newLine);