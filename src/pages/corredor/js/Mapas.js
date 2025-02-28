import utils from './Utils'; // Importa o módulo Utils que contém funções utilitárias
import Person from './Person'; // Importa a classe Person usada para criar personagens
import GameObject from './GameObject';

// Importa as imagens dos mapas e personagens
import demoRoomLower from "../images/mapas/mapaExtenso_lower.png";
import demoRoomUpper from "../images/mapas/mapaExtenso_upper.png";

// import npc1 from "../images/personagens/pessoa/npc1.png";
import playerV2 from "../images/personagens/pessoa/personagem_Rogerio.png";
import playerV3 from "../images/personagens/pessoa/personagem_Malu.png";
import playerV4 from "../images/personagens/pessoa/personagem_Tobias.png";

import Andrei from "../images/personagens/pessoa/Andrei.png";
import Aurora from "../images/personagens/pessoa/Aurora.png";
import Debora from "../images/personagens/pessoa/Debora.png";
import Drii from "../images/personagens/pessoa/Drii.png";
import Gabs from "../images/personagens/pessoa/gabs.png";
import Jaja from "../images/personagens/pessoa/Jaja.png";

import Elevador from '../images/mapas/elevador.png'

import { getNomeUsuario } from '../../../shared/useNomeUsuario';
import { tParaDialogos } from './tParaDialogos';

// import useControleDeTraducao from '../../../shared/useControleDeTraducao';

// Mapeia os avatares ao ID
const avatarMap = {
    'avatar1': playerV2,
    'avatar2': playerV3,
    'avatar3': playerV4
};

const selectedSkinId = localStorage.getItem('selectedSkin');
const selectedAvatar = avatarMap[selectedSkinId] || playerV2;

// const tParaDialogos = (tiposChaves = {}, chave = {}, valor, tag) => {
//     let chaveDeDialogo = tiposChaves.npcs ? "npcs." : 'interacoes.';
//     const ultimaChave = tiposChaves.nome ? ".tNome" : `.texto${chave.n}`;

//     return {
//         chave: ("corredor." + chaveDeDialogo + chave.t + ultimaChave), 
//         valor: valor,
//         tag: tag
//     }
// }

// Define um objeto Maps que contém diferentes mapas do jogo
const Mapas = {
    // Mapa DemoRoom
    GestaoDeTempo: {
        lowerSrc: demoRoomLower, // Caminho para a imagem do mapa inferior
        upperSrc: demoRoomUpper, // Caminho para a imagem do mapa superior (comentado)

        // Objetos do jogo presentes no mapa DemoRoom
        gameObjects: {
            Drii: new Person({
                x: utils.withGrid(11),
                y: utils.withGrid(6),
                src: Drii,
                nome: tParaDialogos(
                    { npcs: true, nome: true, },
                    {t: "" },
                    "Adriana"
                ),
                behaviorLoop: [
                    { type: "stand", direction: "down", time: 800 },
                ],
                talking: [
                    {
                        events: [
                            //Evento de quando você for falar com o npc
                            {
                                type: "textMessage",
                                text: tParaDialogos(
                                    { npcs: true, nome: false, },
                                    { t: "npc1", n: 1 }
                                ),
                                faceHero: "Drii"
                            },
                        ]
                    }
                ]
            }),
            // Personagem não jogador (NPC) (comentado)    
            Debora: new Person({
                x: utils.withGrid(21),
                y: utils.withGrid(9),
                src: Debora,
                // Talvez passar o nome para os eventos e ter uma tag especificando o nome do npc ou player na fala
                nome: tParaDialogos(
                    { npcs: true, nome: true, },
                    {t: ""  },
                    "Debora"
                ),
                behaviorLoop: [
                    //fazer a movimentação do npc (stand = giro ou parado) (walk = andando )
                    { type: "stand", direction: "up", time: 800 },
                    { type: "stand", direction: "right", time: 10000 },
                    // { type: "stand", direction: "up", time: 300 },
                    // { type: "stand", direction: "left", time: 800 },
                ],
                talking: [
                    {
                        events: [
                            //Evento de quando você for falar com o npc
                            { type: "textMessage", 
                                text: tParaDialogos(
                                    {npcs: true, nome: false, },
                                    { t:"npc2", n: 1}
                                ), 
                                faceHero: "Debora" },
                            { type: "textMessage", text: tParaDialogos(
                                {npcs: true, nome: false, },
                                { t:"npc2", n: 2}
                            ), faceHero: "Debora" },
                            { type: "textMessage", text: tParaDialogos(
                                {npcs: true, nome: false, },
                                { t:"npc2", n: 3}
                            ), faceHero: "Debora" },
                            { type: "textMessage", text: tParaDialogos(
                                {npcs: true, nome: false, },
                                { t:"npc2", n: 4}
                            ), faceHero: "Debora" },
                        ]
                    }
                ]
            }),
            Gabs: new Person({
                x: utils.withGrid(27),
                y: utils.withGrid(6),
                src: Gabs,
                nome: tParaDialogos(
                    { npcs: true, nome: true, },
                    {t: ""  },
                    "Gabriel"
                ),
                behaviorLoop: [
                    { type: "stand", direction: "left", time: 2000 },
                    { type: "stand", direction: "down", time: 800 },
                    { type: "stand", direction: "right", time: 2000 },
                    { type: "stand", direction: "down", time: 800 },
                ],
                talking: [
                    {
                        events: [
                            //Evento de quando você for falar com o npc
                            { type: "textMessage", text: tParaDialogos(
                                {npcs: true, nome: false, },
                                { t:"npc3", n: 1}, "" , {tipoAnim: "wave-letter"} 
                            ), faceHero: "Gabs" },
                        ]
                    }
                ]
            }),
            // Gabs: new Person({
            //     x: utils.withGrid(27),
            //     y: utils.withGrid(6),
            //     src: Gabs,
            // }),
            Andrei: new Person({
                x: utils.withGrid(4),
                y: utils.withGrid(6),
                src: Andrei,
                nome: tParaDialogos(
                    { npcs: true, nome: true, },
                    {t: ""  },
                    'Andrei'
                ),
                behaviorLoop: [
                    { type: "stand", direction: "down", time: 800 },
                ],
                talking: [
                    {
                        events: [
                            //Evento de quando você for falar com o npc
                            { type: "textMessage", text: tParaDialogos(
                                {npcs: true, nome: false, },
                                { t:"npc4", n: 1}
                            ), faceHero: "Andrei" },
                        ]
                    }
                ]
            }),
            Aurora: new Person({
                x: utils.withGrid(22),
                y: utils.withGrid(9),
                src: Aurora,
                nome: tParaDialogos(
                    { npcs: true, nome: true, },
                    {t: ""  },
                    'Aurora'
                ),
                behaviorLoop: [
                    { type: "stand", direction: "left", time: 10800 },
                    { type: "stand", direction: "up", time: 800 },
                ],
                talking: [
                    {
                        events: [
                            //Evento de quando você for falar com o npc
                            { type: "textMessage", text: tParaDialogos(
                                {npcs: true, nome: false, },
                                { t:"npc5", n: 1}
                            )},
                            { type: "textMessage", text: tParaDialogos(
                                {npcs: true, nome: false, },
                                { t:"npc5", n: 2}
                            ) },
                        ]
                    }
                ]
            }),
            Jailson: new Person({
                x: utils.withGrid(33),
                y: utils.withGrid(10),
                src: Jaja,
                nome: tParaDialogos(
                    { npcs: true, nome: true, },
                    { t: ""  },
                    'Jailson'
                ),
                behaviorLoop: [
                    { type: "stand", direction: "left", time: 800 },
                ],
                talking: [
                    {
                        events: [
                            //Evento de quando você for falar com o npc
                            { type: "textMessage", text: tParaDialogos(
                                {npcs: true, nome: false, },
                                { t:"npc6", n: 1}
                            ), faceHero: "Jailson" },
                            { type: "textMessage", text: tParaDialogos(
                                {npcs: true, nome: false, },
                                { t:"npc6", n: 2}
                            ), faceHero: "Jailson" },
                            { type: "textMessage", text: tParaDialogos(
                                {npcs: true, nome: false, },
                                { t:"npc6", n: 3}
                            ), faceHero: "Jailson" },

                        ]
                    }
                ]
            }),
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
                x: utils.withGrid(8),
                y: utils.withGrid(5), // Posição Y inicial do herói em grade
                src: selectedAvatar, // Caminho para a imagem do herói
                numeroDeFrames: 8, // Número de frames da animação do herói
                width: 24, // Largura do sprite do herói
                colunaY: { // Mapeamento das colunas de sprites por direção
                    "down": 0,
                    "up": 1,
                    "left": 2,
                    "right": 3
                },
                distanciaX: 4, // Distância em pixels entre os sprites na animação
                animationFrameLimit: 6, // Limite de frames da animação

            }),
            elevador: new GameObject({
                x: utils.withGrid(8),
                y: utils.withGrid(5),
                src: Elevador,
                numeroDeFrames: 8, // Número de frames da animação do herói
                width: 32, // Largura do sprite do herói
                height: 32,
                animationFrameLimit: 8,
                playOnce: true, // Define que a animação deve tocar uma única vez
            }),
        },

        // você consegue definir coordenadas no mapa e eventos ao qual o player consegue interagir
        interacoes: {
            // Atenção ⚠: alguns nomeres como portas e outros objetos interativos tem que ter tradução no textMessage
            porta1: new GameObject({
                x: utils.withGrid(18),
                y: utils.withGrid(5),
                nome: tParaDialogos(
                    { npcs: false, nome: true, },
                    { t: "porta1" }
                ),
                talking: [
                    {
                        events: [
                            {
                                type: "textMessage", text: tParaDialogos(
                                    { npcs: false, nome: false, },
                                    { t: "porta1", n: 1 }
                                ),
                            },
                            { type: "redirecionarPagina", text: "/conteudos/GestaoDeTempo1" },
                        ]
                    }
                ]
            }),
            porta2: new GameObject({
                x: utils.withGrid(24),
                y: utils.withGrid(5),
                nome: tParaDialogos(
                    { npcs: false, nome: true, },
                    { t: "porta2" }
                ),
                talking: [
                    {
                        events: [
                            // { type: "redirecionarPagina", text: "/conteudos/GestaoDeTempo2"},
                            {
                                type: "textMessage", text: tParaDialogos(
                                    { npcs: false, nome: false, },
                                    { t: "porta2", n: 1 }
                                )
                            },
                            {
                                type: "textMessage", text: tParaDialogos(
                                    { npcs: false, nome: false, },
                                    { t: "porta2", n: 2 }
                                )
                            },
                            { who: "player", type: "walk", direction: "down" },
                        ]
                    }
                ]
            }),
            porta3: new GameObject({
                x: utils.withGrid(30),
                y: utils.withGrid(5),
                nome: tParaDialogos(
                    { npcs: false, nome: true, },
                    { t: "porta3" }
                ),
                talking: [
                    {
                        events: [
                            //Evento de quando você for falar com o npc
                            {
                                type: "textMessage", text: tParaDialogos(
                                    { npcs: false, nome: false, },
                                    { t: "porta3", n: 1 }
                                )
                            },
                            {
                                type: "textMessage", text: tParaDialogos(
                                    { npcs: false, nome: false, },
                                    { t: "porta3", n: 2 }
                                )
                            },

                        ]
                    }
                ]
            }),
            fliperama: new GameObject({
                x: utils.withGrid(2),
                y: utils.withGrid(6),
                nome: tParaDialogos(
                    { npcs: false, nome: true, },
                    { t: "fliperama" },
                    "Game?"
                ),
                talking: [
                    {
                        events: [
                            {
                                type: "textMessage", text: tParaDialogos(
                                    { npcs: false, nome: false, },
                                    { t: "fliperama", n: 1 }
                                )
                            },
                            { type: "redirecionarPagina", text: "/descanso" },

                        ]
                    }
                ]
            }),
            bebedouro: new GameObject({
                x: utils.withGrid(33),
                y: utils.withGrid(8),
                nome: tParaDialogos(
                    { npcs: false, nome: true, },
                    {t: ""  },
                    getNomeUsuario()
                ),
                talking: [
                    {
                        events: [
                            {
                                type: "textMessage", text: tParaDialogos(
                                    { npcs: false, nome: false, },
                                    { t: "bebedouro", n: 1 }
                                )
                            },
                            {
                                type: "textMessage", text: tParaDialogos(
                                    { npcs: false, nome: false, },
                                    { t: "bebedouro", n: 2 }
                                )
                            },
                        ]
                    }
                ]
            }),
            maquinaDeVendasEsquerda: new GameObject({
                x: utils.withGrid(20),
                y: utils.withGrid(6),
                nome: tParaDialogos(
                    { npcs: false, nome: true, },
                    { t: ""  },
                    getNomeUsuario()
                ),
                talking: [
                    {
                        events: [
                            {
                                type: "textMessage", text: tParaDialogos(
                                    { npcs: false, nome: false, },
                                    { t: "maquina", n: 1 }
                                )
                            },
                        ]
                    }
                ]
            }),
            maquinaDeVendasDireita: new GameObject({
                x: utils.withGrid(21),
                y: utils.withGrid(6),
                nome: tParaDialogos(
                    { npcs: false, nome: true, },
                    { t: "" },
                    getNomeUsuario()
                ),
                talking: [
                    {
                        events: [
                            {
                                type: "textMessage", text: tParaDialogos(
                                    { npcs: false, nome: false, },
                                    { t: "maquina", n: 1 }
                                )
                            },
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


};

export default Mapas; // Exporta o objeto Maps como padrão