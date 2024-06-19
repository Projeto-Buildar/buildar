import GameObject from './GameObject';
import utils from './Utils';

export default class Person extends GameObject {
    constructor(config) {
        super(config);
        this.movingProgressRemaining = 0;
        this.isPlayerControlled = config.isPlayerControlled || false;
        this.speed = 8; // Velocidade em unidades por segundo
        this.directionUpdate = {
            "down": ["y", 1],
            "up": ["y", -1],
            "left": ["x", -1],
            "right": ["x", 1],
        };
        this.total = 0;
    }

    update(state) {
        this.updatePosition(state);

        if (this.isPlayerControlled && this.movingProgressRemaining === 0 && state.arrow) {
            this.startBehavior(state, {
                type: "walk",
                direction: state.arrow
            });
        }

        this.updateSprite(state);
    }

    startBehavior(state, behavior) {
        this.direction = behavior.direction;
        if (behavior.type === "walk") {
            const xRound = Math.round(this.x);
            const yRound  = Math.round(this.y);
            // Verifica se o próximo espaço está ocupado
            if (state.map.isSpaceTaken(xRound, yRound, this.direction)) {
                return;
            }
            state.map.moveWall(xRound, yRound, this.direction);
            this.movingProgressRemaining = 16; // Define o progresso de movimento para 16 pixels
        }
    }

    updatePosition(state) {
        if (this.movingProgressRemaining > 0) {
            let [property, change] = this.directionUpdate[this.direction];
            const moveAmount = change * this.speed * state.deltaTime * 16;

            // Garante que o movimento restante seja preciso
            const remainingMove = Math.abs(moveAmount) < Math.abs(this.movingProgressRemaining) ? Math.abs(moveAmount) : this.movingProgressRemaining;
            
            this[property] += change * remainingMove;
            this.movingProgressRemaining -= remainingMove;
            
            
            if (this.movingProgressRemaining === 0) {     
                this.intentPosition = null;
                utils.emitEvent("PersonWalkingComplete", {
                    whoId: this.id
                });
            }
        }
    }

    updateSprite(state) {
        if (this.isPlayerControlled && this.movingProgressRemaining === 0 && !state.arrow) {
            this.sprite.setAnimation("idle-" + this.direction);
            return;
        }

        if (this.movingProgressRemaining > 0) {
            this.sprite.setAnimation("walk-" + this.direction);
        }
    }
}
