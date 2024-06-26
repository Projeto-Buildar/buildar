import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Conteudo.css';
import Vivi from './imagem/vivi.png';
import Tela6 from './imagem/Tela6.png';
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
    7: { id: 7, text: 'Tarefa 7', area: "7" },
    8: { id: 8, text: 'Tarefa 8', area: "8" },
    9: { id: 9, text: 'Tarefa 9', area: "9" },
    10: { id: 10, text: 'Tarefa 10', area: "10" },
    11: { id: 11, text: 'Tarefa 11', area: "11" },
  };

  const [items, setItems] = useState(initialItems);
  const [userValues, setUserValues] = useState({
    7: "",
    8: "",
    9: "",
    10: "",
    11: ""
  });

  const maxValues = {
    7: 10,
    8: 20,
    9: 15,
    10: 30,
    11: 25
  };

  const [validationMessages, setValidationMessages] = useState({});

  const handleDrop = (itemId, areaId) => {
    const currentItem = items[itemId];
    if (currentItem.area === areaId) {
      return;
    }
    setItems(prevItems => ({
      ...prevItems,
      [itemId]: { ...prevItems[itemId], area: areaId },
    }));
    alert(`Item ${currentItem.text} foi solto na área ${areaId}`);
  };

  const handleChange = (taskId, value) => {
    setUserValues(prevValues => ({
      ...prevValues,
      [taskId]: value,
    }));
  };

  const validateTasks = () => {
    let isValid = true;
    let newValidationMessages = {};

    Object.keys(userValues).forEach(taskId => {
      if (["7", "8", "9", "10", "11"].includes(taskId)) {
        const value = parseInt(userValues[taskId], 10);
        if (isNaN(value) || value > maxValues[taskId]) {
          isValid = false;
          newValidationMessages[taskId] = `O valor para ${initialItems[taskId]?.text || 'tarefa'} não pode exceder ${maxValues[taskId]}.`;
        }
      }
    });

    setValidationMessages(newValidationMessages);
    return isValid;
  };

  const handleSubmit = () => {
    const isValid = validateTasks();
    if (isValid) {
      alert("Todas as tarefas estão válidas!");
    } else {
      alert("Algumas tarefas precisam ser corrigidas.");
    }
  };

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
            <DroppableArea id="1" onDrop={(itemId) => handleDrop(itemId, "1")} items={items} className="droppable-area-1" />
            <DroppableArea id="2" onDrop={(itemId) => handleDrop(itemId, "2")} items={items} className="droppable-area-2" />
            <DroppableArea id="3" onDrop={(itemId) => handleDrop(itemId, "3")} items={items} className="droppable-area-3" />
          </div>
        </div>
        <div className='drop2'>
          <DroppableArea id="4" onDrop={(itemId) => handleDrop(itemId, "4")} items={items} className="droppable-area-4" />
          <DroppableArea id="5" onDrop={(itemId) => handleDrop(itemId, "5")} items={items} className="droppable-area-5" />
        </div>
        <div className='alinhamento_drop3'>
          <div className='drop3'>
            <DroppableArea id="7" onDrop={(itemId) => handleDrop(itemId, "7")} items={items} className="droppable-area-7" />
            <DroppableArea id="8" onDrop={(itemId) => handleDrop(itemId, "8")} items={items} className="droppable-area-8" />
            <DroppableArea id="9" onDrop={(itemId) => handleDrop(itemId, "9")} items={items} className="droppable-area-9" />
            <DroppableArea id="10" onDrop={(itemId) => handleDrop(itemId, "10")} items={items} className="droppable-area-10" />
            <DroppableArea id="11" onDrop={(itemId) => handleDrop(itemId, "11")} items={items} className="droppable-area-11" />
          </div>
        </div>
      </div>

      <div className="task-inputs">
        {Object.keys(userValues).map(taskId => (
          ["7", "8", "9", "10", "11"].includes(taskId) &&
          <div key={taskId}>
            <label>{initialItems[taskId]?.text || `Tarefa ${taskId}`}</label>
            <input
              type="number"
              value={userValues[taskId] || ""}
              onChange={(e) => handleChange(taskId, e.target.value)}
            />
            {validationMessages[taskId] && (
              <p className="validation-message">{validationMessages[taskId]}</p>
            )}
          </div>
        ))}
      </div>

      <button onClick={handleSubmit}>Validar Tarefas</button>
      
      <img src={Tela6} alt="Tela de fundo" className="tela6" />
    </div>
  );
}
