import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemContext } from './Itens';
import Vivi from './imagem/vivi.png';
import Tela4 from './imagem/Tela4.jpg';
import DroppableArea from './DroppableArea';
import './Conteudo7.css';



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

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className='container_conteudo7'>
      
      
      <div className="message-container-miniGame7">

            <div className='vivi7'>
              <img src={Vivi} alt="Capi Professor" className="vivi_img7" />
            </div>

            <div className="message-box7">
              <p>
                Como você organizará seu tempo para cumprir todas as tarefas?<br />
              
              </p>
            </div>

          </div>

      <Link to="/corredor/GestaoDeTempo">
        <button className="voltarCorredor">Voltar para o corredor</button>
      </Link>

      <Link to="/conteudo6">
        <button className="anterior">Voltar</button>
      </Link>

      <div className='drop3_7'>

        <div className='drop_final7'><DroppableArea id="8" className="droppable-area-8" />
          <p className='horarios' style={{ textAlign: "center" }}>12h</p>
        </div>

        <div className='drop_final7'><DroppableArea id="9" className="droppable-area-8" />
          <p className='horarios7' style={{ textAlign: "center" }}>12h</p>
        </div>
        <div className='drop_final7'><DroppableArea id="10" className="droppable-area-8" />
          <p className='horarios7' style={{ textAlign: "center" }}>12h</p>
        </div>
        <div className='drop_final7'><DroppableArea id="11" className="droppable-area-8" />
          <p className='horarios7' style={{ textAlign: "center" }}>12h</p>
        </div>
        <div className='drop_final7'><DroppableArea id="12" className="droppable-area-8" />
          <p className='horarios7' style={{ textAlign: "center" }}>12h</p>
        </div>
        <div className='drop_final7'><DroppableArea id="13" className="droppable-area-8" />
          <p className='horarios7' style={{ textAlign: "center" }}>12h</p>
        </div>
        <div className='drop_final7'><DroppableArea id="14" className="droppable-area-8" />
          <p className='horarios7' style={{ textAlign: "center" }}>12h</p>
        </div>
      </div>
    </div>
  );
}
