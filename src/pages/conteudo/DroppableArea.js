import React, { useContext, useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem';
import { ItemContext } from './Itens'; // Importe o contexto ItemContext

const DroppableArea = ({ id, className }) => {
  const { items, handleDrop } = useContext(ItemContext);
  const [temItem, setTemItem] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item) => {
      handleDrop(item.id, id);
      // Atualiza o estado após o drop
      setTemItem(true);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrop: () => {
      // Verifica se a área já contém um item
      const areaContainsItem = Object.values(items).some(item => item.area === id);
      return !areaContainsItem;
    },
  }), [items, id]);

  // Verifica se a área contém um item sempre que os itens são atualizados
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
