"use strict";
import libSprite from "../../common/libs/libSprite_v2.mjs";
import lib2d from "../../common/libs/lib2d_v2.mjs";
import { GameProps, EGameStatus, SheetData } from "./game.mjs";

export class TMenu  {
#baitScore;
#spcvs;
#SpriteCanvas;
#snakeLengthAlpha = 0.5;
#baitScoreAlpha = 0.5;

   constructor(canvasElement, aSpriteCanvas) {
    this.#spcvs = canvasElement;       // For event listeners
    this.#SpriteCanvas = aSpriteCanvas;  // For drawing sprites
    

    // Snake Length
    this.snakeLengthX = 10;
    this.snakeLengthY = 10;

    // Bait Score
    this.baitScoreX = 800;
    this.baitScoreY = 10;
    
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
    const length = GameProps.snake?.SnakeLength ?? 0;
    const str = length.toString(); 

    const digitWidth = SheetData.Number.width;
    const spacing = digitWidth * 0.9; 
    const startX = this.snakeLengthX; // your base X position
    const y = this.snakeLengthY;

    for (let i = 0; i < str.length; i++) {
      const digit = parseInt(str[i]);

      const x = startX + i * spacing;

    const shape = {
      x: x,
      y: y,
      width: digitWidth,
      height: SheetData.Number.height,
      center: {
        x: x + digitWidth / 2,
        y: y + SheetData.Number.height / 2,
      },
    };

    const aSprite = {
      index: digit,            // selects the correct digit frame
      spi: SheetData.Number,
      shape: shape,
      rotation: 0,
      alpha: this.#snakeLengthAlpha,
      center: shape.center,
    };

    this.#spcvs.drawSprite(aSprite);
  }
}
// To modify alpha through different game states
  setSnakeLengthAlpha(alpha) {
  this.#snakeLengthAlpha = alpha;
}

  //Bait Score
  drawBaitScore(){
    const shape = {
      x: this.baitScoreX,
      y: this.baitScoreY,
      width: SheetData.Number.width,
      height: SheetData.Number.height,
      center: { x: this.baitScoreX + SheetData.Number.width / 2, y: this.baitScoreY + SheetData.Number.height / 2 },
    };

    const aSprite = {
      index: 8,            // selects the correct digit frame
      spi: SheetData.Number,
      shape: shape,
      rotation: 0,
      alpha: this.#baitScoreAlpha,
      center: shape.center,
    };

    this.#spcvs.drawSprite(aSprite);

  }
  // To modify alpha through different game states
   setBaitScoreAlpha(alpha) {
  this.#baitScoreAlpha = alpha;
  }
  // To relocate BaitScore for game over screen
  relocateBaitScore(){
  
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
  // i used this to find coords for homebtn and retrybtn
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
