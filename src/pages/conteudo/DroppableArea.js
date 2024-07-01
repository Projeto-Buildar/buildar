import React, { useContext, useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import DraggableItem from './DraggableItem'; // Verifique se o caminho está correto
import { ItemContext } from './Itens'; // Verifique se o caminho está correto

const DroppableArea = ({ id, className }) => {
  const { items, handleDrop } = useContext(ItemContext);
  const [temItem, setTemItem] = useState(false);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'ITEM',
    drop: (item) => {
      // Verifica se a área já contém 2 itens
      const areaContainsTwoItems = Object.values(items).filter(item => item.area === id).length >= 2;
      if (!areaContainsTwoItems) {
        handleDrop(item.id, id);
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    canDrop: () => {
      // Verifica se a área já contém um item
      const areaContainsItem = Object.values(items).some(item => item.area === id);
      // Verifica se o ID da área está entre 8 e 14
      const isInRange = id >= 8 && id <= 14;
      return (!areaContainsItem || !isInRange);
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
