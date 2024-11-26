// Imports de CSS
import './App.css';

// Import de configuração de internacionalização (i18n)
import './i18n';

// Imports de Bibliotecas
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

// Imports de Hooks
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Imports de Context Provider 
/* OBS: Context Provider é uma funcionalidade do React que permite compartilhar dados globalmente
em toda a árvore de componentes, sem a necessidade de passar props manualmente em cada nível.*/
import { ItemProvider } from './pages/conteudo/Itens';

import Rotas from './routes/Rotas';

export default function App() {
  const { i18n } = useTranslation();

  // Inicializa o idioma selecionado com o valor armazenado no localStorage ou o padrão
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'pt');

  useEffect(() => {
    // Atualiza o idioma no i18n e no localStorage quando o selectedLanguage muda
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  }, [selectedLanguage, i18n]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  }

  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  return (
    <div className="App">

      <DndProvider backend={HTML5Backend}>
        <ItemProvider>
          <Rotas />
        </ItemProvider>
      </DndProvider>

      <div className={`languageButton ${isFirefox ? '' : 'fontEmoji'}`}>

        <select name="language" id="language" aria-label="Idioma" onChange={handleLanguageChange} value={selectedLanguage}>

          <option value="pt">🇧🇷</option>
          <option value="en">🇺🇸</option>
          <option value="es">🇧🇴</option>

        </select>

      </div>

    </div >
  );
}