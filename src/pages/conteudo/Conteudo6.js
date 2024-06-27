import React from 'react';
import { Link } from 'react-router-dom';
import './Conteudo.css';
import Vivi from './imagem/vivi.png';
import Tela4 from './imagem/Tela4.jpg';
import DroppableArea from './DroppableArea';
import Prancheta2 from './imagem/Prancheta2.png';
import { ItemProvider } from './Itens'; // Importa o ItemProvider do contexto

export default function Conteudo() {
  return (
    <ItemProvider> {/* Envolve o conteúdo com o ItemProvider */}
      <div>
        <img src={Vivi} alt="Capi Professor" className="capi" />
        <div className="message-container2">
          <div className="message-box">
            <p>
              Como você organizará seu tempo para cumprir todas as tarefas?<br />
              Não se esqueça que a reunião e o seu horário de almoço são compromissos fixos e
              você pode dividir as outras atividades em 2 blocos de tempo.
            </p>
          </div>
        </div>

        <Link to="/corredor/GestaoDeTempo">
          <button className="voltarCorredor">Voltar para o corredor</button>
        </Link>

        <Link to="/conteudo5">
          <button className="anterior">Voltar</button>
        </Link>

        <Link to="/conteudo7">
          <button className="proximo">Próximo</button>
        </Link>

        <div className='atividade'>
          <div className='area_pratica'> 
            <img src={Prancheta2} alt="pracheta de atividade" className='prancheta2' />
          </div>
          <div className='alinhamento_drop1'>
            <div className='drop1'>
              <DroppableArea id="1" className="droppable-area-1" />
              <DroppableArea id="2" className="droppable-area-2" />
              <DroppableArea id="3" className="droppable-area-3" />
            </div>
          </div>
          <div className='drop2'>
            <DroppableArea id="4" className="droppable-area-4" />
            <DroppableArea id="5" className="droppable-area-5" />
          </div>
          <div className='alinhamento_drop3'>
            <div className='drop3'>
              <DroppableArea id="7" className="droppable-area-7" />
              <DroppableArea id="8" className="droppable-area-8" />
              <DroppableArea id="9" className="droppable-area-9" />
              <DroppableArea id="10" className="droppable-area-10" />
              <DroppableArea id="11" className="droppable-area-11" />
            </div>
          </div>
        </div>
        
        <img src={Tela4} alt="Tela de fundo" className="tela1" />
      </div>
    </ItemProvider>
  );
}
