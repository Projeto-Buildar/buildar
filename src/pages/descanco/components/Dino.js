import React, { useEffect, useRef } from "react"; // Importa o React, useEffect e useRef do pacote 'react'
import { setCustomProperty, incrementCustomProperty, getCustomProperty } from "../utils/updateCustomProperty"; // Importa algumas funções utilitárias de outro arquivo

const JUMP_SPEED = 0.45; // Define a velocidade de pulo do dinossauro
const GRAVITY = 0.0015; // Define a gravidade do jogo
const FRAME_TIME = 200; // Define o tempo entre frames

const setDinoLose = () => { // Define uma função para definir o dinossauro como derrotado
  dinoElement.current.src = `imgs/dino-lose.png`; // Define a imagem do dinossauro como derrotado
};

let isJumping = false; // Define uma variável para controlar se o dinossauro está pulando
let dinoFrame = 0; // Define a variável para controlar a animação do dinossauro
let currentFrameTime = 0; // Define o tempo atual do frame
let yVelocity = 0; // Define a velocidade vertical do dinossauro

const updateDino = (delta, speedScale) => { // Define uma função para atualizar o dinossauro
  handleRun(delta, speedScale); // Chama a função para atualizar a animação de corrida do dinossauro
  handleJump(delta); // Chama a função para atualizar o pulo do dinossauro
};

const handleRun = (delta, speedScale) => { // Define uma função para atualizar a animação de corrida do dinossauro
  if (isJumping) { // Verifica se o dinossauro está pulando
    dinoElement.current.src = `imgs/dino-stationary.png`; // Define a imagem do dinossauro parado
    return;
  }

  if (currentFrameTime >= FRAME_TIME) { // Verifica se o tempo entre frames foi atingido
    dinoFrame = (dinoFrame + 1) % 2; // Alterna entre os frames de animação do dinossauro
    dinoElement.current.src = `imgs/dino-run-${dinoFrame}.png`; // Define a imagem de corrida do dinossauro
    currentFrameTime -= FRAME_TIME; // Reinicia o contador de tempo do frame
  }
  currentFrameTime += delta * speedScale; // Atualiza o contador de tempo do frame
};

const handleJump = (delta) => { // Define uma função para atualizar o pulo do dinossauro
  if (!isJumping) return; // Se o dinossauro não estiver pulando, sai da função

  incrementCustomProperty(dinoElement.current, "--bottom", yVelocity * delta); // Atualiza a posição vertical do dinossauro

  if (getCustomProperty(dinoElement.current, "--bottom") <= 0) { // Verifica se o dinossauro atingiu o chão
    setCustomProperty(dinoElement.current, "--bottom", 0); // Define a posição do dinossauro no chão
    isJumping = false; // Define que o dinossauro não está mais pulando
  }

  yVelocity -= GRAVITY * delta; // Aplica a gravidade ao pulo do dinossauro
};

const Dino = () => { // Define o componente funcional Dino
  const dinoElement = useRef(null); // Cria uma referência para o elemento do dinossauro na DOM

  useEffect(() => { // Utiliza o hook useEffect para inicializar a posição vertical do dinossauro
    setCustomProperty(dinoElement.current, "--bottom", 0); // Define a posição inicial do dinossauro

    const handleJump = (e) => { // Define a função para lidar com o pulo do dinossauro
      if (e.code !== "Space" || isJumping) return; // Verifica se a tecla pressionada foi a Barra de Espaço e se o dinossauro não está pulando
      yVelocity = JUMP_SPEED; // Define a velocidade vertical do pulo do dinossauro
      isJumping = true; // Define que o dinossauro está pulando
    };

    window.addEventListener("keydown", handleJump); // Adiciona um event listener para detectar o pulo do dinossauro
    return () => window.removeEventListener("keydown", handleJump); // Remove o event listener quando o componente é desmontado
  }, []);

  useEffect(() => { // Utiliza o hook useEffect para atualizar a função de atualização do dinossauro no escopo global
    window.updateDino = updateDino; // Define a função updateDino no escopo global para ser acessada em outros arquivos

    return () => { // Retorna uma função de limpeza para remover a função updateDino do escopo global
      delete window.updateDino;
    };
  }, []);

  return <div ref={dinoElement} className="dino"></div>; // Retorna o elemento do dinossauro na DOM
};

export default Dino; // Exporta o componente Dino como padrão
export { setDinoLose, updateDino }; // Exporta as funções setDinoLose e updateDino para serem utilizadas em outros arquivos
