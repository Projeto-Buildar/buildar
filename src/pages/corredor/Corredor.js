import React, { useEffect, useRef } from 'react';
import "./corredor.css";
import init from './js/init';
import Header from '../home/HeaderHome';

export default function Corredor() {
    const gameContainerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (gameContainerRef.current) {
            init(gameContainerRef.current);
        }
    }, []);

    return (
        <div className="telaGame">
            <Header></Header>
            <div className="game-container" ref={gameContainerRef}>
                <canvas className="game-canvas" width="352" height="198" ref={canvasRef}></canvas>
            </div>
        </div>
    );
}
