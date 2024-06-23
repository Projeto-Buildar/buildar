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
        this.navigate = config.navigate; // Salva navigate na instância
        this.showMessage = config.showMessage;
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

            Object.values(this.map.gameObjects).sort((a,b) => {
                return a.y - b.y;
            }).forEach(object => {
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
            this.map.checkForActionCutscene(this.navigate, this.showMessage);
            // this.navigate('/'); // Use navigate para redirecionar ao pressionar Enter
        });
    }

    init() {
        this.map = new OverworldMap(Maps.DemoRoom);
        this.map.mountObjects();
        this.bindActionInput();

        const hero = this.map.gameObjects.hero;
        hero.direction = "down";

        
        
        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.startGameLoop();
        // this.bindHeroPositionCheck();
        console.log("foda")
        this.map.startCutscene([
            { who: "hero", type: "walk", direction: "down" },
            { who: "hero", type: "walk", direction: "down" },
            { who: "npcB", type: "walk", direction: "right" },
            { who: "npcB", type: "stand", direction: "up", time: 800 },
            { type: "textMessage", text: "Olá, seja bem-vindo a Buildar corporation!" },
            { type: "textMessage", text: "Aqui você irá a suas habilidades comportamentais" },
            { type: "textMessage", text: "Na sua direita teram portas para você treinar as suas habilidades" },
            { type: "textMessage", text: "E na sua esquerda tem o nosso joguinho de descanso, fique a vontade para jogar" },
            { who: "npcB", type: "walk", direction: "down" },
            { who: "npcB", type: "walk", direction: "left" },
            { who: "npcB", type: "walk", direction: "left" },
            { who: "hero", type: "walk", direction: "down" },
        ], this.showMessage);    
    }
}
