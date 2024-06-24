import React from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem';

const DroppableArea = ({ id, onDrop, items }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item) => onDrop(item.id, id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrop: (item) => {
      const itemAlreadyInArea = items[item.id]?.area === id;
      return !itemAlreadyInArea;
    },
  }), [items, id]);

  return (
    <div ref={drop} className={`droppable-area ${isOver ? 'over' : ''}`}>
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
