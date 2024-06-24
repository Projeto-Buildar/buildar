import React, { useState } from 'react';
import Game from './Game';

const GamePage = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const handleStartGame = () => {
    setIsGameStarted(true);
  };

  return (
    <div>
      <h1>Meu Jogo Incrível</h1>
      {!isGameStarted && (
        <button onClick={handleStartGame}>Iniciar Jogo</button>
      )}
      {isGameStarted && <Game />}
    </div>
  );
};

export default GamePage;
