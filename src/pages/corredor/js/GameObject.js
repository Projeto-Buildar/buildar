import Sprite from './Sprite'; // Importa a classe Sprite
import playerV1 from "../images/personagens/pessoa/hero.png"; // Importa a imagem do jogador
import OverworldEvent from './OverworldEvent';

class GameObject {
    constructor(config) {
        this.id = null;
        this.isMounted = false;
        // Inicializa as propriedades do objeto com os valores do objeto config ou padrões
        this.x = config.x || 0; // Posição horizontal inicial ou 0 se não especificado
        this.y = config.y || 0; // Posição vertical inicial ou 0 se não especificado
        this.direction = config.direction || "down"; // Direção inicial ou "down" se não especificado
        // Cria um novo objeto Sprite com base nas configurações fornecidas
        this.sprite = new Sprite({
            gameObject: this, // Referência ao próprio objeto GameObject
            src: config.src || playerV1, // Fonte da imagem, padrão é playerV1 (hero.png) se não especificado
            numeroDeFrames: config.numeroDeFrames, // Número de frames da animação
            colunaY: config.colunaY, // Coluna Y da sprite sheet
            distanciaX: config.distanciaX, // Distância X entre os frames da sprite sheet
            distanciaY: config.distanciaY, // Distância Y entre os frames da sprite sheet
            width: config.width, // Largura da sprite
            height: config.height, // Altura da sprite
            animationFrameLimit: config.animationFrameLimit // Limite de frames para animação
        });
        this.behaviorLoop = config.behaviorLoop || [];
        this.behaviorLoopIndex = 0;

        this.talking = config.talking || [];
        this.nome = config.nome;
        this.playOnce = config.playOnce || false; // Adiciona uma flag para animação única
        this.hasPlayed = false; // Flag para saber se a animação já foi reproduzida
    }

    // Método para montar o objeto no mapa
    mount(map) {
        // console.log("Montando");
        this.isMounted = true; // Marca o objeto como montado
        map.addWall(this.x, this.y);

        // If we have a behavior, start after a small delay
        setTimeout(() => {
            this.doBehaviorEvent(map);
        }, 10);
    }

    // Método de atualização do objeto (pode ser implementado posteriormente)
    update() {
        // Este método pode ser usado para atualizar o estado do objeto
        // Exemplo: atualização da posição, verificação de colisões, etc.
        if (this.playOnce && !this.hasPlayed) {
            this.sprite.setAnimation('walk-down'); // Define a animação para abrir o elevador
            this.sprite.updateAnimationProgress(); // Atualiza o progresso da animação
            if (this.sprite.currentAnimationFrame === this.sprite.animations[this.sprite.currentAnimation].length - 1) {
                this.hasPlayed = true; // Marca que a animação foi reproduzida
            }
        }
    }

    async doBehaviorEvent(map, recebeTextoMensagem) {
        // Don't perform behavior if a cutscene is playing or if there's no behavior
        if (map.isCutscenePlaying || this.behaviorLoop.length === 0 || this.isStanding) {
            return;
        }

        // Get the next event configuration
        let eventConfig = this.behaviorLoop[this.behaviorLoopIndex];
        eventConfig.who = this.id;

        // Create the event
        const eventHandler = new OverworldEvent({ map, event: eventConfig, recebeTextoMensagem});
        await eventHandler.init();

        // Move to the next event in the loop
        this.behaviorLoopIndex += 1;
        if (this.behaviorLoopIndex === this.behaviorLoop.length) {
            this.behaviorLoopIndex = 0;
        }

        // Trigger the next behavior event
        this.doBehaviorEvent(map);
    }
}

export default GameObject; // Exporta a classe GameObject como padrão