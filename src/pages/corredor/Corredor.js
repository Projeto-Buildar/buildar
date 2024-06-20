import React, { useEffect, useRef } from 'react';
import "./corredor.css"; // Importa estilos CSS específicos para o componente
import init from './js/init'; // Importa a função init do arquivo init.js na pasta js
import Header from '../home/HeaderHome'; // Importa o componente HeaderHome do diretório home
import { useNavigate } from 'react-router-dom'; // Importar useNavigate do react-router-dom

export default function Corredor() {
    const navigate = useNavigate(); // Inicializa o hook useNavigate
    // Declaração de referências usando useRef para interação com o DOM
    const gameContainerRef = useRef(null); // Referência para o container do jogo
    const canvasRef = useRef(null); // Referência para o elemento canvas
    const overworldRef = useRef(null); // Referência para o estado do jogo

    // useEffect utilizado para inicialização e limpeza de efeitos colaterais
    useEffect(() => {
        // Verifica se gameContainerRef.current existe e overworldRef.current não existe
        if (gameContainerRef.current && !overworldRef.current) {
            // Inicializa o jogo utilizando a função init e atribui ao overworldRef.current
            overworldRef.current = init(gameContainerRef.current, navigate);
        }

        // Função de limpeza executada quando o componente é desmontado
        return () => {
            if (overworldRef.current) {
                // Para o loop do jogo, se overworldRef.current existir
                overworldRef.current.stopGameLoop();
                // Define overworldRef.current como null após parar o jogo
                overworldRef.current = null;
            }
        };
    }, [navigate]); // Array vazio [] garante que o useEffect seja executado apenas uma vez após a montagem inicial do componente

    // Renderização do componente Corredor
    return (
        <div className="telaGame"> {/* Div principal com classe telaGame */}
            <Header></Header> {/* Renderiza o componente Header importado */}
            <div className="game-container" ref={gameContainerRef}>
                {/* Div do container do jogo com referência a gameContainerRef */}
                <canvas className="game-canvas" width="496" height="192" ref={canvasRef}></canvas>
                {/* Elemento canvas para renderizar o jogo com largura e altura definidas, referenciado por canvasRef */}
            </div>
        </div>
    );
}
