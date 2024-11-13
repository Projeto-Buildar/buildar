import GameObject from './GameObject'; // Importa a classe base GameObject
import utils from './Utils'; // Importa funções utilitárias

export default class Person extends GameObject {
  constructor(config) {
    super(config); // Chama o construtor da classe base com as configurações fornecidas
    this.movingProgressRemaining = 0; // Inicializa o progresso de movimento restante
    this.isPlayerControlled = config.isPlayerControlled || false; // Define se o personagem é controlado pelo jogador
    this.speed = this.isPlayerControlled ? 8 : 4; // Velocidade de movimento em unidades por segundo
    this.directionUpdate = { // Mapeia as direções de movimento e suas atualizações correspondentes
      "down": ["y", 1],
      "up": ["y", -1],
      "left": ["x", -1],
      "right": ["x", 1],
    };
    this.nome = config.nome;
    this.isStanding = false;
  }

  // Método chamado a cada quadro para atualizar o estado do personagem
  update(state) {
    if (this.movingProgressRemaining > 0) {
      this.updatePosition(state);
    } else {
      //state.map,isCutscenePlaying faz o player
      if (!state.map.isCutscenePlaying && this.isPlayerControlled && state.arrow) {
        this.startBehavior(state, {
          type: "walk",
          direction: state.arrow
        });
      }
      this.updateSprite();
    }
  }

  // Inicia um comportamento específico para o personagem (como andar)
  startBehavior(state, behavior) {
    if (this.movingProgressRemaining > 0) return; // Impede que um novo comportamento inicie enquanto há movimento pendente
    this.direction = behavior.direction; // Define a direção de movimento
    const xround = Math.round(this.x);
    const yround = Math.round(this.y);
    if (behavior.type === "walk") {
      // Check if space is taken before starting walk
      if (state.map.isSpaceTaken(xround, yround, this.direction)) {

        behavior.retry && setTimeout(() => {
          this.startBehavior(state, behavior)
        }, 10);

        return;
      }
      state.map.moveWall(xround, yround, this.direction);
      this.movingProgressRemaining = 16; // Define o progresso de movimento restante para 16 pixels (uma unidade específica do jogo)
      this.total = 0;
      this.updateSprite();
    }

    if (behavior.type === "stand") {
      this.isStanding = true;
      setTimeout(() => {
        utils.emitEvent("PersonStandComplete", {
          whoId: this.id
        })
        this.isStanding = false;
      }, behavior.time);
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
  updateSprite() {

    // Se o personagem estiver se movendo atualmente
    if (this.movingProgressRemaining > 0) {
      this.sprite.setAnimation("walk-" + this.direction); // Define a animação do sprite como caminhando na direção atual
      return;
    }
    // Se o personagem for controlado pelo jogador, não estiver se movendo atualmente e não houver direção de seta pressionada
    this.sprite.setAnimation("idle-" + this.direction); // Define a animação do sprite como parado na direção atual
  }
}