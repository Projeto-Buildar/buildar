import React, { useContext, useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem'; 
import { ItemContext } from './Itens'; 

const DroppableArea = ({ id, className }) => {
  const { items, handleDrop } = useContext(ItemContext);
  const [temItem, setTemItem] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item) => {

      const areaContainsTwoItems = Object.values(items).filter(item => item.area === id).length >= 2;
      if (!areaContainsTwoItems) {
        handleDrop(item.id, id);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrop: () => {

      const areaContainsItem = Object.values(items).some(item => item.area === id);

      const isInRange = id >= 8 && id <= 14;
      return (!areaContainsItem || !isInRange);
    },
  }), [items, id]);

  useEffect(() => {
    const areaContainsItem = Object.values(items).some(item => item.area === id);
    setTemItem(areaContainsItem);
  }, [items, id]);

  return (
    <div
      ref={drop}
      className={`droppable-area ${className} ${isOver ? 'over' : ''} ${temItem ? 'oi' : 'tchau'}`}
    >
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
