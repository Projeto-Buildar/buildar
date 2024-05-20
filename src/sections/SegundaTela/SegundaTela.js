import React from 'react';
import './SegundaTela.css';
import notebook from './img/notebook.png'

const SegundaTela = () => {
  return (
    <div className="segunda-tela">
      <div className="text-container">
        <h1 className="title">
          Pratique de uma forma <span className="purple-text">Diferenciada</span>
        </h1>
        <p className="description">
          Com simulações de ambientes profissionais, você consegue crescer! Dê um up em suas <span className="blue-text">soft skills</span> de maneira <span className="blue-text">fácil</span> e <span className="blue-text">divertida</span>.
        </p>
      </div>
      <img src={notebook} alt="Notebook" className="notebook-image" />
    </div>
  );
};

export default SegundaTela;
