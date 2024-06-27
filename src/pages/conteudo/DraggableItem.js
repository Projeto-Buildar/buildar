import { useDrag } from 'react-dnd';

const DraggableItem = ({ id, text, startArea }) => {
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
      className={`draggable-item ${isDragging ? 'dragging' : ''}`}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
      }}
    >
      {text}
    </div>
  );
};

export default DraggableItem;
