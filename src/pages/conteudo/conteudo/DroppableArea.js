import React from 'react';
import { useDrop } from 'react-dnd'; // Importa o hook useDrop do react-dnd.

const DroppableArea = ({ id, onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM', // Define o tipo de item aceito.
    drop: (item) => onDrop(item.id, id), // Função chamada quando um item é solto.
    collect: (monitor) => ({
      isOver: !!monitor.isOver(), // Verifica se um item está sendo arrastado sobre a área.
    }),
  }));

  return (
    <div
      ref={drop} // Conecta a div ao hook useDrop.
      className={`droppable-area ${isOver ? 'over' : ''}`} // Aplica uma classe adicional se o item estiver sobre a área.
    >
      {children}
    </div>
  );
};

export default DroppableArea; // Exporta o componente DroppableArea.
