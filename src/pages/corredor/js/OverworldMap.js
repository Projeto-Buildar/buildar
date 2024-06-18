export default class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
        this.lowerImage.onload = () => {
            this.isLowerImageLoaded = true;
        };
        this.lowerImage.onerror = () => {
            console.error(`Failed to load lower image at ${config.lowerSrc}`);
        };

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
        this.upperImage.onload = () => {
            this.isUpperImageLoaded = true;
        };
        this.upperImage.onerror = () => {
            console.error(`Failed to load upper image at ${config.upperSrc}`);
        };
    }

    drawLowerImage(ctx) {
        if (this.isLowerImageLoaded) {
            ctx.drawImage(this.lowerImage, 0, 0);
        }
    }

    drawUpperImage(ctx) {
        if (this.isUpperImageLoaded) {
            ctx.drawImage(this.upperImage, 0, 0);
        }
    }
}
