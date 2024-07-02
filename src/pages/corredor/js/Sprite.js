import sombra from "../images/shadow.png"; // Importa a imagem de sombra
import utils from "./Utils"; // Importa funções utilitárias

export default class Sprite {
    constructor(config) {
        // Propriedades para controle de carregamento das imagens
        this.isLoaded = false; // Indica se a imagem principal está carregada
        this.isShadowLoaded = false; // Indica se a imagem de sombra está carregada

        // Carrega a imagem principal do sprite
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        };
        this.image.onerror = () => {
            console.error(`Failed to load image at ${config.src}`);
        };

        // Carrega a imagem de sombra, se necessário
        this.shadow = new Image();
        this.useShadow = true; // Configuração para usar ou não a sombra
        if (this.useShadow) {
            this.shadow.src = sombra;
        }
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        };
        this.shadow.onerror = () => {
            console.error("Failed to load shadow image");
        };

        // Configurações do sprite
        this.numeroDeFrames = config.numeroDeFrames || 4; // Número de frames (default: 4)
        this.colunaY = config.colunaY; // Mapeamento das colunas por direção

        // Valor padrão para colunas por direção, se não especificado
        const defaultValue = {
            down: 0,
            right: 1,
            up: 2,
            left: 3
        };

        // Criação das animações
        this.animations = config.animations || {};

        // Definição das animações de idle e walk para cada direção
        ["down", "right", "up", "left"].forEach(direction => {
            // Animação de idle
            this.animations[`idle-${direction}`] = [[0, this.colunaY?.[direction] || defaultValue[direction]]];
            // Animação de walk
            this.animations[`walk-${direction}`] = this.defineFrames(this.numeroDeFrames, this.colunaY?.[direction] || defaultValue[direction]);
        });

        // Estado atual da animação
        this.currentAnimation = config.currentAnimation || "idle-down"; // Animação atual (default: idle-down)
        this.currentAnimationFrame = 0; // Frame atual da animação

        // Controle de progresso da animação
        this.animationFrameLimit = config.animationFrameLimit || 5; // Limite de frames por segundo (default: 10)
        this.animationFrameProgress = this.animationFrameLimit; // Progresso atual da animação

        // Referência ao objeto do jogo associado ao sprite
        this.gameObject = config.gameObject;

        // Configurações de posicionamento do sprite
        this.distanciaX = config.distanciaX || 8; // Distância horizontal do sprite
        this.distanciaY = config.distanciaY || 18; // Distância vertical do sprite
        this.width = config.width || 32; // Largura do frame do sprite
        this.height = config.height || 32; // Altura do frame do sprite
    }

    // Retorna o frame atual da animação
    get frame() {
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    // Define uma série de frames para uma animação específica
    defineFrames(n, nY) {
        const arrayFrames = [];
        for (let i = 0; i < n; i++) {
            arrayFrames.push([i, nY]);
        }
        return arrayFrames;
    }

    // Define uma nova animação
    setAnimation(key) {
        if (this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    // Atualiza o progresso da animação
    updateAnimationProgress() {
        if (this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;
        }

        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;

        // Reinicia a animação se o frame atual for indefinido
        if (this.frame === undefined) {
            if (this.gameObject.playOnce) {
                this.currentAnimationFrame -= 1; // Para no último frame
            } else {
                this.currentAnimationFrame = 0; // Reinicia a animação
            }
        }
    }

    // Desenha o sprite na tela
    draw(ctx, cameraPerson) {
        // Calcula as coordenadas de desenho levando em conta a posição do personagem na câmera
        const x = this.gameObject.x + utils.withGrid(10, 5) - cameraPerson.x;
        const y = this.gameObject.y + utils.withGrid(6) - cameraPerson.y;

        // Desenha a sombra, se carregada
        if (this.isShadowLoaded) {
            ctx.drawImage(this.shadow, x - 8, y - 18); // Desenha a sombra ajustando a posição
        }

        // Obtém as coordenadas do frame atual da animação
        const [frameX, frameY] = this.frame;

        // Desenha o frame do sprite principal, se carregado
        if (this.isLoaded) {
            ctx.drawImage(this.image,
                frameX * this.width, frameY * this.height, // Coordenadas do frame no sprite
                this.width, this.height, // Dimensões do frame
                x - this.distanciaX, y - this.distanciaY, // Posição do desenho na tela
                this.width, this.height // Tamanho do desenho na tela
            );
        }

        // Atualiza o progresso da animação para o próximo quadro
        this.updateAnimationProgress();
    }
}
