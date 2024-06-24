import React from 'react';
import { Link } from 'react-router-dom';
import './Conteudo.css';
import Vivi from './imagem/vivi.png';
import Tela4 from './imagem/Tela4.png';
import Perfil from './imagem/perfil.png'

export default function Conteudo() {
  return (
    <div>
      
        
        
      
      <img src={Vivi} alt="Capi Professor" className="capi" />
      <div className="message-container">
        <div className="message-box">
          <p>
            Agora que você sabe a importancia dessa 
            habilidade, bora praticar!
            Se prepare para embarcar nessa jornada e descobrir como organizar o seu tempo, 
            cumprir suas tarefas e atividades de forma organizada, e atender a prazos estabelecidos. 
            Está preparado?</p>
        </div>
      </div>
      
      <Link to="/corredor">
          <button className="corredor">Voltar para o corredor</button>
        </Link>

      <Link to="/conteudo3">
           <button className="anterior">Voltar</button>
      </Link>

      <Link to="/conteudo5">
          <button className="proximo">Proximo</button>
        </Link>
       
        <img src={Tela4} alt="tela4" className='tela4'/>

        <div className='perfil_usuario'>
            <img src={Perfil} alt="perfil" className='perfil' /> 
        </div> 

    </div>
  );
}