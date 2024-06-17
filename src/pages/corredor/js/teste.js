import GameObject from './GameObject';

export default class Person extends GameObject {
    constructor(config) {
        super(config);
        this.movingProgressRemaining = 0;

        this.isPlayerControlled = config.isPlayerControlled || false;

        this.speed = 0.7;
        this.total = 0;

        this.directionUpdate = {
            "down": ["y", 1],
            "up": ["y", -1],
            "left": ["x", -1],
            "right": ["x", 1],
        }

    }

    update(state) {
        this.updatePosition(state);
        
        if (this.isPlayerControlled && this.movingProgressRemaining === 0 && state.arrow) {
            this.direction = state.arrow;
            this.movingProgressRemaining = Math.round(16 / this.speed);
            this.total = 0;
        }

        this.updateSprite(state);
    }

    updatePosition(state) {
        if (this.movingProgressRemaining > 0) {
            let [property, change] = this.directionUpdate[this.direction];
            this.total = (this.total * 10 + this.speed * 10) / 10;
            
            // Verificar se o personagem está prestes a sair dos limites
            if (property === "x") {
                if ((change === -1 && this.sprite.gameObject.x <= 0) || 
                    (change === 1 && this.sprite.gameObject.x + this.sprite.width - this.sprite.distanciaX >= state.cWidth + this.sprite.distanciaX)) {
                    this.movingProgressRemaining = 0;
                    return;
                }
            } else if (property === "y") {
                if ((change === -1 && this.sprite.gameObject.y <= 0) || 
                    (change === 1 && this.sprite.gameObject.y + this.sprite.height - this.sprite.distanciaY >= state.cHeight)) {
                    this.movingProgressRemaining = 0;
                    return;
                }
            }
            
            if (this.movingProgressRemaining !== 1) {
                this[property] += change * ((this.speed * 10) / 10);
            } else{
                const valor = ((this.speed * 10) / 10) + ((16 - this.total));
                this[property] += change * valor; 
            }
            
            this.movingProgressRemaining -= 1;


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