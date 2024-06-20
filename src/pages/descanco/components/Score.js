import React, { forwardRef } from 'react'; // Importa o React e forwardRef do pacote 'react'

const Score = forwardRef(({ score }, ref) => ( // Define o componente funcional Score utilizando forwardRef
  <div className="score" ref={ref} data-score> {/* Define um elemento div com a classe 'score' e atributo 'data-score' */}
    {Math.floor(score)} {/* Exibe a pontuação arredondada para baixo */}
  </div>
));

export default Score; // Exporta o componente Score como padrão
