import utils from './Utils'; // Importa o módulo Utils que contém funções utilitárias
import Person from './Person'; // Importa a classe Person usada para criar personagens

// Importa as imagens dos mapas e personagens
import demoRoomLower from "../images/mapas/mapaLower.png";
import demoRoomUpper from "../images/mapas/mapaUpper.png";

import npc1 from "../images/personagens/pessoa/npc1.png";
import playerV2 from "../images/personagens/pessoa/img.png";

// Define um objeto Maps que contém diferentes mapas do jogo
const Maps = {
    // Mapa DemoRoom
    DemoRoom: {
        lowerSrc: demoRoomLower, // Caminho para a imagem do mapa inferior
        upperSrc: demoRoomUpper, // Caminho para a imagem do mapa superior (comentado)

        // Objetos do jogo presentes no mapa DemoRoom
        gameObjects: {
            // Personagem não jogador (NPC) (comentado)
            npc: new Person({
                x: utils.withGrid(10),
                y: utils.withGrid(9),
                src: npc1,
                nome: 'Rogerio'
            }),
            npc1: new Person({
                x: utils.withGrid(17),
                y: utils.withGrid(10),
                src: npc1,
                nome: 'Carlos'
            }),

            // Personagem jogador (herói)
            hero: new Person({
                isPlayerControlled: true, // Indica que o jogador controla este personagem
                x: utils.withGrid(11), // Posição X inicial do herói em grade
                y: utils.withGrid(9), // Posição Y inicial do herói em grade
                src: playerV2, // Caminho para a imagem do herói
                numeroDeFrames: 8, // Número de frames da animação do herói
                width: 24, // Largura do sprite do herói
                colunaY: { // Mapeamento das colunas de sprites por direção
                    "down": 0,
                    "up": 1,
                    "left": 2,
                    "right": 3
                },
                distanciaX: 4, // Distância em pixels entre os sprites na animação
                animationFrameLimit: 6 // Limite de frames da animação
            })
        },

        // Paredes presentes no mapa DemoRoom
        walls: {
            //16,16: true
            // Define as paredes do mapa usando coordenadas de grade convertidas por utilitários
            [utils.asGridCoord(4, 8)]: true,
            [utils.asGridCoord(5, 8)]: true,
            [utils.asGridCoord(6, 8)]: true,
            [utils.asGridCoord(7, 8)]: true,
            [utils.asGridCoord(8, 8)]: true,
            [utils.asGridCoord(9, 8)]: true,
            [utils.asGridCoord(10, 8)]: true,
            [utils.asGridCoord(11, 8)]: true,
            [utils.asGridCoord(12, 8)]: true,
            [utils.asGridCoord(13, 8)]: true,
            [utils.asGridCoord(14, 8)]: true,
            [utils.asGridCoord(15, 8)]: true,
            [utils.asGridCoord(16, 8)]: true,
            [utils.asGridCoord(17, 8)]: true,
            [utils.asGridCoord(18, 8)]: true,
            [utils.asGridCoord(19, 8)]: true,
            [utils.asGridCoord(20, 8)]: true,
            [utils.asGridCoord(21, 8)]: true,
            [utils.asGridCoord(22, 8)]: true,
            [utils.asGridCoord(23, 8)]: true,
            [utils.asGridCoord(24, 8)]: true,
            [utils.asGridCoord(25, 8)]: true,
            [utils.asGridCoord(26, 8)]: true,
            [utils.asGridCoord(27, 8)]: true,
            [utils.asGridCoord(28, 8)]: true,
            [utils.asGridCoord(29, 8)]: true,
            [utils.asGridCoord(25, 8)]: true,
            [utils.asGridCoord(26, 8)]: true,
            [utils.asGridCoord(27, 8)]: true,
            [utils.asGridCoord(28, 8)]: true,
            [utils.asGridCoord(29, 8)]: true,
            [utils.asGridCoord(30, 8)]: true,
            [utils.asGridCoord(31, 8)]: true,
            [utils.asGridCoord(32, 8)]: true,
            [utils.asGridCoord(34, 8)]: true,
            [utils.asGridCoord(35, 8)]: true,
            [utils.asGridCoord(36, 8)]: true,
            [utils.asGridCoord(37, 8)]: true,
            [utils.asGridCoord(5, 9)]: true,
            [utils.asGridCoord(9, 9)]: true,
            [utils.asGridCoord(13, 9)]: true,
            [utils.asGridCoord(38, 9)]: true,
            [utils.asGridCoord(38, 10)]: true,
            [utils.asGridCoord(38, 11)]: true,
            [utils.asGridCoord(38, 12)]: true,
            [utils.asGridCoord(38, 13)]: true,
            [utils.asGridCoord(38, 14)]: true,
            [utils.asGridCoord(38, 15)]: true,
            [utils.asGridCoord(0, 15)]: true,
            [utils.asGridCoord(1, 15)]: true,
            [utils.asGridCoord(2, 15)]: true,
            [utils.asGridCoord(3, 15)]: true,
            [utils.asGridCoord(4, 15)]: true,
            [utils.asGridCoord(5, 15)]: true,
            [utils.asGridCoord(6, 15)]: true,
            [utils.asGridCoord(5, 15)]: true,
            [utils.asGridCoord(7, 15)]: true,
            [utils.asGridCoord(8, 15)]: true,
            [utils.asGridCoord(9, 15)]: true,
            [utils.asGridCoord(9, 15)]: true,
            [utils.asGridCoord(10, 15)]: true,
            [utils.asGridCoord(11, 15)]: true,
            [utils.asGridCoord(12, 15)]: true,
            [utils.asGridCoord(13, 15)]: true,
            [utils.asGridCoord(14, 15)]: true,
            [utils.asGridCoord(15, 15)]: true,
            [utils.asGridCoord(16, 15)]: true,
            [utils.asGridCoord(17, 15)]: true,
            [utils.asGridCoord(18, 15)]: true,
            [utils.asGridCoord(19, 15)]: true,
            [utils.asGridCoord(20, 15)]: true,
            [utils.asGridCoord(21, 15)]: true,
            [utils.asGridCoord(22, 15)]: true,
            [utils.asGridCoord(23, 15)]: true,
            [utils.asGridCoord(24, 15)]: true,
            [utils.asGridCoord(25, 15)]: true,
            [utils.asGridCoord(26, 15)]: true,
            [utils.asGridCoord(27, 15)]: true,
            [utils.asGridCoord(28, 15)]: true,
            [utils.asGridCoord(29, 15)]: true,
            [utils.asGridCoord(30, 15)]: true,
            [utils.asGridCoord(31, 15)]: true,
            [utils.asGridCoord(32, 15)]: true,
            [utils.asGridCoord(34, 15)]: true,
            [utils.asGridCoord(35, 15)]: true,
            [utils.asGridCoord(36, 15)]: true,
            [utils.asGridCoord(37, 15)]: true,
            [utils.asGridCoord(3, 9)]: true,
            [utils.asGridCoord(3, 10)]: true,
            [utils.asGridCoord(3, 11)]: true,
            [utils.asGridCoord(3, 12)]: true,
            [utils.asGridCoord(3, 13)]: true,
            [utils.asGridCoord(3, 14)]: true,
            [utils.asGridCoord(3, 15)]: true,
            // [utils.asGridCoord(7, 4)]: true, porta
            // [utils.asGridCoord(18, 4)]: true, porta
            // [utils.asGridCoord(19, 4)]: true, porta
            // [utils.asGridCoord(7, 4)]: true, porta    
        }
    },
};

export default Maps; // Exporta o objeto Maps como padrão
