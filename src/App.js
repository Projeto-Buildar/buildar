import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ItemProvider } from './pages/conteudo/Itens';
import LandingPage from './pages/landingPage/LandingPage';
import Login from './pages/entrada/Login';
import Home from './pages/home/Home';
import Cadastro from './pages/entrada/Cadastro';
import Corredor from './pages/corredor/Corredor';
import SobreNos from './pages/sobre/SobreNos';
import Conexoes from './pages/conexoes/Conexoes';
import Pagamento from './pages/pagamento/Pagamento';
import Perfil from './pages/perfil/Perfil';
import Voluntario from './pages/inscricaoVoluntario/Voluntario';
import FaleConosco from './pages/faleConosco/FaleConosco';
import Ranqueada from './pages/ranqueada/Ranqueada';
// import Conteudo from './pages/conteudo/Conteudo';
// import Conteudo2 from './pages/conteudo/Conteudo2';
// import Conteudo3 from './pages/conteudo/Conteudo3';
// import Conteudo4 from './pages/conteudo/Conteudo4';
// import Conteudo5 from './pages/conteudo/Conteudo5';
import Conteudo6 from './pages/conteudo/Conteudo6';
import Conteudo7 from './pages/conteudo/Conteudo7';
import Pratica from './pages/conteudo/Pratica';
import Termos from './pages/termos/Termos';
import AreaDescanso from './pages/areaDescanso/AreaDescanso';
import GameDescanso from './GameDescanso';
import LojaCopy from './pages/loja copy/LojaCopy';
import Loja from './pages/loja/Loja';
import InicioQuiz from './pages/quiz/InicioQuiz'
import Quiz from './pages/quiz/Quiz1';
import Quiz2 from './pages/quiz/Quiz2';
import Conteudos from './pages/conteudo/Conteudos';
import './i18n';


export default function App() {
  const {i18n } = useTranslation();
  // Inicializa o idioma selecionado com o valor armazenado no localStorage ou o padrão
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'pt');

  useEffect(() => {
    // Atualiza o idioma no i18n e no localStorage quando o selectedLanguage muda
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  }

  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  const evitarLinhasViúvas = (texto) => {
    const palavras = texto.split(' ');
    if (palavras.length > 1) {
      palavras[palavras.length - 2] += '\u00A0' + palavras.pop();
    }
    return palavras.join(' ');
  };

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="login" element={<Login />} />
              <Route path="cadastro" element={<Cadastro />} />
              <Route path="home" element={<Home />} />
              <Route path="corredor/:mapaNome" element={<Corredor />} />
              <Route path="sobre" element={<SobreNos />} />
              <Route path="pagamento" element={<Pagamento />} />
              <Route path="conexoes" element={<Conexoes />} />
              <Route path="perfil" element={<Perfil />} />
              <Route path="inscricaoVoluntario" element={<Voluntario />} />
              <Route path="faleConosco" element={<FaleConosco />} />
              <Route path="ranqueada" element={<Ranqueada />} />
              {/* <Route path="conteudo" element={<Conteudo />} />
              <Route path="conteudo2" element={<Conteudo2 />} />
              <Route path="conteudo3" element={<Conteudo3 />} />
              <Route path="conteudo4" element={<Conteudo4 />} />
              <Route path="conteudo5" element={<Conteudo5 />} /> */}
              <Route path="conteudo6" element={<Conteudo6 />} />
              <Route path="conteudos/:miniGame/conteudo6" element={<Conteudo6 />} />
              <Route path="conteudo7" element={<Conteudo7 />} />
              <Route path='pratica' element={<Pratica />}></Route>
              <Route path='game_descanso' element={<GameDescanso />} />
              <Route path='descanso' element={<AreaDescanso />}></Route>
              {/* <Route path="loja" element={<LojaCopy />} /> */}
              <Route path="loja" element={<Loja />} />
              <Route path="quiz" element={<InicioQuiz />} />
              <Route path="quiz1" element={<Quiz />} />
              <Route path="quiz2" element={<Quiz2 />} />
              <Route path='conteudos/:indice' element={<Conteudos />} />
              <Route path='termos' element={<Termos></Termos>}/>
            </Routes>
        </BrowserRouter>

      <div className={`languageButton ${isFirefox ? '' : 'fontEmoji'}`}>
        <select name="language" id="language" aria-placeholder='Idioma' onChange={handleLanguageChange} value={selectedLanguage}>
          <option value="pt">🇧🇷</option>
          <option value="en">🇺🇸</option>
          <option value="es">🇧🇴</option>
        </select>
      </div>
    </div >
  );
}