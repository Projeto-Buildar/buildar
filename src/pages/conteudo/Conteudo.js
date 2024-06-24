import React from 'react';
import { Link } from 'react-router-dom';
import './Conteudo.css';
import Vivi from './imagem/vivi.png';
import Tela1 from './imagem/tela1.png';
import Perfil from './imagem/perfil.png'

export default function Conteudo() {
  return (
    <div>

      <div  className='cabecalho' > 
      
      <div className='vivi'>
      <img src={Vivi} alt="Capi Professor" className="capi" />
      </div>
      
      </div>
       
       <img src={Tela1} alt="tela1" className='tela1'/>
      <Link to="/corredor">
          <button className="corredor">Voltar para o corredor</button>
        </Link>


      <div className="message-container">
        <div className="message-box2">
              
          <p>
          
          <h2 className='recepcao'> Olá Jovem, seja bem-vindo(a)!</h2>
            
            Nessa sala você aprenderá sobre a gestão de tempo, uma habilidade crucial para alcançar
            a eficiência e o sucesso em qualquer área de atuação.
          </p>
          
        </div>
        
      </div>
        
    
      <div className='perfil_usuario'>
        <img src={Perfil} alt="perfil" className='perfil' /> 
     </div> 

     <div className='escolha'>

      <div className='botao1'>
      <Link to="/conteudo2">
      <button className='escolha1'>Estou ansioso para começar!</button>
      </Link>
      </div>

    <div className='botao2'>
      <Link to="/conteudo2">
      <button className='escolha2'>Que começem os jogos</button>
      </Link>
    </div>
     </div>
    </div>
  
    
);
}