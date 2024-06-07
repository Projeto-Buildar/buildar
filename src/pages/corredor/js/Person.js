import GameObject from './GameObject';

export default class Person extends GameObject {
    constructor(config) {
        super(config);
        this.movingProgressRemaining= 0;

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

    update(state){
        
        this.updatePosition();
        
        if(this.isPlayerControlled && this.movingProgressRemaining === 0 && state.arrow) {
            this.direction = state.arrow;
            
            this.movingProgressRemaining = Math.round(16 / this.speed);
            this.total = 0;
        }
        this.updateSprite(state);
    }

    updatePosition() {
        if(this.movingProgressRemaining > 0) {
            const [property, change] = this.directionUpdate[this.direction];
            this.total += this.speed;
            if(this.movingProgressRemaining !== 1) {           
            this[property] += change * this.speed;  
            
            }                 
            else if (this.movingProgressRemaining === 1) {
                this[property] += change * (this.speed !== 16 ? (this.speed + (16 - this.total)) : this.speed);
            }
            this.movingProgressRemaining -= 1;
        }
    }
    updateSprite(state) {
        
        if(this.isPlayerControlled && this.movingProgressRemaining === 0 && !state.arrow){
            this.sprite.setAnimation("idle-"+this.direction);
            return;
        }

        if(this.movingProgressRemaining > 0) {
            this.sprite.setAnimation("walk-"+this.direction);       
        }
        
    }

}