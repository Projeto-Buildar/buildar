import useControleDeTraducao from './useControleDeTraducao';
import {Trans as OriginalTrans} from 'react-i18next'

export const TranslationTagsComPrefixo = ({ i18nKey, values, components, prefixOverride, usarControleDeLinha }) => {
    const { t, tFormatado} = useControleDeTraducao();  // Agora pegamos o prefixo do contexto
    // Definindo o prefixo com base no `prefixOverride` ou no prefixo padrão do contexto
    let chaveComPrefixo;
    // const prefixoFinal = prefixOverride || prefixoPadrao;  // Se `prefixOverride` for fornecido, usamos ele, caso contrário, usamos o `prefixoPadrao`

    let textoTraduzido;

    const textoFinal = (chave, prefixoAdicional) => {
      return usarControleDeLinha ? tFormatado(chave, prefixoAdicional) : t(chave, prefixoAdicional)
    }

    if(prefixOverride !== undefined){
      
      if(prefixOverride === "")
      {
        chaveComPrefixo = i18nKey;
        textoTraduzido = textoFinal(chaveComPrefixo, "");
      } else {
        chaveComPrefixo = `${prefixOverride}.${i18nKey}`;
        textoTraduzido = textoFinal(i18nKey, prefixOverride);
      }
    } else {
      chaveComPrefixo = i18nKey;
      textoTraduzido = textoFinal(chaveComPrefixo);
    } 
  
    // // Se `usarControleDeLinha` for verdadeiro, aplica a manipulação de linha
    // const textoManipulado = usarControleDeLinha ? tFormatado(textoTraduzido) : textoTraduzido;
  
    // Renderiza o `Trans` com o texto manipulado
    return <OriginalTrans values={values} components={components}>{textoTraduzido}</OriginalTrans>;
  };