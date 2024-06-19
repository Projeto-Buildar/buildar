import utils from './Utils';
import Person from './Person';

import demoRoomLower from "../images/mapas/mapaLower.png";
// import demoRoomUpper from "../images/mapas/tetinho.png";

import npc1 from "../images/personagens/pessoa/npc1.png";
import playerV2 from "../images/personagens/pessoa/img.png";

const Maps = {
    DemoRoom: {
        lowerSrc: demoRoomLower,
        // upperSrc: demoRoomUpper,
        gameObjects: {
            // npc: new Person({
            //     x: utils.withGrid(10),
            //     y: utils.withGrid(5),
            //     src: npc1,
            // }),
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(6),
                src: playerV2,
                numeroDeFrames: 8,
                width: 24,
                colunaY: {
                    "down": 0,
                    "up": 1,
                    "left": 2,
                    "right": 3
                },
                distanciaX: 4,
                animationFrameLimit: 6
            })
        },
        walls: {
            // "16,16": true       
            [utils.asGridCoord(0, 4)]: true,
            [utils.asGridCoord(1, 4)]: true,
            [utils.asGridCoord(2, 4)]: true,
            [utils.asGridCoord(3, 4)]: true,
            [utils.asGridCoord(4, 4)]: true,
            [utils.asGridCoord(5, 4)]: true,
            [utils.asGridCoord(6, 4)]: true,
            [utils.asGridCoord(8, 4)]: true,
            [utils.asGridCoord(9, 4)]: true,
            [utils.asGridCoord(10, 4)]: true,
            [utils.asGridCoord(11, 4)]: true,
            [utils.asGridCoord(12, 4)]: true,
            [utils.asGridCoord(13, 4)]: true,
            [utils.asGridCoord(14, 4)]: true,
            [utils.asGridCoord(15, 4)]: true,
            [utils.asGridCoord(16, 4)]: true,
            [utils.asGridCoord(17, 4)]: true,
            [utils.asGridCoord(20, 4)]: true,
            [utils.asGridCoord(5, 5)]: true,
            [utils.asGridCoord(9, 5)]: true,       
            [utils.asGridCoord(21, 5)]: true,
            [utils.asGridCoord(21, 6)]: true,
            [utils.asGridCoord(21, 7)]: true,
            [utils.asGridCoord(21, 8)]: true,
            [utils.asGridCoord(21, 9)]: true,
            [utils.asGridCoord(21, 10)]: true,
            [utils.asGridCoord(21, 11)]: true,
            [utils.asGridCoord(0, 12)]: true,
            [utils.asGridCoord(1, 12)]: true,
            [utils.asGridCoord(2, 12)]: true,
            [utils.asGridCoord(3, 12)]: true,
            [utils.asGridCoord(4, 12)]: true,
            [utils.asGridCoord(5, 12)]: true,
            [utils.asGridCoord(6, 12)]: true,
            [utils.asGridCoord(5, 12)]: true,
            [utils.asGridCoord(7, 12)]: true,
            [utils.asGridCoord(8, 12)]: true,
            [utils.asGridCoord(9, 12)]: true,
            [utils.asGridCoord(9, 12)]: true,
            [utils.asGridCoord(10, 12)]: true,
            [utils.asGridCoord(11, 12)]: true,
            [utils.asGridCoord(12, 12)]: true,
            [utils.asGridCoord(13, 12)]: true,
            [utils.asGridCoord(14, 12)]: true,
            [utils.asGridCoord(15, 12)]: true,
            [utils.asGridCoord(16, 12)]: true,
            [utils.asGridCoord(17, 12)]: true,
            [utils.asGridCoord(18, 12)]: true, 
            [utils.asGridCoord(19, 12)]: true, 
            [utils.asGridCoord(20, 12)]: true,
            [utils.asGridCoord(-1, 5)]: true,
            [utils.asGridCoord(-1, 6)]: true,
            [utils.asGridCoord(-1, 7)]: true,
            [utils.asGridCoord(-1, 8)]: true,
            [utils.asGridCoord(-1, 9)]: true,
            [utils.asGridCoord(-1, 10)]: true,
            [utils.asGridCoord(-1, 11)]: true,
            // [utils.asGridCoord(7, 4)]: true, porta
            // [utils.asGridCoord(18, 4)]: true, porta
            // [utils.asGridCoord(19, 4)]: true, porta
            // [utils.asGridCoord(7, 4)]: true, porta    
        }
    },
};

export default Maps;
