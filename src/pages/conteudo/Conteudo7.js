import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemContext } from './Itens'; // Importe o contexto ItemContext
// import './Conteudo.css';
import Vivi from './imagem/vivi.png';
import Tela4 from './imagem/Tela4.jpg';
import DroppableArea from './DroppableArea';

export default function Conteudo() {
  const { items, handleDrop } = useContext(ItemContext);

  useEffect(() => {
    const hasReloaded = localStorage.getItem('hasReloaded');
    
    if (!hasReloaded) {
      localStorage.setItem('hasReloaded', 'true');
      window.location.reload();
    } else {
      localStorage.removeItem('hasReloaded');
    }
  }, []);

  return (
    <div>
      <Link to="/corredor/GestaoDeTempo">
        <button className="voltarCorredor">Voltar para o corredor</button>
      </Link>

      <img src={Vivi} alt="Capi Professor" className="capi" />
      <div className="message-container">
        <div className="message-box">
          <p>Excelente trabalho! Você conseguiu planejar seu dia de forma eficiente. Lembre-se, a gestão do tempo é uma habilidade valiosa que vai ajudar muito na sua carreira.</p>
        </div>
      </div>

      <Link to="/conteudo6">
        <button className="anterior">Voltar</button>
      </Link>

      <div className='alinhamento_drop3'>
        <div className='drop3'>
          <DroppableArea id="7" className="droppable-area-7" />
          <DroppableArea id="8" className="droppable-area-8" />
          <DroppableArea id="9" className="droppable-area-9" />
          <DroppableArea id="10" className="droppable-area-10" />
          <DroppableArea id="11" className="droppable-area-11" />
        </div>
      </div>

      <img src={Tela4} alt="tela de fundo" className="tela1" />
    </div>
  );
}
