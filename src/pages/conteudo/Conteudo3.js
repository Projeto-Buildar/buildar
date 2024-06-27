import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import './Conteudo.css';
import Vivi from './imagem/vivi.png';
import Tela1 from './imagem/Tela1.jpg';
import Perfil from './imagem/perfil.png';


export default function Conteudo() {
  const history = useNavigate();
  function irParaRotaAnterior() {
    history(-3);
  }
  return (
    <div>

      <img src={Vivi} alt="Capi Professor" className="capi" />
      <div className="message-container">
        <div className="message-box">
          <p>Agora que você sabe a importancia dessa 
          habilidade, bora praticar!</p>
        </div>
      </div>
      <div className="message-container">
        <div className="message-box2">
          <p>
          Se prepare para embarcar nessa jornada e descobrir 
          como organizar o seu tempo, cumprir suas tarefas e atividades 
          de forma organizada, e atender a prazos estabelecidos
          </p>
          
        </div>
        
      </div>
      
      <img src={Tela1} alt="tela3" className='tela3'/>

      <button className="voltarCorredor" onClick={() => irParaRotaAnterior()}>Voltar para o corredor</button>

      <Link to="/conteudo2">
           <button className="anterior">Voltar</button>
      </Link>

      <Link to="/conteudo4">
          <button className="proximo">Próximo</button>
        </Link>
        <div className='perfil_usuario'>
            <img src={Perfil} alt="perfil" className='perfil' /> 
        </div> 

        <div className='escolha'>

          <div className='botao1'>
          <Link to="/conteudo4">
          <button className='escolha1'>Eu nasci preparado</button>
          </Link>
          </div>

          <div className='botao2'>
          <Link to="/conteudo3">
          <button className='escolha2'>Pode me explicar de novo?</button>
          </Link>
          </div>
                    </div>
          </div>
                  
  );
}