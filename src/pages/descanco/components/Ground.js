import React, { useEffect, useRef } from "react"; // Importa o React, useEffect e useRef do pacote 'react'
import { incrementCustomProperty, getCustomProperty } from "../utils/updateCustomProperty"; // Importa funções utilitárias relacionadas a propriedades customizadas

const SPEED = 0.05; // Define a velocidade do deslocamento do chão
const GROUND_WIDTH = 300; // Define a largura do chão
const INITIAL_POSITIONS = [0, GROUND_WIDTH]; // Define as posições iniciais do chão

export const updateGround = (delta, speedScale, groundRefs) => { // Exporta a função updateGround
  groundRefs.forEach(ground => { // Itera sobre as referências dos elementos do chão
    const currentLeft = getCustomProperty(ground.current, "--left"); // Obtém a posição atual do chão
    const newLeft = currentLeft + delta * speedScale * SPEED * -1; // Calcula a nova posição do chão

    incrementCustomProperty(ground.current, "--left", delta * speedScale * SPEED * -1); // Atualiza a propriedade customizada para mover o chão

    if (newLeft <= -GROUND_WIDTH) { // Verifica se o chão saiu completamente da tela
      incrementCustomProperty(ground.current, "--left", GROUND_WIDTH * 2); // Reposiciona o chão para reiniciar sua exibição
    }
  });
};

const Ground = () => { // Define o componente funcional Ground
  const groundRefs = [useRef(null), useRef(null)]; // Cria referências para os elementos do chão

  useEffect(() => { // Utiliza o hook useEffect para executar a lógica após a renderização do componente
    groundRefs.forEach((ground, i) => { // Itera sobre as referências dos elementos do chão
      ground.current.style.setProperty("--left", `${INITIAL_POSITIONS[i]}px`); // Define a posição inicial do chão usando propriedades customizadas
    });
  }, []); // Array vazio indica que este efeito é executado apenas uma vez, equivalente ao componentDidMount

  return ( // Retorna a estrutura do componente Ground
    <> {/* Fragmento React para agrupar múltiplos elementos sem uma div pai */}
      <div ref={groundRefs[0]} className="ground"></div> {/* Renderiza o primeiro elemento do chão */}
      <div ref={groundRefs[1]} className="ground"></div> {/* Renderiza o segundo elemento do chão */}
    </>
  );
};

export default Ground; // Exporta o componente Ground como padrão
