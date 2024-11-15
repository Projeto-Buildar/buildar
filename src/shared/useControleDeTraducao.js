// Imports de Context Provider 
import { useTranslationComPrefixo } from './TranslationContext';
// usePrefixo.js
import { useMemo } from 'react';

 const useControleDeTraducao = (prefixoSection = "") => {
  const { t: tChaveNormal, tAlterado: tChaveAlterada, ...rest } = useTranslationComPrefixo();

  const chaveComPrefixo = useMemo(() => {
    return (chave) => `${prefixoSection}.${chave}`;
  }, [prefixoSection]);

  // `t` adaptado para aceitar o prefixo e `options` de forma opcional
  const t = (chave, prefixoOuValores = {}, possiveisValores = {}) => {

    let prefixo = "";
    let valores = {};

    if (typeof prefixoOuValores === "string") {
      // Se o segundo argumento for uma string, ele é tratado como prefixo
      prefixo = prefixoOuValores;

      // operador ternario e forma de verificar se objeto tem ao menos uma chave para assim receber o valor
      valores = Object.keys(possiveisValores).length > 0 ? possiveisValores : {};

    } else {     
      // Caso contrário, trata-se de `options`, e `prefix` é o padrão da página
      valores = Object.keys(prefixoOuValores).length > 0 ? prefixoOuValores : {};
    }

    const chaveInteira = prefixo + chave;

    if(typeof prefixoOuValores === "string") {
      return tChaveAlterada(chaveInteira, valores); // Sem prefixo ou com um prefixo novo
      // Lógica para quando prefixOrOptions foi declarado, mesmo que seja uma string vazia 
    } else {

      return tChaveNormal(chave, valores); // Sem prefixo
      // Lógica para quando prefixOrOptions não foi declarado 
    }
  };

  const tComFormatacao = (chave, prefixoOuValores = {}, possiveisValores = {}) => {

    let translatedText = t(chave, prefixoOuValores = {}, possiveisValores = {});

    // Função para evitar linhas viúvas
    const evitarLinhasViuvas = (texto) => {
      const termosEspeciais = ["Front-end", "Back-end", "Soft Skills"];
      // termosEspeciais.forEach((termo) => {
      //   const termoFormatado = termo.replace('-', '\u2011'); // Substituir '-' por hífen inquebrável
      //   const regex = new RegExp(termo.replace('-', '\\-').replace(' ', '\\s'), 'gi'); // 'g' para todas as ocorrências, 'i' para ignorar maiúsculas/minúsculas
      //   console.log(regex)
      //   texto = texto.replace(regex, termoFormatado);
      // });

      // Substituir termos especiais com um marcador temporário que não será separado no split
      termosEspeciais.forEach((termo) => {
        // const termoComEspacoInquebravel = termo.replace('-', '\u2011').replace(' ', '\u00A0');
        const regex = new RegExp(termo.replace('-', '\\-').replace(' ', '\\s'), 'gi');
        
        texto = texto.replace(regex, (match) => {
          // Aplicar formatação (espaço/hífen inquebrável) preservando o formato original
          return match.replace(/-/g, '\u2011').replace(/\s/g, '\u00A0');
        });      
      });

       // Dividir o texto em palavras, mas preservar grupos unidos por espaço inquebrável
       const palavras = texto.split(' '); // Divide em espaços normais, mas preserva grupos com \u00A0
      if (palavras.length > 1) {
        const ultimaPalavra = palavras[palavras.length - 1];
        const isTermoEspecial = termosEspeciais.some(termo =>
          ultimaPalavra.toLowerCase().includes(termo.toLowerCase().replace('-', '\u2011').replace(' ', '\u00A0'))
        );
        
        if (!isTermoEspecial) {
          // Juntar a última palavra (termo especial) com a penúltima palavra
          palavras[palavras.length - 2] += '\u00A0' + palavras.pop();
        }
      }
      return palavras.join(' ');
    };

    

    return evitarLinhasViuvas(translatedText);
  };

  return { t, tFormatado: tComFormatacao, chaveComPrefixo, ...rest };
};

export default useControleDeTraducao;
