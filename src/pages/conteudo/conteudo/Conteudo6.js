import React from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from '../home/HeaderHome';
import './Conteudo.css';
import Capi from './imagem/Capi_Professor.png';
import Prancheta from './imagem/Prancheta.png';

export default function Conteudo() {
  return (
    <div>
      
      
        <Link to="/corredor">
          <button className="voltarCorredor">Voltar para o corredor</button>
        </Link>
        
        
      <img src={Capi} alt="Capi Professor" className="capi_c6" />
      <div className="message-container_c6">
        <div className="message-box">
          <p>Como você organizará seu tempo para cumprir todas as tarefas?<br/>
           Não se esqueça que a reunião e o seu horário de almoço são compromissos fixos e 
          você pode dividir as outras atividades em 2 blocos de tempo.</p>
        </div>
      </div>
     
      <Link to="/conteudo5">
           <button className="anterior">Voltar</button>
      </Link>

      <Link to="/conteudo7">
          <button className="proximo">Proximo</button>
        </Link>
        
        
        
        <div className='atividade_c6'>
        
        <img src={Prancheta} alt="prancheta" className="prancheta" />
        

        
        

<h2>Planejamento</h2> 



   <div className='texto1'>
 
   <p className='t1'> almoço </p>
    
   <p className='t1'> Organização de Espaço </p>

   <p className='t1'>Organização de Espaço</p>
   
   <p className='t1'> Enviar E-mail </p>
   </div>



<div className='texto2'>
   
   <p className='t2'> Ligação com a melhor amiga </p>

   <p className='t2'>Enviar E-mail</p>

   <p className='t2'>Café da tarde</p>

   </div>
   
</div>
   
    </div>
  );
}