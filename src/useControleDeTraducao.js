import { useTranslation } from 'react-i18next';

const evitarLinhasViuvas = (texto) => {
  // Tratamento especial para termos compostos
  const termosEspeciais = ["Front-end", "Back-end", "Soft Skills", "soft skills"];
  termosEspeciais.forEach((termo) => {
    const termoFormatado = termo.replace('-', '\u2011'); // Substituir '-' por non-breaking hyphen
    const regex = new RegExp(termo.replace('-', '\\-'), 'g');
    texto = texto.replace(regex, termoFormatado);
  });

  const palavras = texto.split(' ');
  if (palavras.length > 1) {
    palavras[palavras.length - 2] += '\u00A0' + palavras.pop();
  }
  return palavras.join(' ');
};


const useControleDeTraducao = () => {
  const { t: originalT, ...rest } = useTranslation();

  const t = (key, options) => {
    const translatedText = originalT(key, options);
    return translatedText;
  };

  const tComControleDeLinha = (key, options) => {
    const translatedText = originalT(key, options);
    return evitarLinhasViuvas(translatedText);
  };

  return { t, tComControleDeLinha, ...rest };
};

export default useControleDeTraducao;
