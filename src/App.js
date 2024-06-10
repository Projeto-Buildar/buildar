import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage';
import Login from './pages/entrada/Login';
import Home from './pages/home/Home';
import Cadastro from './pages/entrada/Cadastro';
import Corredor from './pages/corredor/Corredor';
import SobreNos from './pages/sobre/SobreNos';

import Pagamento from './pages/pagamento/Pagamento';

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

        </Routes>
      </BrowserRouter>
    </div>
  );
}
