import Sprite from './Sprite';

import playerV1 from "../images/personagens/pessoa/hero.png";

class GameObject {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || playerV1,
            numeroDeFrames: config.numeroDeFrames,
            colunaY: config.colunaY,
            distanciaX: config.distanciaX,
            distanciaY: config.distanciaY,
            width: config.width,
            height: config.height,
            animationFrameLimit: config.animationFrameLimit
        });

    }
    update() {

    }
}

export default GameObject;