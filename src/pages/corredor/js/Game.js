import ConfiguracaoMapaGame from './ConfiguracaoMapaGame';
import DirectionInput from './DirectionInput';
import Mapas from './Mapas';
import KeyPressListener from './KeyPressListener';
import useControleDeTraducao from '../../../useControleDeTraducao';
import utils from './Utils';


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
        this.podeVerificarCutscene = false;
        // this.playerPosition = config.playerPosition;

        // Recebe as informações enviadas pelo Corredor -> Inicializador, que serão utilizadas especificamente pela classe ConfiguracaoMapaGame
        this.configMapa = {
            navegarParaPagina: config.navegarParaPagina,
            recebeTextoMensagem: config.recebeTextoMensagem,
            mapas: (Mapas[config.mapas || 'GestaoDeTempo'])
        }
    }
    
    terminaCut(){
        this.map.isCutscenePlaying = false;
    }

    checkImagesLoaded() {
        return this.isLowerImageLoaded && this.isUpperImageLoaded;
    }
    
    // Dentro do seu loop de jogo, use esse método para garantir que o jogo só comece quando as imagens estiverem carregadas.
    startGameLoop() {
        if (this.isRunning) return;
        this.isRunning = true;
        
        const step = (currentTime) => {
            
            if (this.lastTime === 0) this.lastTime = currentTime;
            
            const deltaTime = (currentTime - this.lastTime) / 1000;
            this.lastTime = currentTime;
            
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            const cameraPerson = this.map.gameObjects.player;
            this.map.defineOffset(cameraPerson)

            this.map.drawLowerImage(this.ctx);
            Object.values(this.map.gameObjects).sort((a, b) => {
                return a.y - b.y;
            }).forEach(object => {
                object.sprite.defineOffsets(cameraPerson)              
            });

            Object.values(this.map.gameObjects).sort((a, b) => {
                return a.y - b.y;
            }).forEach(object => {
                object.sprite.draw(this.ctx, cameraPerson);
                object.update({
                    arrow: this.directionInput.direction,
                    deltaTime,
                    map: this.map,

                });
                
            });
            this.map.drawUpperImage(this.ctx);

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

    comecaJogo(){
        return this.map.startCutscene([
            { who: "player", type: "walk", direction: "down" },
        ], "", true);
    }

    startInitialCutscene() {
this.map.removeWall(utils.withGrid(8), utils.withGrid(5))

        return this.map.startCutscene([
            { who: "player", type: "stand", direction: "down", time: 100 },
            { who: "player", type: "walk", direction: "down" },
            { who: "player", type: "walk", direction: "down" },
            { who: "player", type: "stand", direction: "left", time: 800 },
            { who: "player", type: "stand", direction: "right", time: 800 },
            { who: "Drii", type: "stand", direction: "left", time: 800 },
            { type: "textMessage", text: "Ei, Fofolete!" },
            // { who: "player", type: "walk", direction: "down" },
            { who: "player", type: "stand", direction: "right" },
            { who: "Drii", type: "walk", direction: "down" },
            { who: "Drii", type: "walk", direction: "left" },
            { who: "Drii", type: "walk", direction: "left" },
            { type: "textMessage", text: "GestaoDeTempo1" },
            { type: "textMessage", text: "GestaoDeTempo2" },
            { type: "textMessage", text: "GestaoDeTempo3" },
            { type: "textMessage", text: "GestaoDeTempo4" },
            { who: "Drii", type: "walk", direction: "right" },
            { who: "Drii", type: "walk", direction: "right" },
            { who: "Drii", type: "walk", direction: "up" },
            { who: "Drii", type: "stand", direction: "down" },
        ], "Adriana", true);

    }

paredes(){
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