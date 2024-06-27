// DroppableArea.js
import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem';
import { ItemContext } from './Itens'; // Importe o contexto ItemContext

const DroppableArea = ({ id, className }) => {
  const { items, handleDrop } = useContext(ItemContext); // Obtém items e handleDrop do contexto

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item) => handleDrop(item.id, id), // Usa a função handleDrop do contexto
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrop: (item) => {
      const itemAlreadyInArea = items[item.id]?.area === id;
      return !itemAlreadyInArea;
    },
  }), [items, id]);

  return (
    <div ref={drop} className={`droppable-area ${className} ${isOver ? 'over' : ''}`}>
      {items &&
        Object.values(items).map(item => {
          if (item.area === id) {
            return <DraggableItem key={item.id} id={item.id} text={item.text} startArea={item.area} />;
          }
          return null;
        })}
    </div>
  );
};

export default DroppableArea;
