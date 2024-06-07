import utils from './Utils';
import Person from './Person';

import demoRoomLower from "../images/mapas/corredor.png";
import demoRoomUpper from "../images/mapas/corredorCima.png";

import npc1 from "../images/personagens/pessoa/npc1.png";

import playerV2 from "../images/personagens/pessoa/img.png";

const Maps = {
    DemoRoom: {
        lowerSrc: demoRoomLower,
        upperSrc: demoRoomUpper,
        gameObjects: {
            hero2: new Person({
                x: utils.withGrid(6),
                y: utils.withGrid(4),
                src: npc1,
            }),
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
                animationFrameLimit: 17.5
            })
        }
    }, 
    // Kitchen: {
    //     lowerSrc: "../../images/maps/KitchenLower.png",
    //     upperSrc: "../../images/maps/KitchenUpper.png",
    //     gameObjects: {
    //         hero: new GameObject({
    //             x: 5,
    //             y: 2
    //         }),  
    //         hero2: new GameObject({
    //             x: 10,
    //             y: 7,
    //             src: "../../images/characters/people/npc1.png"
    //         })
    //     }
    // }
};

export default Maps;