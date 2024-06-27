import { Link } from 'react-router-dom';
import HeaderHome from '../home/HeaderHome';
import './Conteudo.css';
import Capi from './imagem/Capi_Professor.png';

export default function Conteudo() {
  return (
    <div>
      <HeaderHome />
      <div className="cabecalho">
        <Link to="/corredor">
          <button className="voltarCorredor">Voltar para o corredor</button>
        </Link>
        <h2>Sala Gestão de Tempo 1</h2>
      </div>
      <img src={Capi} alt="Capi Professor" className="capi" />
      <div className="message-container">
        <div className="message-box">
          <p>Agora que você sabe a importancia dessa 
          habilidade, bora praticar!</p>
        </div>
      </div>
      <div className="message-container_c2">
        <div className="message-box2">
          <p>
          Se prepare para embarcar nessa jornada e descobrir 
          como organizar o seu tempo, cumprir suas tarefas e atividades 
          de forma organizada, e atender a prazos estabelecidos
          </p>
          
        </div>
        
      </div>

      <Link to="/conteudo2">
           <button className="anterior">Voltar</button>
      </Link>

      <Link to="/conteudo4">
          <button className="proximo">Proximo</button>
        </Link>
    </div>
  );
}