import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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
import Conteudo from './pages/conteudo/Conteudo';
import Conteudo2 from './pages/conteudo/Conteudo2';
import Conteudo3 from './pages/conteudo/Conteudo3';
import Conteudo4 from './pages/conteudo/Conteudo4';
import Conteudo5 from './pages/conteudo/Conteudo5';
import Conteudo6 from './pages/conteudo/Conteudo6';
import Conteudo7 from './pages/conteudo/Conteudo7';
import Loja from './pages/loja/Loja';
import AssistiveScriptLoader from './Assistive';
import Pratica from './pages/conteudo/Pratica';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="home" element={<Home />} />
          <Route path="corredor" element={<Corredor />} />
          <Route path="sobre" element={<SobreNos />} />
          <Route path="pagamento" element={<Pagamento />} />
          <Route path="conexoes" element={<Conexoes />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="inscricaoVoluntario" element={<Voluntario />} />
          <Route path="faleConosco" element={<FaleConosco />} />
          <Route path="ranqueada" element={<Ranqueada />} />
          <Route path="loja" element={<Loja />} />
          <Route path="conteudo" element={<Conteudo />} />
          <Route path="conteudo2" element={<Conteudo2 />} />
          <Route path="conteudo3" element={<Conteudo3 />} />
          <Route path="conteudo4" element={<Conteudo4 />} />
          <Route path="conteudo5" element={<Conteudo5 />} />
          <Route path="conteudo6" element={<Conteudo6 />} />
          <Route path="conteudo7" element={<Conteudo7 />} />
          <Route path='pratica' element={<Pratica></Pratica>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
