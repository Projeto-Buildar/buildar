import utils from "./Utils";

export default class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.walls = config.walls || {}; // Adiciona paredes ao mapa

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

    drawLowerImage(ctx, cameraPerson) {
        if (this.isLowerImageLoaded) {
            ctx.drawImage(
                this.lowerImage,
                utils.withGrid(10) - cameraPerson.x,
                utils.withGrid(6) - cameraPerson.y);
        }
    }

    drawUpperImage(ctx, cameraPerson) {
        if (this.isUpperImageLoaded) {
            ctx.drawImage(
                this.upperImage,
                utils.withGrid(10) - cameraPerson.x,
                utils.withGrid(6) - cameraPerson.y);
        }
    }

    isSpaceTaken(currentX, currentY, direction) {
        console.log(currentX);
        const { x, y } = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] || false;
    }

    addWall(x, y) {
        this.walls[`${x},${y}`] = true;
    }

    removeWall(x, y) {
        delete this.walls[`${x},${y}`];
    }

    moveWall(wasX, wasY, direction) {
        this.removeWall(wasX, wasY);
        const { x, y } = utils.nextPosition(wasX, wasY, direction);
        this.addWall(x, y);
    }

    mountObjects() {
        Object.values(this.gameObjects).forEach(o => {
            o.mount(this);
        });
    }

    checkForActionCutscene() {
        const hero = this.gameObjects["hero"];
        const nextCoords = utils.nextPosition(hero.x, hero.y, hero.direction);
        const match = Object.values(this.gameObjects).find(object => {
            return `${object.x},${object.y}` === `${nextCoords.x},${nextCoords.y}`
        });
        console.log(match);
    }
}
