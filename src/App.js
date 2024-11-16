// Imports de CSS
import './App.css';

// Import de configuração de internacionalização (i18n)
import './i18n';

// Imports de Bibliotecas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

// Imports de Hooks
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

// Imports de Context Provider 
/* OBS: Context Provider é uma funcionalidade do React que permite compartilhar dados globalmente
em toda a árvore de componentes, sem a necessidade de passar props manualmente em cada nível.*/
import { ItemProvider } from './pages/conteudo/Itens';

// Imports de components
//---------------------------------------------------------------|

// Components acessiveis da landingPage
import LandingPage from './pages/landingPage/LandingPage';
import Login from './pages/entrada/Login';
import Cadastro from './pages/entrada/Cadastro';
import SobreNosTentativa from './pages/sobreTentativa/SobreNos';
import FaleConosco from './pages/faleConosco/FaleConosco';
import Termos from './pages/termos/Termos';

// Components acessiveis do Home
import Home from './pages/home/Home';
import Corredor from './pages/corredor/Corredor';
import Pratica from './pages/conteudo/Pratica';
import Conteudos from './pages/conteudo/Conteudos';
import Conteudo6 from './pages/conteudo/Conteudo6';
import Conteudo7 from './pages/conteudo/Conteudo7';

// Components acessiveis de Conexoes
import Conexoes from './pages/conexoes/Conexoes';
import Voluntario from './pages/inscricaoVoluntario/Voluntario';

// Components acessiveis da Loja
import Loja from './pages/loja/Loja';
import Pagamento from './pages/pagamento/Pagamento';

// Componente do Perfil
import Perfil from './pages/perfil/Perfil';

// Components acessiveis da Area de Descanso
import AreaDescanso from './pages/areaDescanso/AreaDescanso';
import GameDescanso from './GameDescanso';
import InicioQuiz from './pages/quiz/InicioQuiz'
import Quiz from './pages/quiz/Quiz1';
import Quiz2 from './pages/quiz/Quiz2';

//---------------------------------------------------------------|

//Nao esta sendo utilizado
//----------------------------------------------------|

import Ranqueada from './pages/ranqueada/Ranqueada';

// import SobreNos from './pages/sobre/SobreNos';
// import LojaCopy from './pages/loja copy/LojaCopy';

// import Conteudo from './pages/conteudo/Conteudo';
// import Conteudo2 from './pages/conteudo/Conteudo2';
// import Conteudo3 from './pages/conteudo/Conteudo3';
// import Conteudo4 from './pages/conteudo/Conteudo4';
// import Conteudo5 from './pages/conteudo/Conteudo5';

//----------------------------------------------------|

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
      <BrowserRouter>
        <DndProvider backend={HTML5Backend}>
          <ItemProvider>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="login" element={<Login />} />
                <Route path="cadastro" element={<Cadastro />} />
                <Route path="sobre" element={<SobreNosTentativa/>} />
                <Route path="faleConosco" element={<FaleConosco />} />
                <Route path='termos' element={<Termos></Termos>}/>
                <Route path="home" element={<Home />} />
                <Route path="corredor/:mapaNome" element={<Corredor />} />
                <Route path='pratica' element={<Pratica />}></Route>
                <Route path="conteudo6" element={<Conteudo6 />} />
                <Route path="conteudos/:miniGame/conteudo6" element={<Conteudo6 />} />
                <Route path="conteudos/:miniGame/conteudo7" element={<Conteudo7 />} />
                <Route path='conteudos/:indice' element={<Conteudos />} />
                <Route path="conexoes" element={<Conexoes />} />
                <Route path="inscricaoVoluntario" element={<Voluntario />} />
                <Route path="loja" element={<Loja />} />
                <Route path="pagamento" element={<Pagamento />} />
                <Route path="perfil" element={<Perfil />} />
                <Route path='game_descanso' element={<GameDescanso />} />
                <Route path='descanso' element={<AreaDescanso />}></Route>
                <Route path="quiz" element={<InicioQuiz />} />
                <Route path="quiz1" element={<Quiz />} />
                <Route path="quiz2" element={<Quiz2 />} />
                <Route path="ranqueada" element={<Ranqueada />} />
                {/*           
                  <Route path="conteudo" element={<Conteudo />} />
                  <Route path="conteudo2" element={<Conteudo2 />} />
                  <Route path="conteudo3" element={<Conteudo3 />} />
                  <Route path="conteudo4" element={<Conteudo4 />} />
                  <Route path="conteudo5" element={<Conteudo5 />} /> 
                  <Route path="loja" element={<LojaCopy />} />
                  <Route path='sobre_nos_1' element={<SobreNosTentativa/>} />
                */}
              </Routes>
            </ItemProvider>
          </DndProvider>
      </BrowserRouter>

      <div className={`languageButton ${isFirefox ? '' : 'fontEmoji'}`}>

        <select name="language" id="language" aria-label="Idioma"  onChange={handleLanguageChange} value={selectedLanguage}>

          <option value="pt">🇧🇷</option>
          <option value="en">🇺🇸</option>
          <option value="es">🇧🇴</option>

        </select>

      </div>

    </div >
  );
}