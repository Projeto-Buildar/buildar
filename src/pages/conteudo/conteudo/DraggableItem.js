import React from 'react';
import { useDrag } from 'react-dnd'; // Importa o hook useDrag do react-dnd.

const DraggableItem = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM', // Define o tipo de item.
    item: { id }, // Define os dados do item arrastado.
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), // Verifica se o item está sendo arrastado.
    }),
  }));

  return (
    <div
      ref={drag} // Conecta a div ao hook useDrag.
      className={`draggable-item ${isDragging ? 'dragging' : ''}`} // Aplica uma classe adicional se o item estiver sendo arrastado.
      style={{
        opacity: isDragging ? 0.5 : 1, // Muda a opacidade do item quando arrastado.
        cursor: 'grab', // Muda o cursor para indicar que o item é arrastável.
      }}
    >
      {text}  
      .
    </div>
  );
};

export default DraggableItem; // Exporta o componente DraggableItem.
