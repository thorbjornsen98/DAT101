"use strict";

//----------- Import modules, mjs files  ---------------------------------------------------

import libSprite from "../../common/libs/libSprite_v2.mjs";
import { TGameBoard, GameBoardSize, TBoardCell } from "./gameBoard.mjs";
import { TSnake, EDirection } from "./snake.mjs";
import { TBait } from "./bait.mjs";
import { TMenu } from "./menu.mjs";

//----------- variables and object --------------------------------------------------------

const cvs = document.getElementById("cvs");
const spcvs = new libSprite.TSpriteCanvas(cvs);
let gameSpeed = 4; 
let hndUpdateGame = null;
let baitScore = 50;
let score = 0;
let time = 0;
let eatTime = 0;

export const EGameStatus = { 
  Idle: 0,
  Playing: 1,
  Pause: 2,
  GameOver: 3 
};

// prettier-ignore
export const SheetData = {
  Head:     { x:   0, y:   0, width:  38, height:  38, count:  4 },
  Body:     { x:   0, y:  38, width:  38, height:  38, count:  6 },
  Tail:     { x:   0, y:  76, width:  38, height:  38, count:  4 },
  Bait:     { x:   0, y: 114, width:  38, height:  38, count:  1 },
  Play:     { x:   0, y: 155, width: 202, height: 202, count: 10 },
  GameOver: { x:   0, y: 647, width: 856, height: 580, count:  1 },
  Home:     { x:  65, y: 995, width: 169, height: 167, count:  1 },
  Retry:    { x: 614, y: 995, width: 169, height: 167, count:  1 },
  Resume:   { x:   0, y: 357, width: 202, height: 202, count: 10 },
  Number:   { x:   0, y: 560, width:  81, height:  86, count: 10 },
};

export const GameProps = {
  gameBoard: null,
  gameStatus: EGameStatus.Idle,
  snake: null,
  bait: null,
  menu: null,
  score: 0

};

//------------------------------------------------------------------------------------------
//----------- Exported functions -----------------------------------------------------------
//------------------------------------------------------------------------------------------

export function newGame() {
  GameProps.gameBoard = new TGameBoard();
  GameProps.snake = new TSnake(spcvs, new TBoardCell(5, 5)); // Starting position
  GameProps.bait = new TBait(spcvs); // Initialize bait with a starting position
  gameSpeed = 4; // Reset game speed
  baitScore = 50;
  time = Date.now();
  GameProps.score = 0;
  GameProps.gameStatus = EGameStatus.Playing;
}

export function baitIsEaten() {
  GameProps.snake.update(); // Grows the snake
  GameProps.bait.update(); // Moves bait to different tile
  increaseGameSpeed(); // Increase game speed
  eatTime = Date.now();
  baitScore = Math.floor(50 - ((eatTime - time) /1000))
    if (baitScore < 20) baitScore = 20;
  GameProps.score += baitScore;
  console.log("BaitScore: " +baitScore)
  baitScore = 50;
  time = Date.now();
}

//----------- functions -------------------------------------------------------------------

//Load game
function loadGame() {
  cvs.width = GameBoardSize.Cols * SheetData.Head.width;
  cvs.height = GameBoardSize.Rows * SheetData.Head.height;

  GameProps.gameStatus = EGameStatus.Idle; 
  GameProps.menu = new TMenu(spcvs, cvs, newGame);

  requestAnimationFrame(drawGame);
    hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); // Update game every 1000ms / gameSpeed
  }

//Draw game
function drawGame() {

  spcvs.clearCanvas();

  switch (GameProps.gameStatus) {
    
    case EGameStatus.Idle:
      GameProps.menu.drawStartMenu();
      break;
    
    case EGameStatus.Playing:
      GameProps.bait.draw();
      GameProps.snake.draw();
      GameProps.menu.setSnakeLengthAlpha(0.5);
      GameProps.menu.drawSnakeLength();
      GameProps.menu.scoreOnesX = 600;
      GameProps.menu.scoreOnesY = 10;
      GameProps.menu.scoreTensX = 675;
      GameProps.menu.scoreTensY = 10;
      GameProps.menu.scoreHundredX = 750;
      GameProps.menu.scoreHundredY = 10;
      GameProps.menu.scoreThousandsX = 825;
      GameProps.menu.scoreThousandsY = 10;
      GameProps.menu.setBaitScoreAlpha(0.5);
      GameProps.menu.drawScore();
      break;

    case EGameStatus.Pause:
      GameProps.bait.draw();
      GameProps.snake.draw();
      GameProps.menu.drawPauseMenu();
      GameProps.menu.setSnakeLengthAlpha(1);
      GameProps.menu.drawSnakeLength(); 
      GameProps.menu.setBaitScoreAlpha(1);
      GameProps.menu.drawScore();
      break;

    case EGameStatus.GameOver:
      GameProps.bait.draw();
      GameProps.snake.draw();
      GameProps.menu.drawGameOver();
      GameProps.menu.scoreOnesX = 510;
      GameProps.menu.scoreOnesY = 265;
      GameProps.menu.scoreTensX = 585;
      GameProps.menu.scoreTensY = 265;
      GameProps.menu.scoreHundredX = 660;
      GameProps.menu.scoreHundredY = 265;
      GameProps.menu.scoreThousandsX = 735;
      GameProps.menu.scoreThousandsY = 265;
      GameProps.menu.setBaitScoreAlpha(1);
      GameProps.menu.drawScore();
      break;
    
  }
  // Request the next frame
  requestAnimationFrame(drawGame);
}

//Update game
function updateGame() {
  switch (GameProps.gameStatus) {
    case EGameStatus.Playing:
      if (!GameProps.snake.update()) {
        GameProps.gameStatus = EGameStatus.GameOver;
        }
        break;
    }
  }

//Game speed
function increaseGameSpeed() {
  gameSpeed += 0.5;
    if (gameSpeed > 20) gameSpeed = 20; // limit max speed

    //needed to add this so game speed updates without pausing 
    clearInterval(hndUpdateGame); 
    hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed); 
    //console.log("Increase game speed to " + gameSpeed);
  }

//----------- Event handlers --------------------------------------------------------------

//Key down events
function onKeyDown(event) {
  switch (event.key) {
    // Arrow key and wasd snake movement
    case "ArrowUp":
    case "w":
    case "W":
    GameProps.snake.setDirection(EDirection.Up);
    break;
    case "ArrowDown":
    case "s":
    case "S":
    GameProps.snake.setDirection(EDirection.Down);
    break;
    case "ArrowLeft":
    case "a":
    case "A":
    GameProps.snake.setDirection(EDirection.Left);
    break;
    case "ArrowRight":
    case "d":
    case "D":
    GameProps.snake.setDirection(EDirection.Right);
    break;
      
    //Pause, unpause and restart game with space
    case " ":
      if (GameProps.gameStatus === EGameStatus.Playing) {
        GameProps.gameStatus = EGameStatus.Pause;
        clearInterval(hndUpdateGame);
      
        } else if (GameProps.gameStatus === EGameStatus.Pause) {
          GameProps.gameStatus = EGameStatus.Playing;
          hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed);
        } else if (GameProps.gameStatus === EGameStatus.GameOver){
          newGame();
        }
        break;
        
  }
}
//Mouse click events
function onCanvasClick(event) {
    
  if (GameProps.gameStatus === EGameStatus.Idle) {
    const rect = cvs.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // Check if click is inside the Play button's bounding box
    const btn = GameProps.menu.playButton;
    if (
      clickX >= btn.x &&
      clickX <= btn.x + btn.width * btn.scale &&
      clickY >= btn.y &&
      clickY <= btn.y + btn.height * btn.scale
    ) {
    newGame();
    }
  }
  //Resume button
  if (GameProps.gameStatus === EGameStatus.Pause) {
    const rect = cvs.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    const btn = GameProps.menu.ResumeButton;
    if (
        clickX >= btn.x &&
        clickX <= btn.x + btn.width * btn.scale &&
        clickY >= btn.y &&
        clickY <= btn.y + btn.height * btn.scale
      ) {
    GameProps.gameStatus = EGameStatus.Playing; 
    hndUpdateGame = setInterval(updateGame, 1000 / gameSpeed);
  }
}
  //Game over menu buttons
    if (GameProps.gameStatus === EGameStatus.GameOver) {
      const rect = cvs.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;

      //Home button  
      const homeBtn = GameProps.menu.homeButton;
        if (
        clickX >= homeBtn.x &&
        clickX <= homeBtn.x + homeBtn.width * homeBtn.scale &&
        clickY >= homeBtn.y &&
        clickY <= homeBtn.y + homeBtn.height * homeBtn.scale
      ) {
      GameProps.gameStatus = EGameStatus.Idle;
      return; 
      }
    
      //Retry button
      const retryBtn = GameProps.menu.retryButton;
        if (
        clickX >= retryBtn.x &&
        clickX <= retryBtn.x + retryBtn.width * retryBtn.scale &&
        clickY >= retryBtn.y &&
        clickY <= retryBtn.y + retryBtn.height * retryBtn.scale
        ) {
      newGame();
      GameProps.gameStatus = EGameStatus.Playing;
      return; 
      }
    }
  }

//----------- main -----------------------------------------------------------------------


spcvs.loadSpriteSheet("./Media/spriteSheet.png", loadGame);
document.addEventListener("keydown", onKeyDown);
cvs.addEventListener("click", onCanvasClick);
