import React from 'react';
import { useDrop } from 'react-dnd';

const DroppableArea = ({ id, onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item) => onDrop(item.id, id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`droppable-area ${isOver ? 'over' : ''}`}
    >
      {children}
    </div>
  );
};

export default DroppableArea;
