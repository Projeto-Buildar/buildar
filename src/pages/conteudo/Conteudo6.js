import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Conteudo.css';
import Vivi from './imagem/vivi.png';
import Tela6 from './imagem/Tela6.png'
import DraggableItem from './DraggableItem';
import DroppableArea from './DroppableArea';
import Prancheta2 from './imagem/Prancheta2.png';
export default function Conteudo() {
  const initialItems = {
    1: { id: 1, text: 'almoço', area: "1" },
    2: { id: 2, text: 'Organização', area: "2" },
    3: { id: 3, text: 'Enviar E-mail', area: "3" },
    4: { id: 4, text: 'Ligação', area: "4" },
    5: { id: 5, text: 'Café da tarde', area: "5" },
  };

  const [items, setItems] = useState(initialItems);

  const handleDrop = (itemId, areaId) => {
    const currentItem = items[itemId];
    if (currentItem.area === areaId) {
      return;
    }
    setItems(prevItems => ({
      ...prevItems,
      [itemId]: { ...prevItems[itemId], area: areaId },
    }));
  };

  console.log(handleDrop);

  return (
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
        <button className="corredor">Voltar para o corredor</button>
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
          <DroppableArea id="1" onDrop={(itemId) => handleDrop(itemId, "1")} items={items} />
          <DroppableArea id="2" onDrop={(itemId) => handleDrop(itemId, "2")} items={items} />
          <DroppableArea id="3" onDrop={(itemId) => handleDrop(itemId, "3")} items={items} />
          </div>
          </div>
         
          <div className='drop2'>
          <DroppableArea id="4" onDrop={(itemId) => handleDrop(itemId, "4")} items={items} />
          <DroppableArea id="5" onDrop={(itemId) => handleDrop(itemId, "5")} items={items} />
          </div>
   
        
       
        <div className='alinhamento_drop3'>
        <div className='drop3'>
          <DroppableArea id="7" onDrop={(itemId) => handleDrop(itemId, "7")} items={items}/>
          <DroppableArea id="8" onDrop={(itemId) => handleDrop(itemId, "8")} items={items} />
          <DroppableArea id="9" onDrop={(itemId) => handleDrop(itemId, "9")} items={items} />
          <DroppableArea id="10" onDrop={(itemId) => handleDrop(itemId, "10")} items={items} />
          <DroppableArea id="11" onDrop={(itemId) => handleDrop(itemId, "11")} items={items} />
          
        </div>
        </div>
      </div>
      
      <img src={Tela6} alt="Tela de fundo" className="tela6" />
      
      
    
    </div>


  );
}
