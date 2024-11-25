// imports de Hook personalizado
import useControleDeTraducao from './useControleDeTraducao';

import {Trans as OriginalTrans} from 'react-i18next'
import RainbowWaveText from '../shared/TAnimacoesTexto.js';

export const TranslationTagsComPrefixo = ({ i18nKey, values, components, prefixOverride, usarControleDeLinha = true}) => {
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

    let componentsFinal = {};
    if(components && components.tipoAnim){
      const tipoAnim = components.tipoAnim;
      const qntd = Array.isArray(tipoAnim) ? tipoAnim.length : 1;
      if(qntd > 1){
        for(let i = 1; i <= qntd; i++){
          componentsFinal[`anim${i}`] = <RainbowWaveText tKey={chaveComPrefixo} anim={tipoAnim[i - 1]} qntd={i} />;
        }
      } 
      componentsFinal = { anim: <RainbowWaveText tKey={chaveComPrefixo} anim={tipoAnim}/> };   
    }

    componentsFinal = {...componentsFinal, ...components};
    
    // Renderiza o `Trans` com o texto manipulado
    return <OriginalTrans values={values} components={componentsFinal}>{textoTraduzido}</OriginalTrans>;
  };