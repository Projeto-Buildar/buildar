import React, { useEffect, useRef } from "react"; // Importa o React, useEffect e useRef do pacote 'react'
import { setCustomProperty, incrementCustomProperty, getCustomProperty } from "../utils/updateCustomProperty"; // Importa algumas funções utilitárias de outro arquivo

const SPEED = 0.05; // Define a velocidade dos cactos
const CACTUS_INTERVAL_MIN = 650; // Define o intervalo mínimo para a criação de cactos
const CACTUS_INTERVAL_MAX = 2000; // Define o intervalo máximo para a criação de cactos

const updateCacti = (delta, speedScale) => { // Define uma função chamada updateCacti que recebe dois parâmetros
  cactusRefs.current.forEach(cactus => { // Itera sobre cada cacto na lista de cactos
    const currentLeft = getCustomProperty(cactus, "--left"); // Obtém a posição atual do cacto
    const newLeft = currentLeft - delta * speedScale * SPEED; // Calcula a nova posição do cacto

    if (newLeft > -100) { // Se o novo valor da posição for maior que -100
      incrementCustomProperty(cactus, "--left", delta * speedScale * SPEED * -1); // Move o cacto para a esquerda
    } else { // Caso contrário
      cactus.remove(); // Remove o cacto do DOM
      cactusRefs.current = cactusRefs.current.filter(ref => ref !== cactus); // Filtra o cacto removido da lista de cactos
    }
  });
};

function Cactus() { // Define um componente funcional chamado Cactus
  const cactusRefs = useRef([]); // Cria uma referência para a lista de cactos
  const nextCactusTimeRef = useRef(CACTUS_INTERVAL_MIN); // Cria uma referência para o próximo intervalo de criação de cactos

  if (nextCactusTimeRef.current <= 0) { // Se o próximo intervalo de criação de cactos for menor ou igual a 0
    createCactus(); // Chama a função para criar um novo cacto
    nextCactusTimeRef.current = randomNumberBetween(CACTUS_INTERVAL_MIN, CACTUS_INTERVAL_MAX) / speedScale; // Define o próximo intervalo de criação de cactos
  }
  nextCactusTimeRef.current -= delta; // Decrementa o tempo até o próximo cacto ser criado

  const createCactus = () => { // Define uma função para criar um novo cacto
    const cactus = document.createElement("img"); // Cria um elemento de imagem para o cacto
    cactus.src = `imgs/obstaculo${Math.floor(Math.random() * 3) + 1}.png`; // Define a origem da imagem do cacto de forma aleatória
    cactus.classList.add("cactus"); // Adiciona a classe 'cactus' ao elemento do cacto
    setCustomProperty(cactus, "--left", 100); // Define a posição inicial do cacto à direita
    document.querySelector("[data-world]").appendChild(cactus); // Adiciona o cacto ao mundo do jogo na DOM
    cactusRefs.current.push(cactus); // Adiciona o cacto à lista de cactos
  };

  const randomNumberBetween = (min, max) => { // Define uma função para gerar um número aleatório dentro de um intervalo
    return Math.floor(Math.random() * (max - min + 1) + min); // Retorna o número aleatório
  };

  useEffect(() => { // Utiliza o hook useEffect para atualizar os cactos em intervalos regulares
    const interval = setInterval(() => {
      updateCacti(16.67, 1); // Chama a função de atualização dos cactos
    }, 16.67); // Define o intervalo de atualização para simular 60 FPS

    return () => clearInterval(interval); // Retorna uma função de limpeza para remover o intervalo quando o componente for desmontado
  }, []);

  return null; // Retorna null, pois o componente não renderiza nada diretamente
}

export { updateCacti }; // Exporta a função updateCacti para ser utilizada em outros arquivos
export default Cactus; // Exporta o componente Cactus como padrão
