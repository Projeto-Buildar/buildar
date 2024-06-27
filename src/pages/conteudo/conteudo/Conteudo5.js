import React from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from '../home/HeaderHome';
import './Conteudo.css';
import Capi from './imagem/Capi_Professor.png';

export default function Conteudo() {
  return (
    <div>
      
      
        <Link to="/corredor">
          <button className="corredor">Voltar para o corredor</button>
        </Link>
    
      <img src={Capi} alt="Capi Professor" className="capi" />
      <div className="message-container_c4">
        <div className="message-box">
        <p>Agora você sabe das suas tarefas, precisa fazer o planejamento do seu dia, 
            levando em consideração todas as atividades que precisam ser feitas, o tempo que cada uma necessita,
             o tempo que você tem e o que é prioridade.</p>
        </div>
      </div>
     
      <Link to="/conteudo4">
           <button className="anterior">Voltar</button>
      </Link>

      <Link to="/conteudo6">
          <button className="proximo">Proximo</button>
        </Link>
    <div className='atividade'>

<h2>Atividades do  Dia:</h2> 

<div className='data'> 
   <p>Data: 20/06/2024</p>
</div>

   <div className='texto'>
 
   <p className='t'> <strong>1.Enviar e-mail para condidatos </strong> </p>
    
   <p className='t'> Confirmar recebimento de 40 currículos e 
   agradecer pela candidatura por E-mail. </p>

   <p className='t'>Tempo para fazer:</p>
   
   <p className='t'> <i>Cada e-mail leva em torno de 3 minutos. </i> </p>
   
   <p className='t'> <strong> 2.Organização de espaço para dinâmicas de entrevista em grupo: </strong> </p>

   <p className='t'>reservar salas e preparar materiais necessários
   para as dinâmicas</p>

   <p className='t'>Tempo para fazer:</p>

   <p className='t'> <i> Leva 2 horas para a organização de tudo </i> </p>

   <p className='t'>Reunião de Equipe</p>

   <p className='t'> <strong> PRIORIDADE - (14h-15h) </strong> </p>
   
  

   </div>
</div>

   
    </div>
  );
}