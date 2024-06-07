import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landingPage/LandingPage';
import Login from './pages/entrada/Login';
import Home from './pages/home/Home';
import Cadastro from './pages/entrada/Cadastro';
import Corredor from './pages/corredor/Corredor';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="cadastro" element={<Cadastro />} />
          <Route path="home" element={<Home />} />
          <Route path="corredor" element={<Corredor/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}