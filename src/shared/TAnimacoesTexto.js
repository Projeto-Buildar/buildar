// TAnimacoesTexto.js
import React from 'react';
import { useTranslation } from 'react-i18next';  // Importa o hook de tradução
import './TAnimacoesTexto.css'; // Estilos para animações

const TAnimacoesTexto = ({ tKey, anim , qntd}) => {
  const { t } = useTranslation();  // Use o hook useTranslation para pegar a função t
  const translatedText = t(tKey);  // Traduz a chave fornecida para o idioma atual

  // Função para gerar a animação nas letras
  const generateAnimatedText = (text, animationClass) => {
    const letters = text.split('').map((letter, index) => {
      return (
        <span
          key={index}
          className={`animated-letter ${animationClass}`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {letter}
        </span>
      );
    });

    return letters;
  };

  // Função para processar o texto com animações e tags
  const processText = (text, animationType) => {
    const parts = [];
    // const regex = /<anim[^>]*>(.*?)<\/anim>/g;  // Encontra todas as tags <span>
    const index = qntd === undefined ? "" : qntd
    const regex = new RegExp(`<anim${index }[^>]*>(.*?)</anim${index }>`, 'g');
    let match;

    // Se o tipo de animação for válido, aplica
    const animationClass = getAnimationClass(animationType);

    // Procura as tags <span> no texto
    while ((match = regex.exec(text)) !== null) {
      // Processa o conteúdo dentro da tag <span>
      parts.push(generateAnimatedText(match[1], animationClass));  // Animação para o conteúdo dentro da tag <span>
    }

    // Retorna somente o conteúdo dentro das tags <span> com a animação aplicada
    return parts;
  };

  // Função para escolher a classe de animação com base no tipo
  const getAnimationClass = (animationType) => {
    switch (animationType) {
      case 'wave':
        return 'rainbow-wave'; // Efeito de cor arco-íris com movimento de onda
      case 'wave-letter':
        return 'rainbow-wave-letter'; // Efeito de onda nas letras com cores fixas
      case 'fadeIn':
        return 'fade-in'; // Efeito fade-in
      // case 'zoomIn':
      //   return 'zoom-in'; // Efeito zoom-in
      // case 'bounce':
      //   return 'bounce'; // Efeito bounce
      default:
        return 'default-animation'; // Animação padrão
    }
  };

  // Retorna o texto processado com a animação desejada
  return <>{processText(translatedText, anim)}</>;
};

export default TAnimacoesTexto;
