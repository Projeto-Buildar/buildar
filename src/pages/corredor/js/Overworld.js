import OverworldMap from './OverworldMap';
import DirectionInput from './DirectionInput';
import Maps from './Maps';
import KeyPressListener from './KeyPressListener';

export default class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
        this.lastTime = 0;
        this.isRunning = false;
        this.rafId = null;
    }

    startGameLoop() {
        if (this.isRunning) return;
        this.isRunning = true;

        const step = (currentTime) => {
            if (this.lastTime === 0) this.lastTime = currentTime;
            const deltaTime = (currentTime - this.lastTime) / 1000;
            this.lastTime = currentTime;

            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            const cameraPerson = this.map.gameObjects.hero;

            this.map.drawLowerImage(this.ctx, cameraPerson);

            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction,
                    // cWidth: this.canvas.width,
                    // cHeight: this.canvas.height,
                    map: this.map, // Passando o mapa atual
                    deltaTime,
                    
                });
                object.sprite.draw(this.ctx, cameraPerson);
            });

            this.map.drawUpperImage(this.ctx, cameraPerson);

            this.rafId = requestAnimationFrame(step);
        }
        this.rafId = requestAnimationFrame(step);
    }

    stopGameLoop() {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
            this.rafId = null;
            this.isRunning = false;
            this.lastTime = 0;
        }
    }

    bindActionInput() {
        new KeyPressListener("Enter", () => {
            this.map.checkForActionCutscene();
        });
    }

    init() {
        this.map = new OverworldMap(Maps.DemoRoom);
        this.map.mountObjects(); // Monte os objetos no mapa
        this.bindActionInput();
        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.startGameLoop();
    }
}
