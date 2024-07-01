import { useDrag } from 'react-dnd';
import { useState, useEffect } from 'react';

const DraggableItem = ({ id, text, startArea }) => {
  const [classePost, setClassePost] = useState('');
  const [estaDobrado, serEstaDobrado] = useState('');
  useEffect(() => {
    // Adicione a classe apenas uma vez
    if (!classePost) {
      const rotateRandom = Math.floor(Math.random() * 3);
      serEstaDobrado(Math.floor(Math.random() * 2) === 1 ? 'temDobrado' : '');
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
      className={`draggable-item ${isDragging ? 'dragging' : ''} ${classePost} ${estaDobrado}`}
      style={{
        opacity: isDragging ? 0 : 1,
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
    >
      <p className={`textoPost`}>{text}</p>
    </div>
  );
};

export default DraggableItem;
