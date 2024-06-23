import utils from "./Utils";
import OverworldEvent from "./OverworldEvent";

export default class OverworldMap {
    constructor(config) {
        // Inicializa os gameObjects e walls a partir do config fornecido
        this.gameObjects = config.gameObjects;
        this.walls = config.walls || {}; // Adiciona paredes ao mapa (default vazio se não houver configuração)
        this.cutsceneSpaces = config.cutsceneSpaces || {};
        // Carrega e configura a imagem inferior (background do mapa)
        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
        this.lowerImage.onload = () => {
            this.isLowerImageLoaded = true; // Define flag quando a imagem inferior é carregada
        };
        this.lowerImage.onerror = () => {
            console.error(`Failed to load lower image at ${config.lowerSrc}`);
        };

        // Carrega e configura a imagem superior (detalhes do mapa)
        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
        this.upperImage.onload = () => {
            this.isUpperImageLoaded = true; // Define flag quando a imagem superior é carregada
        };
        this.upperImage.onerror = () => {
            console.error(`Failed to load upper image at ${config.upperSrc}`);
        };

        this.isCutscenePlaying = false;
    }

    // Método para desenhar a imagem inferior do mapa
    drawLowerImage(ctx, cameraPerson) {
        if (this.isLowerImageLoaded) {
            ctx.drawImage(
                this.lowerImage,
                utils.withGrid(10) - cameraPerson.x,
                utils.withGrid(6) - cameraPerson.y
            );
        }
    }

    // Método para desenhar a imagem superior do mapa
    drawUpperImage(ctx, cameraPerson) {
        if (this.isUpperImageLoaded) {
            ctx.drawImage(
                this.upperImage,
                utils.withGrid(10) - cameraPerson.x,
                utils.withGrid(6) - cameraPerson.y
            );
        }
    }

    // Verifica se a posição específica no mapa está ocupada por uma parede
    isSpaceTaken(currentX, currentY, direction) {
        const { x, y } = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] || false; // Retorna true se a posição está ocupada por uma parede
    }

    // Monta objetos no mapa chamando o método mount() de cada objeto
    mountObjects() {
        Object.keys(this.gameObjects).forEach(key => {
            let object = this.gameObjects[key];
            object.id = key;
            object.mount(this);
            // o.mount(this);   
        });
    }

    async startCutscene(events, showMessage) {
        this.isCutscenePlaying = true;
    
        // Inicia um loop de eventos assíncronos e aguarda cada um deles
        for (let i = 0; i < events.length; i++) {
            const eventHandler = new OverworldEvent({
                event: events[i],
                map: this,
                showMessage
            });
    
            await eventHandler.init();
        }
    
        this.isCutscenePlaying = false;
        // console.log (this.isCutscenePlaying);
    
        Object.values(this.gameObjects).forEach(object => object.doBehaviorEvent(this, showMessage))

    }

    // Verifica se há uma cutscene de ação na posição à frente do herói
    checkForActionCutscene(navegador,showMessage) {
        const hero = this.gameObjects["hero"]; // Obtém o objeto do herói
        const nextCoords = utils.nextPosition(Math.round(hero.x), Math.round(hero.y), hero.direction); // Calcula a próxima posição do herói

        if(nextCoords.x / 16 === 21 && nextCoords.y /16 === 8){
            navegador('/conteudo')
        } else if(nextCoords.x / 16 === 27 && nextCoords.y /16 === 8) {
            navegador('/pratica')
        }

        const match = Object.values(this.gameObjects).find(object => {
            return `${object.x},${object.y}` === `${nextCoords.x},${nextCoords.y}`;
        });
        
        if (!this.isCutscenePlaying && match && match.talking.length) {
            this.startCutscene(match.talking[0].events,showMessage)
        }
        
        // if(match){
        //     console.log(match.x / 16);
        //     if(match.nome === "adriana"){
        //         // console.log(match); // Exibe o objeto encontrado na próxima posição (se houver)
        //         navegador('/sobre');
        //     } else if(match.nome === "Carlos"){
        //         navegador('/sobre');
        //     }
        // }
        
    }

    // Adiciona uma parede na posição especificada
    addWall(x, y) {
        this.walls[`${x},${y}`] = true;
    }

    // Remove uma parede na posição especificada
    removeWall(x, y) {
        delete this.walls[`${x},${y}`];
    }

    // Move uma parede da posição especificada para a próxima posição na direção fornecida
    moveWall(wasX, wasY, direction) {
        this.removeWall(wasX, wasY);
        const { x, y } = utils.nextPosition(wasX, wasY, direction);
        this.addWall(x, y);
    }

}
