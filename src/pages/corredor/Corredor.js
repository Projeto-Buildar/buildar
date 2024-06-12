import React, { useEffect, useRef } from 'react';
import "./corredor.css";
import init from './js/init';
import Header from '../home/HeaderHome';

export default function Corredor() {
    const gameContainerRef = useRef(null);
    const canvasRef = useRef(null);
    const overworldRef = useRef(null);

    useEffect(() => {
        if (gameContainerRef.current && !overworldRef.current) {
            overworldRef.current = init(gameContainerRef.current);
        }

        return () => {
            if (overworldRef.current) {
                overworldRef.current.stopGameLoop();
                overworldRef.current = null;
            }
        };
    }, []);

    return (
        <div className="telaGame">
            <Header></Header>
            <div className="game-container" ref={gameContainerRef}>
                <canvas className="game-canvas" width="336" height="192" ref={canvasRef}></canvas>
            </div>
        </div>
    );
}
