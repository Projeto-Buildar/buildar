import React, { useEffect, useRef, useState } from 'react';
import "./corredor.css"; // Importa estilos CSS específicos para o componente
import init from './js/init'; // Importa a função init do arquivo init.js na pasta js
import Header from '../home/HeaderHome'; // Importa o componente HeaderHome do diretório home
import { useNavigate } from 'react-router-dom'; // Importar useNavigate do react-router-dom
import TextMessage from './js/TextMessage';

export default function Corredor() {
    const navigate = useNavigate();
    const gameContainerRef = useRef(null);
    const overworldRef = useRef(null);
    const [messages, setMessages] = useState([]);

    function showMessage(text, callBack) {
        setMessages((prevMessages) => [...prevMessages, {text: text, callBack: callBack}]);
    }

    function handleComplete(index) {
        if (index >= 0 && index < messages.length) {
            messages[index].callBack();
            setMessages((prevMessages) => prevMessages.filter((message, i) => i !== index));
        }
    }

    useEffect(() => {
        if (gameContainerRef.current && !overworldRef.current) {
            overworldRef.current = init(gameContainerRef.current, navigate, showMessage);
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
            <Header />
            <div className="game-container" ref={gameContainerRef}>
                <canvas className="game-canvas" width="496" height="192"></canvas>
                {messages.map((message, index) => (
                    <TextMessage key={index} text={message.text} onComplete={() => handleComplete(index)} />
                ))}
            </div>
        </div>
    );
}
