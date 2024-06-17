import GameObject from './GameObject';

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
    }

    update(state) {
        this.updatePosition(state);

        if (this.isPlayerControlled && this.movingProgressRemaining === 0 && state.arrow) {
            this.direction = state.arrow;
            this.movingProgressRemaining = 16; // Define o progresso de movimento para 16 pixels
        }

        this.updateSprite(state);
    }

    updatePosition(state) {
        if (this.movingProgressRemaining > 0) {
            let [property, change] = this.directionUpdate[this.direction];
            const moveAmount = change * this.speed * state.deltaTime * 16;

            // Verifica se o movimento ultrapassa os limites do canvas
            if (property === "x") {
                const nextX = this[property] + moveAmount;
                if (nextX < 0 || nextX > state.cWidth - 16) {
                    // Ajusta a posição para garantir que o personagem pare no limite do canvas
                    this[property] = Math.max(0, Math.min(state.cWidth - 16, nextX));
                    this.movingProgressRemaining = 0;
                    return;
                }
            } else if (property === "y") {
                const nextY = this[property] + moveAmount;
                if (nextY < 0 || nextY > state.cHeight - 16) {
                    // Ajusta a posição para garantir que o personagem pare no limite do canvas
                    this[property] = Math.max(0, Math.min(state.cHeight - 16, nextY));
                    this.movingProgressRemaining = 0;
                    return;
                }
            }

            // Garante que o movimento restante seja preciso
            const remainingMove = Math.abs(moveAmount) < Math.abs(this.movingProgressRemaining) ? Math.abs(moveAmount) : this.movingProgressRemaining;

            this[property] += change * remainingMove;
            this.movingProgressRemaining -= remainingMove;
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
