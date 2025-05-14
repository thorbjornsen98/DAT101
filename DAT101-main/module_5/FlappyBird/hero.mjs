import { GameProps } from "./FlappyBird.mjs";
import libSprite from "../../common/libs/libSprite.mjs";
import libSound from "../../common/libs/libSound.mjs";


class THero extends libSprite.TSprite {
#spi;
#gravity = 9.81 / 100;
#velocity = 0;
#flappySound;


constructor(aSpriteCanvas, aSpriteInfo, aPosition) {
  super(aSpriteCanvas, aSpriteInfo, aPosition);
  this.#spi = aSpriteInfo;
  this.animateSpeed = 10;

   this.#flappySound = new Audio("./Media/flap.mp3");
    this.#flappySound.preload = "auto";
}

draw() {
  super.draw();
}

update() {
    this.posY += this.#velocity;
    
    this.#velocity += this.#gravity;
    
    const groundY = GameProps.ground.posY;
    if (this.posY + this.#spi.height > groundY) {
      this.posY = groundY - this.#spi.height;
      this.#velocity = 0;
    }
    
    if (this.posY < 0) {
      this.posY = 0;
      this.#velocity = 0;
    }
  }

  flap() {
    console.log("Flap called!");
    this.#velocity = -3;
    if (!GameProps.soundMuted) {
       this.#flappySound.currentTime = 0; 
      this.#flappySound.play().catch(e => {
    });
  }
}
}
export default THero;