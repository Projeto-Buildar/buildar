import React, { createContext, useState, useEffect } from 'react';

export const ItemContext = createContext();

const getInitialItems = () => {
  const storedItems = localStorage.getItem('items');
  return storedItems ? JSON.parse(storedItems) : {
    1: { id: 1, text: 'Almoço', area: "1" },
    2: { id: 2, text: 'Organização do espaço', area: "2" },
    3: { id: 3, text: 'Enviar E-mail', area: "3" },
    4: { id: 4, text: 'Ligação', area: "4" },
    5: { id: 5, text: 'Café da tarde', area: "5" },
    6: { id: 6, text: 'Conversa com o chefe', area: "6" },
    7: { id: 7, text: 'Reunião com a equipe', area: "7" },
    8: { id: 8, text: 'Almoço', area: "1" },
    9: { id: 9, text: 'Enviar E-mail', area: "3" },
    10: { id: 10, text: 'Reunião com a equipe', area: "7" },
  };
};

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState(getInitialItems()); // Invocando getInitialItems()

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleDrop = (itemId, newArea) => {
    setItems((prevItems) => ({
      ...prevItems,
      [itemId]: { ...prevItems[itemId], area: newArea },
    }));
  };

  return (
    <ItemContext.Provider value={{ items, handleDrop }}>
      {children}
    </ItemContext.Provider>
  );
};
