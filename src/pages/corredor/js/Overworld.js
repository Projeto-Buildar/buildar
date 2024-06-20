import OverworldMap from './OverworldMap';
import DirectionInput from './DirectionInput';
import Maps from './Maps';
import KeyPressListener from './KeyPressListener';
import utils from './Utils';

export default class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
        this.lastTime = 0;
        this.isRunning = false;
        this.rafId = null;
        this.navigate = config.navigate; // Salva navigate na instância
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
            this.map.drawUpperImage(this.ctx, cameraPerson);
            this.map.drawLowerImage(this.ctx, cameraPerson);

            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction,
                    deltaTime,
                    map: this.map
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
            this.map.checkForActionCutscene(this.navigate);
            // this.navigate('/'); // Use navigate para redirecionar ao pressionar Enter
        });
    }

    init() {
        this.map = new OverworldMap(Maps.DemoRoom);

        const hero = this.map.gameObjects.hero;
        hero.direction = "down";

        this.map.mountObjects();
        this.bindActionInput();
        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.startGameLoop();
    }
}
