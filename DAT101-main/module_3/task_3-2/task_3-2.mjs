"use strict";
import { initPrintOut, printOut, newLine, NEWLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let countUp = "";
for (let i = 1; i <= 10; i++) {
    countUp += i + " ";
}
printOut("Counting up: " + countUp)

let countDown = "";
for (let i = 10; i >= 1; i--) {
    countDown += i + " ";
}
printOut("Counting down: " + countDown)

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let targetNumber = Math.floor(Math.random()*60 ) + 1;
let guess;

while (guess !== targetNumber) {
    guess = Math.floor(Math.random() * 60) + 1;
}

printOut("The number is " + guess + "!");

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let targetMill = Math.floor(Math.random() * 1_000_000) + 1;
let guessMill;
let attemptsMill = 0;
let startTime = Date.now();

while (guessMill !== targetMill) {
    guessMill = Math.floor(Math.random() * 1_000_000) + 1;
    attemptsMill++;
}
let endTime = Date.now();
printOut("The number is: " + guessMill);
printOut("It took " + attemptsMill + " guesses.")
printOut("It took " + (endTime - startTime) + " Milliseconds.")



printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let primeNumbers = [];

for (let num = 2; num < 200; num++) {
    let isPrime = true;
    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) primeNumbers.push(num);
}
printOut("Prime numbers between 1 and 200: " + primeNumbers)

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let grid = "";
for (let row = 1; row <= 7; row++) {
  
    for (let col = 1; col <= 9; col++) {
       grid += ("K" + col + "R" + row + " ");
    }
    
    grid += newLine;
}

printOut(grid)



printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const grades = [];
const gradeLetters = ["A", "B", "C", "D", "E", "F"];

for (let i = 0; i < 5; i++) {
    let points = Math.floor(Math.random() * 236) + 1;
    grades.push(points);

    let grade;
    if (points >= 0.89 * 236) grade = "A";
    else if (points >= 0.77 * 236) grade = "B";
    else if (points >= 0.65 * 236) grade = "C";
    else if (points >= 0.53 * 236) grade = "D";
    else if (points >= 0.41 * 236) grade = "E";
    else grade = "F";


    printOut("Student: " + (i + 1) + " Score = " + points + " Grade = " + grade)
}




printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


let fullStraight = false;
let threePairs = false;
let Tower = false;
let yahtzee = false;

let fullStraightThrows = 0;
let threePairsThrows = 0;
let towerThrows = 0;
let yahtzeeThrows = 0;

// Full Straight
while (!fullStraight) {
    fullStraightThrows++;
    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    const dice3 = Math.ceil(Math.random() * 6);
    const dice4 = Math.ceil(Math.random() * 6);
    const dice5 = Math.ceil(Math.random() * 6);
    const dice6 = Math.ceil(Math.random() * 6);

    let diceThrow = "";
    diceThrow += dice1.toString() + ",";
    diceThrow += dice2.toString() + ",";
    diceThrow += dice3.toString() + ",";
    diceThrow += dice4.toString() + ",";
    diceThrow += dice5.toString() + ",";
    diceThrow += dice6.toString();

    const countOne = (diceThrow.match(/1/g) || []).length;
    const countTwo = (diceThrow.match(/2/g) || []).length;
    const countThree = (diceThrow.match(/3/g) || []).length;
    const countFour = (diceThrow.match(/4/g) || []).length;
    const countFive = (diceThrow.match(/5/g) || []).length;
    const countSix = (diceThrow.match(/6/g) || []).length;

    if (countOne === 1 && countTwo === 1 && countThree === 1 && countFour === 1 && countFive === 1 && countSix === 1) {
        fullStraight = true;
        printOut(diceThrow + " Full straight! After " + fullStraightThrows + " throws.");
    }
}

printOut(newLine);


// Three Pairs
while (!threePairs) {
    threePairsThrows++;
    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    const dice3 = Math.ceil(Math.random() * 6);
    const dice4 = Math.ceil(Math.random() * 6);
    const dice5 = Math.ceil(Math.random() * 6);
    const dice6 = Math.ceil(Math.random() * 6);

    let diceThrow = "";
    diceThrow += dice1.toString() + ",";
    diceThrow += dice2.toString() + ",";
    diceThrow += dice3.toString() + ",";
    diceThrow += dice4.toString() + ",";
    diceThrow += dice5.toString() + ",";
    diceThrow += dice6.toString();


    const countOne = (diceThrow.match(/1/g) || []).length;
    const countTwo = (diceThrow.match(/2/g) || []).length;
    const countThree = (diceThrow.match(/3/g) || []).length;
    const countFour = (diceThrow.match(/4/g) || []).length;
    const countFive = (diceThrow.match(/5/g) || []).length;
    const countSix = (diceThrow.match(/6/g) || []).length;

    const pairCount = [countOne, countTwo, countThree, countFour, countFive, countSix].filter(count => count === 2).length;

    if (pairCount === 3) {
        threePairs = true;
        printOut(diceThrow + " Three pairs! In " + threePairsThrows + " throws.");
    }
}

printOut(newLine);


// Two and Four of a Kind (Tower)
while (!Tower) {
    towerThrows++;
    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    const dice3 = Math.ceil(Math.random() * 6);
    const dice4 = Math.ceil(Math.random() * 6);
    const dice5 = Math.ceil(Math.random() * 6);
    const dice6 = Math.ceil(Math.random() * 6);

    let diceThrow = "";
    diceThrow += dice1.toString() + ",";
    diceThrow += dice2.toString() + ",";
    diceThrow += dice3.toString() + ",";
    diceThrow += dice4.toString() + ",";
    diceThrow += dice5.toString() + ",";
    diceThrow += dice6.toString();

    const countOne = (diceThrow.match(/1/g) || []).length;
    const countTwo = (diceThrow.match(/2/g) || []).length;
    const countThree = (diceThrow.match(/3/g) || []).length;
    const countFour = (diceThrow.match(/4/g) || []).length;
    const countFive = (diceThrow.match(/5/g) || []).length;
    const countSix = (diceThrow.match(/6/g) || []).length;

    const counts = [countOne, countTwo, countThree, countFour, countFive, countSix];
    if (counts.includes(2) && counts.includes(4)) {
        Tower = true;
        printOut(diceThrow + " Tower! After " + towerThrows + " throws.");
    }
}

printOut(newLine);

// Yahtzee
while (!yahtzee) {
    yahtzeeThrows++;
    const dice1 = Math.ceil(Math.random() * 6);
    const dice2 = Math.ceil(Math.random() * 6);
    const dice3 = Math.ceil(Math.random() * 6);
    const dice4 = Math.ceil(Math.random() * 6);
    const dice5 = Math.ceil(Math.random() * 6);
    const dice6 = Math.ceil(Math.random() * 6);

    const diceThrow = [dice1, dice2, dice3, dice4, dice5, dice6].join(",");

    const countOne = (diceThrow.match(/1/g) || []).length;
    const countTwo = (diceThrow.match(/2/g) || []).length;
    const countThree = (diceThrow.match(/3/g) || []).length;
    const countFour = (diceThrow.match(/4/g) || []).length;
    const countFive = (diceThrow.match(/5/g) || []).length;
    const countSix = (diceThrow.match(/6/g) || []).length;

    if ([countOne, countTwo, countThree, countFour, countFive, countSix].includes(6)) {
        yahtzee = true;
   
        printOut(diceThrow + " Yahtzee! After " + yahtzeeThrows + " throws.");
    }
}




