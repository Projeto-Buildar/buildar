import sombra from "../images/shadow.png"
import utils from "./Utils";

export default class Sprite {
    constructor(config) {
        this.isLoaded = false;
        this.isShadowLoaded = false;

        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        };
        this.image.onerror = () => {
            console.error(`Failed to load image at ${config.src}`);
        };

        this.shadow = new Image();
        this.useShadow = true; //config.useShadow || false
        if (this.useShadow) {
            this.shadow.src = sombra;
        }

        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        };
        this.shadow.onerror = () => {
            console.error("Failed to load shadow image");
        };

        this.numeroDeFrames = config.numeroDeFrames || 4;
        this.colunaY = config.colunaY;

        const defaultValue = {
            down: 0,
            right: 1,
            up: 2,
            left: 3
        };

        // Criação das animações
        this.animations = config.animations || {};

        // Definição das animações de caminhada
        ["down", "right", "up", "left"].forEach(direction => {
            this.animations[`idle-${direction}`] = [[0, this.colunaY?.[direction] || defaultValue[direction]]];
            this.animations[`walk-${direction}`] = this.defineFrames(this.numeroDeFrames, this.colunaY?.[direction] || defaultValue[direction]);
        });

        this.currentAnimation = config.currentAnimation || "idle-down";
        this.currentAnimationFrame = 0;

        this.animationFrameLimit = config.animationFrameLimit || 10;
        this.animationFrameProgress = this.animationFrameLimit;

        this.gameObject = config.gameObject;

        this.distanciaX = config.distanciaX || 8;
        this.distanciaY = config.distanciaY || 18;

        this.width = config.width || 32;
        this.height = config.height || 32;
    }

    get frame() {
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    defineFrames(n, nY) {
        var arrayFrames = [];
        for (var i = 0; i < n; i++) {
            arrayFrames.push([i, nY]);
        }
        return arrayFrames;
    }

    setAnimation(key) {
        if (this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        if (this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;
        }

        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;

        if (this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }
    }

    draw(ctx, cameraPerson) {
        const x = this.gameObject.x + utils.withGrid(10,5) - cameraPerson.x;
        const y = this.gameObject.y+ utils.withGrid(6) - cameraPerson.y;

        if (this.isShadowLoaded) {
            ctx.drawImage(this.shadow, x - 8, y - 18);
        }

        const [frameX, frameY] = this.frame;

        if (this.isLoaded) {
            ctx.drawImage(this.image,
                frameX * this.width, frameY * this.height,
                this.width, this.height,
                x - this.distanciaX, y - this.distanciaY,
                this.width, this.height
            );
        }

        this.updateAnimationProgress();
    }
}
