import React from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from '../home/HeaderHome';
import './Conteudo.css';
import Capi from './imagem/Capi_Professor.png';
import Tela1 from './imagem/tela1.png';

export default function Conteudo() {
  return (
    <div>
      <HeaderHome />
      
      <div className="cabecalho">
        <Link to="/corredor">
          <button className="corredor">Voltar para o corredor</button>
        </Link>
        <h2>Sala Gestão de Tempo 1</h2>
      </div>
      <img src={Tela1} alt="tela1" className="tela1" />
      <img src={Capi} alt="Capi Professor" className="capi" />
      <div className="message-container">
        <div className="message-box">
          <p>Olá Jovem, seja bem-vindo(a)!</p>
        </div>
      </div>
      <div className="message-container_c2">
        <div className="message-box2">
          <p>
            Nessa sala você aprenderá sobre a <b>gestão de tempo</b>, uma habilidade crucial para alcançar
            a eficiência e o sucesso em qualquer área de atuação.
          </p>
          
        </div>
        
      </div>
         <Link to="/conteudo2">
          <button className="proximo">Proximo</button>
        </Link>
    </div>
  );
}