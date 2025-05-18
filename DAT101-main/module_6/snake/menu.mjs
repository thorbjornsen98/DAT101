"use strict";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import { GameProps, EGameStatus, SheetData } from "./game.mjs";

export class TMenu  {
#spcvs;
#SpriteCanvas;
#snakeLengthAlpha = 0.5;
#baitScoreAlpha = 0.5;

   constructor(canvasElement, aSpriteCanvas) {
    this.#spcvs = canvasElement;       // For event listeners
    this.#SpriteCanvas = aSpriteCanvas;  // For drawing sprites
    

    // Snake Length 1s
    this.snakeLengthOnesX = 10;
    this.snakeLengthOnesY = 10;

    
    // Snake Length 10s
    this.snakeLengthTensX = 85;
    this.snakeLengthTensY = 10;

    // Bait Score 1s
    this.scoreOnesX = 600;
    this.scoreOnesY = 10;

    // Bait Score 10s
    this.scoreTensX = 675;
    this.scoreTensY = 10;

    // Bait Score 100s
    this.scoreHundredX = 750;
    this.scoreHundredY = 10;

    // Bait Score 1000s
    this.scoreThousandsX = 825;
    this.scoreThousandsY = 10;
    
    // Resume Button for game unpause
    this.resumeBtnX = 356;
    this.resumeBtnY = 242;
  
    // Play button for game start
    this.playBtnX = 356;
    this.playBtnY = 242;
    
    // Gameover Screen
    this.gameOverX = 28;
    this.gameOverY = 52 ;


    //drawHome coords used to place retryBtn and homebtn
    //this.HomeX = 642;
    //this.HomeY = 400;
  }

  //Snake Length Display

  drawSnakeLength(){
    const onesShape = {
      x: this.snakeLengthOnesX,
      y: this.snakeLengthOnesY,
      width: SheetData.Number.width,
      height: SheetData.Number.height,
      center: { x: this.snakeLengthOnesX + SheetData.Number.width / 2, y: this.snakeLengthOnesY + SheetData.Number.height / 2 },
    };
    const digit1 = this.getDigitAt(GameProps.snake.SnakeLength, 0)
    const onesSprite = {
      index: digit1,          
      spi: SheetData.Number,
      shape: onesShape,
      rotation: 0,
      alpha: this.#snakeLengthAlpha,
      center: onesShape.center,
    };

     const tensShape = {
      x: this.snakeLengthTensX,
      y: this.snakeLengthTensY,
      width: SheetData.Number.width,
      height: SheetData.Number.height,
      center: { x: this.snakeLengthTensX + SheetData.Number.width / 2, y: this.snakeLengthTensY + SheetData.Number.height / 2 },
    };
    const digit2 = this.getDigitAt(GameProps.snake.SnakeLength, 1)
    const tensSprite = {
      index: digit2,       
      spi: SheetData.Number,
      shape: tensShape,
      alpha: this.#snakeLengthAlpha,
      center: tensShape.center,
    };

    this.#spcvs.drawSprite(onesSprite);
    this.#spcvs.drawSprite(tensSprite);
  }

// To modify alpha through different game states
  setSnakeLengthAlpha(alpha) {
  this.#snakeLengthAlpha = alpha;
}

 //pulls out different digit from numbers
  getDigitAt(num, index) { 
  return parseInt(num.toString()[index]);
}
  //Draw score (top right)
  drawScore(){ // Note i accidentally reversed all these names

    const onesShape = {
      x: this.scoreOnesX,
      y: this.scoreOnesY,
      width: SheetData.Number.width,
      height: SheetData.Number.height,
      center: { x: this.scoreOnesX + SheetData.Number.width / 2, y: this.scoreOnesY + SheetData.Number.height / 2 },
    };
    const digit1 = this.getDigitAt(GameProps.score, 0)
    const onesSprite = {
      index: digit1,          
      spi: SheetData.Number,
      shape: onesShape,
      rotation: 0,
      alpha: this.#baitScoreAlpha,
      center: onesShape.center,
    };

     const tensShape = {
      x: this.scoreTensX,
      y: this.scoreTensY,
      width: SheetData.Number.width,
      height: SheetData.Number.height,
      center: { x: this.scoreTensX + SheetData.Number.width / 2, y: this.scoreTensY + SheetData.Number.height / 2 },
    };
    const digit2 = this.getDigitAt(GameProps.score, 1)
    const tensSprite = {
      index: digit2,       
      spi: SheetData.Number,
      shape: tensShape,
      rotation: 0,
      alpha: this.#baitScoreAlpha,
      center: tensShape.center,
    };

    const hundredsShape = {
      x: this.scoreHundredX,
      y: this.scoreHundredY,
      width: SheetData.Number.width,
      height: SheetData.Number.height,
      center: { x: this.scoreHundredX + SheetData.Number.width / 2, y: this.scoreHundredY + SheetData.Number.height / 2 },
    };
    const digit3 = this.getDigitAt(GameProps.score, 2)
    const hundredsSprite = {
      index: digit3,       
      spi: SheetData.Number,
      shape: hundredsShape,
      rotation: 0,
      alpha: this.#baitScoreAlpha,
      center: hundredsShape.center,
    };


    const thousandsShape = {
      x: this.scoreThousandsX,
      y: this.scoreThousandsY,
      width: SheetData.Number.width,
      height: SheetData.Number.height,
      center: { x: this.scoreThousandsX + SheetData.Number.width / 2, y: this.scoreThousandsY + SheetData.Number.height / 2 },
    };
    const digit4 = this.getDigitAt(GameProps.score, 3)
    const thousandsSprite = {
      index: digit4,       
      spi: SheetData.Number,
      shape: thousandsShape,
      rotation: 0,
      alpha: this.#baitScoreAlpha,
      center: thousandsShape.center,
    };

    this.#spcvs.drawSprite(thousandsSprite);
    this.#spcvs.drawSprite(hundredsSprite);
    this.#spcvs.drawSprite(tensSprite);
    this.#spcvs.drawSprite(onesSprite);
    
  }
  // To modify alpha through different game states
   setBaitScoreAlpha(alpha) {
  this.#baitScoreAlpha = alpha;
  }

  // Start Menu
  drawStartMenu(){

    const shape = {
      x: this.playBtnX,
      y: this.playBtnY,
      width: SheetData.Play.width,
      height: SheetData.Play.height,
      center: { x: this.playBtnX + SheetData.Play.width / 2, y: this.playBtnY + SheetData.Play.height / 2 },
    };
    
    const aSprite = {
      index: 0,            
      spi: SheetData.Play, 
      shape: shape,
      rotation: 0,
      alpha: 1,
      center: shape.center,
    };

    this.#spcvs.drawSprite(aSprite);
 
  }
  // Play Button
  get playButton() {
    return {
      x: this.playBtnX,
      y: this.playBtnY,
      width: SheetData.Play.width,
      height: SheetData.Play.height,
      scale: 1,
    };
  }
  // Pause Menu
  drawPauseMenu() {
 
    const shape = {
      x: this.resumeBtnX,
      y: this.resumeBtnY,
      width: SheetData.Resume.width,
      height: SheetData.Resume.height,
      center: { x: this.resumeBtnX + SheetData.Resume.width / 2, y: this.resumeBtnY + SheetData.Resume.height / 2 },
    };


    const aSprite = {
      index: 0,            
      spi: SheetData.Resume, 
      shape: shape,
      rotation: 0,
      alpha: 1,
      center: shape.center,
    };

    this.#spcvs.drawSprite(aSprite);
  }
  //Resume Button
  get ResumeButton() {
    return {
      x: this.resumeBtnX,
      y: this.resumeBtnY,
      width: SheetData.Resume.width,
      height: SheetData.Resume.height,
      scale: 1,
    };
  }
  // Game over menu
  drawGameOver(){
    const shape = {
      x: this.gameOverX,
      y: this.gameOverY,
      width: SheetData.GameOver.width,
      height: SheetData.GameOver.height,
      center: { x: this.gameOverX + SheetData.GameOver.width / 2, y: this.gameOverY + SheetData.GameOver.height / 2 },
    };


    const aSprite = {
      index: 0,            
      spi: SheetData.GameOver, 
      shape: shape,
      rotation: 0,
      alpha: 1,
      center: shape.center,
    };

    this.#spcvs.drawSprite(aSprite);
  }
  // i used this to find coords for homebtn and retrybtn then commented it 
  // out since the buttons are already visible in the gameover sprite 
  drawHome(){
    const shape = {
      x: this.HomeX,
      y: this.HomeY,
      width: SheetData.Home.width,
      height: SheetData.Home.height,
      center: { x: this.HomeX + SheetData.Home.width / 2, y: this.HomeY + SheetData.Home.height / 2 },
    };

    const aSprite = {
      index: 0,            
      spi: SheetData.Home, 
      shape: shape,
      rotation: 0,
      alpha: 0.5,
      center: shape.center,
    };

    //this.#spcvs.drawSprite(aSprite);
  }
  //HomeButton
  get homeButton() {
    return {
      x: 96,
      y: 400,
      width: SheetData.Home.width,
      height: SheetData.Home.height,
      scale: 1,
    };

  }
  //retryButton
  get retryButton() {
    return {
      x: 642,
      y: 400,
      width: SheetData.Retry.width,
      height: SheetData.Retry.height,
      scale: 1,
    };
  }
} // End TMenu
