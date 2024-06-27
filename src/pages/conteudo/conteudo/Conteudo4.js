import React from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from '../home/HeaderHome';
import './Conteudo.css';
import Capi from './imagem/Capi_Professor.png';

export default function Conteudo() {
  return (
    <div>
      <HeaderHome />
      <div className="cabecalho">
        <Link to="/corredor">
          <button className="voltarCorredor">Voltar para o corredor</button>
        </Link>
        <h2>Sala Gestão de Tempo 1</h2>
      </div>
      <img src={Capi} alt="Capi Professor" className="capi" />
      <div className="message-container_c4">
        <div className="message-box">
          <p>Agora, imagine que você é um estagiário(a) na área de RH em uma grande empresa de tecnologia.
             Antes de começar seu trabalho, você precisa organizar as tarefas do seu dia. Seu horário de trabalho 
             é das 9h às 15h e seu horário de almoço é das 12h às 13h. Sua supervisora marcou uma reunião com a 
             equipe das 14h às 15h.</p>
        </div>
      </div>
     
      <Link to="/conteudo3">
           <button className="anterior">Voltar</button>
      </Link>

      <Link to="/conteudo5">
          <button className="proximo">Proximo</button>
        </Link>
    </div>
  );
}