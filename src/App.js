// Imports de Bibliotecas
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

// Imports de Context Provider 
/* OBS: Context Provider é uma funcionalidade do React que permite compartilhar dados globalmente
em toda a árvore de componentes, sem a necessidade de passar props manualmente em cada nível.*/
import { ItemProvider } from './pages/conteudo/Itens';

// Imports de componentes funcionais
import Rotas from './routes/Rotas.js';
import IdiomaController from './controllers/IdiomaController.js';

// Imports de CSS
import './App.css';

export default function App() {

  return (
    <div className="App">

      <DndProvider backend={HTML5Backend}>
        <ItemProvider>
          <Rotas />
        </ItemProvider>
      </DndProvider>

      <IdiomaController />

    </div >
  );
}