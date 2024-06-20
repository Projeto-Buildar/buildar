import GameObject from './GameObject'; // Importa a classe base GameObject
import utils from './Utils'; // Importa funções utilitárias

export default class Person extends GameObject {
    constructor(config) {
        super(config); // Chama o construtor da classe base com as configurações fornecidas
        this.movingProgressRemaining = 0; // Inicializa o progresso de movimento restante
        this.isPlayerControlled = config.isPlayerControlled || false; // Define se o personagem é controlado pelo jogador
        this.speed = 8; // Velocidade de movimento em unidades por segundo
        this.directionUpdate = { // Mapeia as direções de movimento e suas atualizações correspondentes
            "down": ["y", 1],
            "up": ["y", -1],
            "left": ["x", -1],
            "right": ["x", 1],
        };
        this.nome = config.nome;
    }

    // Método chamado a cada quadro para atualizar o estado do personagem
    update(state) {
        this.updatePosition(state); // Atualiza a posição do personagem com base no estado atual
        // Se o personagem for controlado pelo jogador e não estiver se movendo atualmente e houver uma direção de seta pressionada
        if (this.isPlayerControlled && this.movingProgressRemaining === 0 && state.arrow) {
            this.startBehavior(state, { // Inicia o comportamento de movimento
                type: "walk",
                direction: state.arrow
            });
        }
        this.updateSprite(state); // Atualiza o sprite do personagem com base no estado atual
    }

    // Inicia um comportamento específico para o personagem (como andar)
    startBehavior(state, behavior) {
        this.direction = behavior.direction; // Define a direção de movimento
        if (behavior.type === "walk") { // Se o comportamento for caminhar
            const xRound = Math.round(this.x); // Posição arredondada do personagem no eixo x
            const yRound = Math.round(this.y); // Posição arredondada do personagem no eixo y
            // Verifica se o próximo espaço para onde o personagem está tentando se mover está ocupado por uma parede
            if (state.map.isSpaceTaken(xRound, yRound, this.direction)) {
                return; // Cancela o movimento se o próximo espaço estiver ocupado
            }
            state.map.moveWall(xRound, yRound, this.direction); // Move a parede no mapa para permitir o movimento
            this.movingProgressRemaining = 16; // Define o progresso de movimento restante para 16 pixels (uma unidade específica do jogo)
        }
    }

    // Atualiza a posição do personagem com base no estado atual do jogo
    updatePosition(state) {
        if (this.movingProgressRemaining > 0) { // Se ainda há progresso de movimento restante
            let [property, change] = this.directionUpdate[this.direction]; // Obtém a propriedade afetada e a mudança associada com base na direção atual
            const moveAmount = change * this.speed * state.deltaTime * 16; // Calcula a quantidade de movimento com base na velocidade e no tempo desde o último quadro

            // Garante que o movimento restante seja preciso
            const remainingMove = Math.abs(moveAmount) < Math.abs(this.movingProgressRemaining) ? Math.abs(moveAmount) : this.movingProgressRemaining;
            
            this[property] += change * remainingMove; // Atualiza a posição do personagem com base na mudança calculada
            this.movingProgressRemaining -= remainingMove; // Reduz o progresso de movimento restante pelo valor movido

            // Se o movimento restante for concluído
            if (this.movingProgressRemaining === 0) {
                this.intentPosition = null; // Limpa a posição intencional (se houver)
                utils.emitEvent("PersonWalkingComplete", { // Emite um evento de conclusão de movimento do personagem
                    whoId: this.id
                });
            }
        }
    }

    // Atualiza o sprite do personagem com base no estado atual do jogo
    updateSprite(state) {

        // Se o personagem estiver se movendo atualmente
        if (this.movingProgressRemaining > 0) {
            this.sprite.setAnimation("walk-" + this.direction); // Define a animação do sprite como caminhando na direção atual
            return;
        }
        // Se o personagem for controlado pelo jogador, não estiver se movendo atualmente e não houver direção de seta pressionada
            this.sprite.setAnimation("idle-" + this.direction); // Define a animação do sprite como parado na direção atual

        
    }
}
