import React from 'react';
import './SetimaTela.css';
import handshake from './img/handshake.png'

const SetimaTela = () => {
  return (
    <div className="setima-tela">
      <img src={handshake} alt="Handshake" className="handshake-image" />
      <div className="text-container">
        <h1 className="title">
          Mais que inclusão, <span className="purple-text">Integração</span>
        </h1>
        <p className="description">
          Quer mais? A Buildar conta com um sistema de promoção de eventos e <span className="blue-text">workshops</span> para aquela troca maneira de experiências.
        </p>
      </div>
    </div>
  );
};

export default SetimaTela;
