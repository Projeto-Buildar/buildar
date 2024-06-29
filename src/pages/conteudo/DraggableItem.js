import { useDrag } from 'react-dnd';
import { useState, useEffect } from 'react';

const DraggableItem = ({ id, text, startArea }) => {
  const [classePost, setClassePost] = useState('');

  useEffect(() => {
    // Adicione a classe apenas uma vez
    if (!classePost) {
      const rotateRandom = Math.floor(Math.random() * 3);
      switch (rotateRandom) {
        case 1:
          setClassePost('digDir');
          break;
        case 2:
          setClassePost('digEsq');
          break;
        default:
          setClassePost('');
          break;
      }
    }
  }, [classePost]);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ITEM',
    item: { id, startArea },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [id, startArea]);

  return (
    <div
      ref={drag}
      className={`draggable-item ${isDragging ? 'dragging' : ''} ${classePost}`}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
      }}
    >
      <p className={`textoPost`}>{text}</p>
    </div>
  );
};

export default DraggableItem;
