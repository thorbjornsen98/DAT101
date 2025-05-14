import libSprite from "../../common/libs/libSprite.mjs";
import lib2d from "../../common/libs/lib2d.mjs";
import { GameProps } from "./FlappyBird.mjs";

class TObstacle  {
  #upper;
  #lower;  
  #spi;
  constructor(aSpriteCanvas, aSpriteInfo) {
    this.#spi = aSpriteInfo;

    const gapY = Math.random() * 230 - 280; 
    const gapSize = 100;

    const upperPos = new lib2d.TPosition(650, gapY)
    this.#upper = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, upperPos);
    this.#upper.index = 3;

    const lowerPos = new lib2d.TPosition(650, gapY + aSpriteInfo.height + gapSize);
    this.#lower = new libSprite.TSprite(aSpriteCanvas, aSpriteInfo, lowerPos);
    this.#lower.index = 2;
  }

  draw(){
    this.#upper.draw();
    this.#lower.draw();
  }

  update(){
    this.#upper.translate(-1, 0);
    this.#lower.translate(-1, 0);
  }

  get posX(){
    return this.#upper.posX
  }
}


export default TObstacle;