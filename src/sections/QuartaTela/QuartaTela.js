import React from 'react';
import './QuartaTela.css';
import capiquarta from './img/capiquarta.png'

const QuartaTela = () => {
  return (
    <div className="quarta-tela">
      <div className="text-container">
        <h1 className="title">
          Uma plataforma acessível ao <span className="purple-text">Jovem</span>!
        </h1>
        <p className="description">
          Pagar pra aprender? Só se quiser! Aqui contamos com uma opção <span className="blue-text">100% gratuita</span> para quem estiver afim.
        </p>
      </div>
      <img src={capiquarta} alt="Capiquarta" className="capiquarta-image" />
    </div>
  );
};

export default QuartaTela;
