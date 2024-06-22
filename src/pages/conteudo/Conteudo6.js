import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Conteudo.css';
import Capi from './imagem/Capi_Professor.png';
import Prancheta from './imagem/Prancheta.png';
import DraggableItem from './DraggableItem';
import DroppableArea from './DroppableArea';

export default function Conteudo() {
  const initialItems = {
    1: { id: 1, text: 'almoço', area: "1" },
    2: { id: 2, text: 'Organização ', area: "2" },
    3: { id: 3, text: 'Enviar E-mail', area: "3" },
    4: { id: 4, text: 'Ligação', area: "4" },
    5: { id: 5, text: 'Café da tarde', area: "5" },
  };

  const [items, setItems] = useState(initialItems);

  const handleDrop = (itemId, areaId) => {
    const currentItem = items[itemId];

    // Verifica se o item já está na área de destino
    if (currentItem.area === areaId) {
      return;
    }

    // Move o item para a área de destino
    setItems(prevItems => ({
      ...prevItems,
      [itemId]: { ...prevItems[itemId], area: areaId },
    }));
  };

  const resetItems = () => {
    setItems(initialItems);
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
        <button className="proximo">Próximo</button>
      </Link>

      <div className='atividade_c6'>
        <img src={Prancheta} alt="prancheta" className="prancheta" />

        <h2>Planejamento</h2>

        <div className='texto1'>
          {Object.values(items).map(item => (
            <DraggableItem key={item.id} id={item.id} text={item.text} startArea={item.area} />
          ))}
        </div>

        <div className='drop1'>
          <DroppableArea id="1" onDrop={(itemId) => handleDrop(itemId, "1")} items={items}>
            {items["1"]?.area === "1" && <DraggableItem key={items["1"].id} id={items["1"].id} text={items["1"].text} startArea={items["1"].area} />}
          </DroppableArea>
          
          <DroppableArea id="2" onDrop={(itemId) => handleDrop(itemId, "2")} items={items}>
            {items["2"]?.area === "2" && <DraggableItem key={items["2"].id} id={items["2"].id} text={items["2"].text} startArea={items["2"].area} />}
          </DroppableArea>

          <DroppableArea id="3" onDrop={(itemId) => handleDrop(itemId, "3")} items={items}>
            {items["3"]?.area === "3" && <DraggableItem key={items["3"].id} id={items["3"].id} text={items["3"].text} startArea={items["3"].area} />}
          </DroppableArea>

          <DroppableArea id="4" onDrop={(itemId) => handleDrop(itemId, "4")} items={items}>
            {items["4"]?.area === "4" && <DraggableItem key={items["4"].id} id={items["4"].id} text={items["4"].text} startArea={items["4"].area} />}
          </DroppableArea>

          <DroppableArea id="5" onDrop={(itemId) => handleDrop(itemId, "5")} items={items}>
            {items["5"]?.area === "5" && <DraggableItem key={items["5"].id} id={items["5"].id} text={items["5"].text} startArea={items["5"].area} />}
          </DroppableArea>

          {/* Novo DroppableArea para teste */}
          <DroppableArea id="6" onDrop={(itemId) => handleDrop(itemId, "6")} items={items}>
            {items["6"]?.area === "6" && <DraggableItem key={items["6"].id} id={items["6"].id} text={items["6"].text} startArea={items["6"].area} />}
          </DroppableArea>
        </div>
      </div>
    </div>
  );
}
