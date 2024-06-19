import OverworldMap from './OverworldMap'; // Importa a classe OverworldMap para criar o mapa do mundo
import DirectionInput from './DirectionInput'; // Importa a classe DirectionInput para lidar com entrada de direção
import Maps from './Maps'; // Importa o objeto Maps que contém definições de mapas
import KeyPressListener from './KeyPressListener'; // Importa a classe KeyPressListener para lidar com eventos de teclado

export default class Overworld {
    constructor(config) {
        this.element = config.element; // Elemento DOM onde o jogo será renderizado
        this.canvas = this.element.querySelector(".game-canvas"); // Seleciona o elemento canvas dentro do elemento principal
        this.ctx = this.canvas.getContext("2d"); // Contexto 2D do canvas para desenho
        this.map = null; // Referência ao mapa atual
        this.lastTime = 0; // Último tempo registrado para cálculo do deltaTime
        this.isRunning = false; // Indica se o jogo está em execução
        this.rafId = null; // ID da animação em execução (requestAnimationFrame)
    }

    // Método para iniciar o loop do jogo
    startGameLoop() {
        if (this.isRunning) return; // Se o jogo já estiver em execução, retorna

        this.isRunning = true; // Marca que o jogo está em execução

        // Função de passo para o loop do jogo
        const step = (currentTime) => {
            if (this.lastTime === 0) this.lastTime = currentTime; // Define o último tempo se não estiver definido
            const deltaTime = (currentTime - this.lastTime) / 1000; // Calcula o deltaTime em segundos
            this.lastTime = currentTime; // Atualiza o último tempo para o tempo atual

            
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpa o canvas

            const cameraPerson = this.map.gameObjects.hero; // Obtém o personagem da câmera
            this.map.drawUpperImage(this.ctx, cameraPerson); // Desenha a imagem superior do mapa
            this.map.drawLowerImage(this.ctx, cameraPerson); // Desenha a imagem inferior do mapa

            // Itera sobre todos os objetos do jogo para atualização e renderização
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction, // Direção atual do input do jogador
                    map: this.map, // Passa o mapa atual para os objetos
                    deltaTime, // Passa o deltaTime para atualizações baseadas no tempo
                });
                object.sprite.draw(this.ctx, cameraPerson); // Desenha o sprite do objeto
            });

            this.map.drawUpperImage(this.ctx, cameraPerson); // Desenha a imagem superior do mapa

            this.rafId = requestAnimationFrame(step); // Continua o loop do jogo
        }

        this.rafId = requestAnimationFrame(step); // Inicia o loop do jogo chamando a função de passo
    }

    // Método para parar o loop do jogo
    stopGameLoop() {
        if (this.rafId) { // Se houver uma animação em execução
            cancelAnimationFrame(this.rafId); // Cancela a animação
            this.rafId = null; // Reseta o ID da animação
            this.isRunning = false; // Marca que o jogo não está mais em execução
            this.lastTime = 0; // Reseta o último tempo
        }
    }

    // Método para vincular ações de input
    bindActionInput() {
        // Cria um KeyPressListener para ouvir a tecla "Enter" e executar uma ação
        new KeyPressListener("Enter", () => {
            this.map.checkForActionCutscene(); // Verifica e executa uma cutscene de ação no mapa
        });
    }

    // Método de inicialização do jogo
    init() {
        this.map = new OverworldMap(Maps.DemoRoom); // Cria um novo mapa do tipo OverworldMap usando o mapa DemoRoom
        this.map.mountObjects(); // Monta objetos no mapa
        this.bindActionInput(); // Vincula ações de input
        this.directionInput = new DirectionInput(); // Cria um novo objeto DirectionInput para lidar com entrada de direção
        this.directionInput.init(); // Inicializa o input de direção
        this.startGameLoop(); // Inicia o loop do jogo
    }
}
