import React from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from '../home/HeaderHome';
import './Conteudo.css';
import Capi from './imagem/Capi_Professor.png';
import Prancheta2 from './imagem/Prancheta2.png';

export default function Conteudo() {
  return (
    <div>
      
      
        <Link to="/corredor">
          <button className="voltarCorredor">Voltar para o corredor</button>
        </Link>
        
        
      <img src={Capi} alt="Capi Professor" className="capi_c6" />
      <div className="message-container_c6">
        <div className="message-box">
          <p>Excelente trabalho! 
          Você conseguiu planejar seu dia de forma eficiente. Lembre-se, a gestão do tempo é uma habilidade 
          valiosa que vai ajudar muito na sua carreira.</p>
        </div>
      </div>
     
      <Link to="/conteudo6">
           <button className="anterior">Voltar</button>
      </Link>

     
        <div className='atividade_c6'>
        
        <img src={Prancheta2} alt="prancheta2" className="prancheta2" />
        

        
        

<h2>Arraste e solte as tarefas adequadas nos campos dos horários disponíveis:</h2> 




<div className='texto2'>
   
   <p className='t2'> Ligação com a melhor amiga </p>

   

   <p className='t2'>Café da tarde</p>

   </div>
   
</div>
   
    </div>
  );
}