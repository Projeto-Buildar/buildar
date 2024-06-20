import React, { forwardRef } from 'react'; // Importa o React e forwardRef do pacote 'react'

const StartScreen = forwardRef((props, ref) => ( // Define o componente funcional StartScreen utilizando forwardRef
  <div className="start-screen" ref={ref} data-start-screen> {/* Define um elemento div com a classe 'start-screen' e atributo 'data-start-screen' */}
    PRECIONE QUALQUER BOTÃO PARA INICIAR {/* Exibe o texto na tela inicial */}
  </div>
));

export default StartScreen; // Exporta o componente StartScreen como padrão
