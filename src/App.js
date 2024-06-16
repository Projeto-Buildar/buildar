import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}
