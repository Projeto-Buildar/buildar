import ConfiguracaoMapaGame from './ConfiguracaoMapaGame';
import DirectionInput from './DirectionInput';
import Mapas from './Mapas';
import KeyPressListener from './KeyPressListener';
import useControleDeTraducao from '../../../useControleDeTraducao';


export default class Game {
    constructor(config) {

        // recebe as informações da div com classe .game-container
        this.element = config.element;

        //recebe as informações da filha de .gama-container, que no caso é a tag canvas
        this.canvas = this.element.querySelector(".game-canvas");

        // deixa a tag canvas num contexto 2d, o que permite renderizar e desenhas coisas nela dinamicamente
        this.ctx = this.canvas.getContext("2d");

        // variavel que vai receber o mapa que será renderizado no Game
        this.map = null;

        // Variaveis para fazer o jogo funcionar de forma mais suave as animações,e utilizado para pausar o jogo caso necessário
        this.lastTime = 0;
        this.isRunning = false;
        this.rafId = null;

        // this.playerPosition = config.playerPosition;

        // Recebe as informações enviadas pelo Corredor -> Inicializador, que serão utilizadas especificamente pela classe ConfiguracaoMapaGame
        this.configMapa = {
            navegarParaPagina: config.navegarParaPagina,
            recebeTextoMensagem: config.recebeTextoMensagem,
            mapas: (Mapas[config.mapas || 'GestaoDeTempo'])
        }
    }
    

    startGameLoop() {
        if (this.isRunning) return;
        this.isRunning = true;
        const cameraPerson = this.map.gameObjects.player;
        const step = (currentTime) => {
            if (this.lastTime === 0) this.lastTime = currentTime;
            const deltaTime = (currentTime - this.lastTime) / 1000;
            this.lastTime = currentTime;
            
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            
            
            
            this.map.drawLowerImage(this.ctx, cameraPerson);
            this.map.drawUpperImage(this.ctx, cameraPerson);
            // this.map.drawUpperImage(this.ctx, cameraPerson);
            // this.map.drawUpperImage(this.ctx, cameraPerson);

            Object.values(this.map.gameObjects).sort((a, b) => {
                return a.y - b.y;
            }).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction,
                    deltaTime,
                    map: this.map,

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
            this.map.checkForActionCutscene(this.navegarParaPagina);
            // this.navegarParaPagina('/'); // Use navegarParaPagina para redirecionar ao pressionar Enter
        });
    }

    startInitialCutscene() {
        return this.map.startCutscene([
            { who: "player", type: "walk", direction: "down" },
            { who: "player", type: "stand", direction: "right" },
            { who: "Drii", type: "walk", direction: "down" },
            { who: "Drii", type: "walk", direction: "left" },
            { who: "Drii", type: "walk", direction: "left" },
            { type: "textMessage", text: "Olá, seja bem-vindo a Buildar corporation!" },
            { type: "textMessage", text: "Aqui você irá colocar em prática suas habilidades comportamentais" },
            { type: "textMessage", text: "Na sua direita teram portas para você treinar as suas habilidades" },
            { type: "textMessage", text: "E na sua esquerda tem o nosso joguinho de descanso, fique a vontade para jogar" },
            { who: "Drii", type: "walk", direction: "right" },
            { who: "Drii", type: "walk", direction: "right" },
            { who: "Drii", type: "walk", direction: "up" },
            { who: "Drii", type: "stand", direction: "down" },
        ]);
    }


    // posicaoInicialDoPlayer(playerPosition) {
    //     const player = this.map.gameObjects.player;
    //     player.direction = "down";
    //     player.x = utils.withGrid(playerPosition.x);
    //     player.y = utils.withGrid(playerPosition.y)
    // }

    resetGame() {
        // Pare o loop do jogo
        this.stopGameLoop();

        // Redefina o mapa e outros estados do jogo
        this.map = new ConfiguracaoMapaGame(this.configMapa);
        this.map.mountObjects();

        // Inicie o loop do jogo novamente
        this.startGameLoop();
    }

    coiso(){
        alert("dudu maravilhoso");
    }


    inicializaGame() {
        // Instancia o mapa para ser renderizado
        this.map = new ConfiguracaoMapaGame(this.configMapa);

        this.map.mountObjects();
        this.bindActionInput();
        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.startGameLoop();
        // this.bindHeroPositionCheck();
    }
}