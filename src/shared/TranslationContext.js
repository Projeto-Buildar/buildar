import React, { createContext, useContext, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

const TranslationContext = createContext();

const VerificaRetornoChave = (resultado, chave) => {
  if (resultado && typeof resultado === 'string' && resultado === chave) {
    return "chave de texto inválida ⚠";
  }
  return resultado;
}


export function TranslationProvider({ prefixo = '', children }) {
  const { t } = useTranslation();

   // Memoizando tPadrao e tComPrefixoAlterado
   const tPadrao = useCallback((chave, valores) => {
    const chavePadraoAtualizada = prefixo ? `${prefixo}.${chave}` : chave;
    const resultado = t(chavePadraoAtualizada, valores);
    return VerificaRetornoChave(resultado, chavePadraoAtualizada);
  }, [t, prefixo]);

  const tComPrefixoAlterado = useCallback((chave, valores) => {
    const resultado = t(chave, valores);
    return VerificaRetornoChave(resultado, chave);
  }, [t]);

  const value = useMemo(() => ({
    t: tPadrao,
    tAlterado: tComPrefixoAlterado,
  }), [tPadrao, tComPrefixoAlterado]);

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}


// Hook para usar a tradução com o prefixo definido
export const useTranslationComPrefixo = () => {
  const context = useContext(TranslationContext);
  const { t } = useTranslation();
  // Fallback para caso o `TranslationProvider` não esteja presente
  if (!context) {

    // Funções sem prefixo, pois o contexto não existe
    const verificarTSemPrefixoPadrao = (chave, valores) => {
      const resultado = t(chave, valores);

      return VerificaRetornoChave(resultado, chave);
    };

    return {
      t: verificarTSemPrefixoPadrao,
      tAlterado: verificarTSemPrefixoPadrao,
    };
  }

  return context;
};
