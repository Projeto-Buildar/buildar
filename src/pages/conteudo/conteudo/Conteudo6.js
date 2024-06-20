import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Conteudo.css'; // Estilos CSS específicos para este componente
import Capi from './imagem/Capi_Professor.png'; // Importa a imagem do Capi Professor
import Prancheta from './imagem/Prancheta.png'; // Importa a imagem da prancheta
import DraggableItem from './DraggableItem'; // Componente para itens arrastáveis
import DroppableArea from './DroppableArea'; // Componente para áreas onde itens podem ser soltos

export default function Conteudo() {
  // Estado inicial dos itens a serem arrastados
  const [items, setItems] = useState({
    1: { text: 'almoço', area: null }, // Item 1 com texto 'almoço' e área inicialmente nula
    2: { text: 'Organização de Espaço', area: null }, // Item 2 com texto 'Organização de Espaço' e área inicialmente nula
    3: { text: 'Enviar E-mail', area: null }, // Item 3 com texto 'Enviar E-mail' e área inicialmente nula
    4: { text: 'Ligação com a melhor amiga', area: null }, // Item 4 com texto 'Ligação com a melhor amiga' e área inicialmente nula
    5: { text: 'Café da tarde', area: null }, // Item 5 com texto 'Café da tarde' e área inicialmente nula
  });

  // Estado para controlar qual item está em cada área
  const [occupiedAreas, setOccupiedAreas] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  });

  // Função para lidar com o início de arrastar um item
  const handleDragStart = (itemId) => {
    // Salva a área original do item antes de arrastá-lo
    const currentArea = items[itemId].area;
    setOccupiedAreas((prevAreas) => ({
      ...prevAreas,
      [currentArea]: null, // Libera a área atual
    }));
  };

  // Função para lidar com o evento de soltar um item em uma área
  const handleDrop = (itemId, areaId) => {
    // Verifica se a área já está ocupada
    if (occupiedAreas[areaId] !== null) {
      // Retorna o item para a posição original
      const currentArea = items[itemId].area;
      setItems((prevItems) => ({
        ...prevItems,
        [itemId]: { ...prevItems[itemId], area: currentArea }, // Retorna o item para a área original
      }));
    } else {
      // Define o item na nova área
      setItems((prevItems) => ({
        ...prevItems,
        [itemId]: { ...prevItems[itemId], area: areaId }, // Atualiza a área do item para a área onde foi solto
      }));
      setOccupiedAreas((prevAreas) => ({
        ...prevAreas,
        [areaId]: itemId, // Marca a área como ocupada pelo item
      }));
    }
  };

  return (
    <div>
      {/* Botão para voltar para a página 'corredor' */}
      <Link to="/corredor">
        <button className="corredor_c6">Voltar para o corredor</button>
      </Link>

      {/* Imagem do Capi Professor */}
      <img src={Capi} alt="Capi Professor" className="capi_c6" />

      {/* Container da mensagem */}
      <div className="message-container_c6">
        <div className="message-box">
          <p>
            Como você organizará seu tempo para cumprir todas as tarefas?<br />
            Não se esqueça que a reunião e o seu horário de almoço são compromissos fixos e
            você pode dividir as outras atividades em 2 blocos de tempo.
          </p>
        </div>
      </div>

      {/* Botão 'Voltar' para a página '/conteudo5' */}
      <Link to="/conteudo5">
        <button className="anterior">Voltar</button>
      </Link>

      {/* Botão 'Próximo' para a página '/conteudo7' */}
      <Link to="/conteudo7">
        <button className="proximo">Próximo</button>
      </Link>

      {/* Div para a atividade de planejamento */}
      <div className='atividade_c6'>
        {/* Imagem da prancheta */}
        <img src={Prancheta} alt="prancheta" className="prancheta" />

        {/* Título 'Planejamento' */}
        <h2>Planejamento</h2>

        {/* Divisão para os itens não posicionados */}
        <div className='texto1'>
          {/* Mapeia os itens que não estão em nenhuma área */}
          {Object.keys(items).map((key) => (
            items[key].area === null && <DraggableItem key={key} id={key} text={items[key].text} onDragStart={() => handleDragStart(key)} />
          ))}
        </div>

        {/* Divisão para as áreas onde os itens podem ser soltos */}
        <div className='texto2'>
          {/* Área 1 onde os itens podem ser soltos */}
          <DroppableArea id="1" onDrop={(itemId) => handleDrop(itemId, "1")}>
            {/* Renderiza apenas o item que está na área 1, se houver */}
            {items[1] && items[1].area === "1" && <DraggableItem key={1} id={1} text={items[1].text} />}
          </DroppableArea>

          {/* Área 2 onde os itens podem ser soltos */}
          <DroppableArea id="2" onDrop={(itemId) => handleDrop(itemId, "2")}>
            {/* Renderiza apenas o item que está na área 2, se houver */}
            {items[2] && items[2].area === "2" && <DraggableItem key={2} id={2} text={items[2].text} />}
          </DroppableArea>

          {/* Área 3 onde os itens podem ser soltos */}
          <DroppableArea id="3" onDrop={(itemId) => handleDrop(itemId, "3")}>
            {/* Renderiza apenas o item que está na área 3, se houver */}
            {items[3] && items[3].area === "3" && <DraggableItem key={3} id={3} text={items[3].text} />}
          </DroppableArea>

          {/* Área 4 onde os itens podem ser soltos */}
          <DroppableArea id="4" onDrop={(itemId) => handleDrop(itemId, "4")}>
            {/* Renderiza apenas o item que está na área 4, se houver */}
            {items[4] && items[4].area === "4" && <DraggableItem key={4} id={4} text={items[4].text} />}
          </DroppableArea>

          {/* Área 5 onde os itens podem ser soltos */}
          <DroppableArea id="5" onDrop={(itemId) => handleDrop(itemId, "5")}>
            {/* Renderiza apenas o item que está na área 5, se houver */}
            {items[5] && items[5].area === "5" && <DraggableItem key={5} id={5} text={items[5].text} />}
          </DroppableArea>

          {/* Área 6 onde os itens podem ser soltos */}
          <DroppableArea id="6" onDrop={(itemId) => handleDrop(itemId, "6")}>
            {/* Renderiza apenas o item que está na área 6, se houver */}
            {items[6] && items[6].area === "6" && <DraggableItem key={6} id={6} text={items[6].text} />}
          </DroppableArea>
        </div>
      </div>
    </div>
  );
}
