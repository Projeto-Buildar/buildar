import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from '../home/HeaderHome';
import './Conteudo.css';
import Capi from './imagem/Capi_Professor.png';
import Prancheta from './imagem/Prancheta.png';
import DraggableItem from './DraggableItem';
import DroppableArea from './DroppableArea';

export default function Conteudo() {
  const [items, setItems] = useState({
    1: { text: 'almoço', area: null },
    2: { text: 'Organização de Espaço', area: null },
    3: { text: 'Enviar E-mail', area: null },
    4: { text: 'Ligação com a melhor amiga', area: null },
    5: { text: 'Café da tarde', area: null },
  });

  const handleDrop = (itemId, areaId) => {
    setItems((prevItems) => ({
      ...prevItems,
      [itemId]: { ...prevItems[itemId], area: areaId },
    }));
  };

  return (
    <div>
      <Link to="/corredor">
        <button className="corredor_c6">Voltar para o corredor</button>
      </Link>

      <img src={Capi} alt="Capi Professor" className="capi_c6" />
      <div className="message-container_c6">
        <div className="message-box">
          <p>
            Como você organizará seu tempo para cumprir todas as tarefas?<br />
            Não se esqueça que a reunião e o seu horário de almoço são compromissos fixos e
            você pode dividir as outras atividades em 2 blocos de tempo.
          </p>
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
          {Object.keys(items).map((key) => (
            items[key].area === null && <DraggableItem key={key} id={key} text={items[key].text} />
          ))}
        </div>

        <div className='texto2'>
          <DroppableArea id="1" onDrop={handleDrop}>
            {Object.keys(items).map((key) => (
              items[key].area === "1" && <DraggableItem key={key} id={key} text={items[key].text} />
            ))}
          </DroppableArea>
          <DroppableArea id="2" onDrop={handleDrop}>
            {Object.keys(items).map((key) => (
              items[key].area === "2" && <DraggableItem key={key} id={key} text={items[key].text} />
            ))}
          </DroppableArea>
        </div>
      </div>
    </div>
  );
}
