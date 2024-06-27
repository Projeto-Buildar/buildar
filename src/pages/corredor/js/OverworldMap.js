import utils from "./Utils";

export default class OverworldMap {
    constructor(config) {
        // Inicializa os gameObjects e walls a partir do config fornecido
        this.gameObjects = config.gameObjects;
        this.walls = config.walls || {}; // Adiciona paredes ao mapa (default vazio se não houver configuração)

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

    // Monta objetos no mapa chamando o método mount() de cada objeto
    mountObjects() {
        Object.values(this.gameObjects).forEach(o => {
            o.mount(this);
        });
    }

    // Verifica se há uma cutscene de ação na posição à frente do herói
    checkForActionCutscene() {
        const hero = this.gameObjects["hero"]; // Obtém o objeto do herói
        const nextCoords = utils.nextPosition(hero.x, hero.y, hero.direction); // Calcula a próxima posição do herói
        const match = Object.values(this.gameObjects).find(object => {
            return `${object.x},${object.y}` === `${nextCoords.x},${nextCoords.y}`;
        });
        console.log(match); // Exibe o objeto encontrado na próxima posição (se houver)
    }
}
