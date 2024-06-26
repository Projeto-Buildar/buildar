import utils from './Utils'; // Importa o módulo Utils que contém funções utilitárias
import Person from './Person'; // Importa a classe Person usada para criar personagens
import GameObject from './GameObject';

// Importa as imagens dos mapas e personagens
import demoRoomLower from "../images/mapas/mapaExtenso_lower.png";
import demoRoomUpper from "../images/mapas/mapaExtenso_upper.png";

import npc1 from "../images/personagens/pessoa/npc1.png";
import playerV2 from "../images/personagens/pessoa/img.png";

import Andrei from "../images/personagens/pessoa/Andrei.png";
import Aurora from "../images/personagens/pessoa/Aurora.png";
import Debora from "../images/personagens/pessoa/Debora.png";
import Drii from "../images/personagens/pessoa/Drii.png";
import Gabs from "../images/personagens/pessoa/gabs.png";
import Jaja from "../images/personagens/pessoa/Jaja.png";

// Define um objeto Maps que contém diferentes mapas do jogo
const Mapas = {
    // Mapa DemoRoom
    GestaoDeTempo: {
        lowerSrc: demoRoomLower, // Caminho para a imagem do mapa inferior
        upperSrc: demoRoomUpper, // Caminho para a imagem do mapa superior (comentado)

        // Objetos do jogo presentes no mapa DemoRoom
        gameObjects: {
            // Personagem não jogador (NPC) (comentado)    
            Debora1: new Person({
                x: utils.withGrid(21),
                y: utils.withGrid(9),
                src: Debora,
                // Talvez passar o nome para os eventos e ter uma tag especificando o nome do npc ou player na fala
                nome: 'Debora',
                behaviorLoop: [
                    //fazer a movimentação do npc (stand = giro ou parado) (walk = andando )
                    { type: "walk", direction: "left", time: 800 },
                    { type: "walk", direction: "up", time: 800 },
                    { type: "walk", direction: "right", time: 1200 },
                    { type: "walk", direction: "up", time: 300 },
                ],
                talking: [
                    {
                        events: [
                            //Evento de quando você for falar com o npc
                            { type: "textMessage", text: "Eu amo trabalhar aqui", faceHero: "Debora" },
                            { type: "textMessage", text: "Faço muitas atividades todos os dias", faceHero: "Debora" },
                            { type: "textMessage", text: "Mas sinto que as vezes não tenho tempo o suficiente para fazer as coisas", faceHero: "Debora" },
                            { type: "textMessage", text: "Ou será que eu só não estou gerindo bem o meu tempo...", faceHero: "Debora" }
                        ]
                    }
                ]
            }),
            Drii: new Person({
                x: utils.withGrid(8),
                y: utils.withGrid(9),
                src: Drii,
                nome: 'Adriana',
                behaviorLoop: [
                  { type: "stand", direction: "up"},
                ],
                talking: [
                    {
                        events: [
                            //Evento de quando você for falar com o npc
                            { type: "textMessage", text: "Aproveite a buildar", faceHero: "Drii" },
                        ]
                    }
                ]
            }),
            Gabs: new Person({
                x: utils.withGrid(27),
                y: utils.withGrid(6),
                src: Gabs,
                nome: 'Gabriel',
                behaviorLoop: [
                  { type: "stand", direction: "left", time: 2000},
                  { type: "stand", direction: "down", time: 800},
                  { type: "stand", direction: "right", time: 2000},
                  { type: "stand", direction: "down", time: 800},
                ],
                talking: [
                    {
                        events: [
                            //Evento de quando você for falar com o npc
                            { type: "textMessage", text: "Eu estou desenvolvendo minha gestão de tempo tão rápido como um Katchauuuu!", faceHero: "Gabs" },
                        ]
                    }
                ]
            }),
            // Gabs: new Person({
            //     x: utils.withGrid(27),
            //     y: utils.withGrid(6),
            //     src: Gabs,
            // }),
            // Andrei: new Person({
            //     x: utils.withGrid(28),
            //     y: utils.withGrid(6),
            //     src: Andrei,
            // }),
            // Aurora: new Person({
            //     x: utils.withGrid(29),
            //     y: utils.withGrid(6),
            //     src: Aurora,
            // }),
            // Jailson: new Person({
            //     x: utils.withGrid(30),
            //     y: utils.withGrid(6),
            //     src: Jaja,
            // }),
            // Drii: new Person({
            //     x: utils.withGrid(31),
            //     y: utils.withGrid(6),
            //     src: Drii,
            // }),
            // Debora: new Person({
            //     x: utils.withGrid(32),
            //     y: utils.withGrid(6),
            //     src: Debora,
            // }),
            // Personagem jogador (herói)
            player: new Person({
                isPlayerControlled: true, // Indica que o jogador controla este personagem
                x: utils.withGrid(8), // Posição X inicial do herói em grade
                y: utils.withGrid(6), // Posição Y inicial do herói em grade
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

        // você consegue definir coordenadas no mapa e eventos ao qual o player consegue interagir
        interacoes: {
            porta1: new GameObject({
                x: utils.withGrid(18),
                y: utils.withGrid(5),
                talking: [
                    {
                        events: [
                            { type: "textMessage", text: "Aqui é a primeira etapa da Gestão de tempo"},
                            { type: "redirecionarPagina", text: "/conteudo"},
                        ]
                    }
                ]
            }),
            porta2: new GameObject({
                x: utils.withGrid(24),
                y: utils.withGrid(5),
                talking: [
                    {
                        events: [
                            { type: "textMessage", text: "Está porta está trancada"},
                            { type: "textMessage", text: "É melhor eu explorar mais o lugar por enquanto"},
                            { who: "player", type: "walk", direction: "down" },
                        ]
                    }
                ]
            }),
            porta3: new GameObject({
                x: utils.withGrid(30),
                y: utils.withGrid(5),
                talking: [
                    {
                        events: [
                            //Evento de quando você for falar com o npc
                            { type: "textMessage", text: "Está porta leva para um lugar bem legal!"},
                            { type: "textMessage", text: "Mas você ainda não tem acesso :("},
                            
                        ]
                    }
                ]
            }),
            fliperama: new GameObject({
                x: utils.withGrid(2),
                y: utils.withGrid(6),
                talking: [
                    {
                        events: [
                            { type: "textMessage", text: "Está rodando o Famoso jogo Vivi Run"},
                            { type: "redirecionarPagina", text: "/gameLegal"},

                        ]
                    }
                ]
            }),
            bebedouro: new GameObject({
                x: utils.withGrid(33),
                y: utils.withGrid(8),
                talking: [
                    {
                        events: [
                            { type: "textMessage", text: "Glub Glub"},
                            { type: "textMessage", text: "Refrescante"},
                        ]
                    }
                ]
            }),
            maquinaDeVendasEsquerda: new GameObject({
                x: utils.withGrid(20),
                y: utils.withGrid(6),
                talking: [
                    {
                        events: [
                            { type: "textMessage", text: "Eu fico hipnotizado vendo os lanchinhos caindo quando eu compro"},
                        ]
                    }
                ]
            }),
            maquinaDeVendasDireita: new GameObject({
                x: utils.withGrid(21),
                y: utils.withGrid(6),
                talking: [
                    {
                        events: [
                            { type: "textMessage", text: "Eu fico hipnotizado vendo os lanchinhos caindo quando eu compro"},
                        ]
                    }
                ]
            }),
                    
        },
        // Paredes presentes no mapa DemoRoom
        walls: {
            //16,16: true
            // Define as paredes do mapa usando coordenadas de grade convertidas por utilitários
            [utils.asGridCoord(5, 9)]: true,
            [utils.asGridCoord(11, 9)]: true,
            [utils.asGridCoord(7, 10)]: true,
            [utils.asGridCoord(8, 10)]: true,
            [utils.asGridCoord(9, 10)]: true,
            [utils.asGridCoord(33, 8)]: true,
            [utils.asGridCoord(0, 6)]: true,
            [utils.asGridCoord(0, 7)]: true,
            [utils.asGridCoord(0, 8)]: true,
            [utils.asGridCoord(0, 9)]: true,
            [utils.asGridCoord(0, 10)]: true,
            [utils.asGridCoord(0, 11)]: true,
            [utils.asGridCoord(0, 12)]: true,
            [utils.asGridCoord(2, 6)]: true,
            [utils.asGridCoord(6, 6)]: true,
            [utils.asGridCoord(10, 6)]: true,
            [utils.asGridCoord(1, 5)]: true,
            [utils.asGridCoord(3, 5)]: true,
            [utils.asGridCoord(4, 5)]: true,
            [utils.asGridCoord(5, 5)]: true,
            [utils.asGridCoord(7, 5)]: true,
            [utils.asGridCoord(8, 5)]: true,
            [utils.asGridCoord(9, 5)]: true,
            [utils.asGridCoord(11, 5)]: true,
            [utils.asGridCoord(12, 5)]: true,
            [utils.asGridCoord(13, 5)]: true,
            [utils.asGridCoord(14, 5)]: true,
            [utils.asGridCoord(15, 5)]: true,
            [utils.asGridCoord(16, 5)]: true,
            [utils.asGridCoord(17, 5)]: true,
            [utils.asGridCoord(18, 5)]: true,
            [utils.asGridCoord(19, 5)]: true,
            [utils.asGridCoord(20, 6)]: true,
            [utils.asGridCoord(21, 6)]: true,
            [utils.asGridCoord(22, 5)]: true,
            [utils.asGridCoord(23, 5)]: true,
            [utils.asGridCoord(24, 5)]: true,
            [utils.asGridCoord(25, 5)]: true,
            [utils.asGridCoord(26, 5)]: true,
            [utils.asGridCoord(27, 5)]: true,
            [utils.asGridCoord(28, 5)]: true,
            [utils.asGridCoord(29, 5)]: true,
            [utils.asGridCoord(30, 5)]: true,
            [utils.asGridCoord(31, 5)]: true,
            [utils.asGridCoord(32, 5)]: true,
            [utils.asGridCoord(33, 5)]: true,
            [utils.asGridCoord(34, 6)]: true,
            [utils.asGridCoord(34, 7)]: true,
            [utils.asGridCoord(34, 8)]: true,
            [utils.asGridCoord(34, 9)]: true,
            [utils.asGridCoord(34, 10)]: true,
            [utils.asGridCoord(34, 11)]: true,
            [utils.asGridCoord(34, 12)]: true,
            [utils.asGridCoord(2, 13)]: true,
            [utils.asGridCoord(6, 13)]: true,
            [utils.asGridCoord(10, 13)]: true,
            [utils.asGridCoord(1, 13)]: true,
            [utils.asGridCoord(3, 13)]: true,
            [utils.asGridCoord(4, 13)]: true,
            [utils.asGridCoord(5, 13)]: true,
            [utils.asGridCoord(7, 13)]: true,
            [utils.asGridCoord(8, 13)]: true,
            [utils.asGridCoord(9, 13)]: true,
            [utils.asGridCoord(11, 13)]: true,
            [utils.asGridCoord(13, 13)]: true,
            [utils.asGridCoord(13, 13)]: true,
            [utils.asGridCoord(14, 13)]: true,
            [utils.asGridCoord(15, 13)]: true,
            [utils.asGridCoord(16, 13)]: true,
            [utils.asGridCoord(17, 13)]: true,
            [utils.asGridCoord(18, 13)]: true,
            [utils.asGridCoord(19, 13)]: true,
            [utils.asGridCoord(20, 13)]: true,
            [utils.asGridCoord(21, 13)]: true,
            [utils.asGridCoord(22, 13)]: true,
            [utils.asGridCoord(23, 13)]: true,
            [utils.asGridCoord(24, 13)]: true,
            [utils.asGridCoord(25, 13)]: true,
            [utils.asGridCoord(26, 13)]: true,
            [utils.asGridCoord(27, 13)]: true,
            [utils.asGridCoord(28, 13)]: true,
            [utils.asGridCoord(29, 13)]: true,
            [utils.asGridCoord(30, 13)]: true,
            [utils.asGridCoord(31, 13)]: true,
            [utils.asGridCoord(32, 13)]: true,
            [utils.asGridCoord(33, 13)]: true,
        }
    },
    Kitchen: {
        lowerSrc: npc1,
        // Objetos do jogo presentes no mapa DemoRoom
        gameObjects: {
            // Personagem não jogador (NPC) (comentado)    
            npcA: new Person({
                x: utils.withGrid(21),
                y: utils.withGrid(13),
                src: npc1,
                nome: 'Carlos',
                behaviorLoop: [
                    //fazer a movimentação do npc (stand = giro ou parado) (walk = andando )
                    { type: "stand", direction: "left", time: 800 },
                    { type: "stand", direction: "up", time: 800 },
                    { type: "stand", direction: "right", time: 1200 },
                    { type: "stand", direction: "up", time: 300 },
                ],
                talking: [
                    {
                        events: [
                            //Evento de quando você for falar com o npc
                            { type: "textMessage", text: "eiiiii man, some daqui", faceHero: "npcA" },
                        ]
                    }
                ]
            }),
            npcB: new Person({
                x: utils.withGrid(10),
                y: utils.withGrid(13),
                src: npc1,
                nome: 'adriana',
                src: npc1,
                behaviorLoop: [
                  { type: "walk", direction: "up"},
                  { type: "walk", direction: "right"},
                  { type: "walk", direction: "left"},
                  { type: "walk", direction: "down"},
                ],
                talking: [
                    {
                        events: [
                            //Evento de quando você for falar com o npc
                            { type: "textMessage", text: "Aproveite a buildar", faceHero: "npcB" },
                        ]
                    }
                ]
            }),
            // Personagem jogador (herói)
            player: new Person({
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
    }
};

export default Mapas; // Exporta o objeto Maps como padrão
