import { Link, useNavigate } from 'react-router-dom';
// import './Conteudo.css';
import Vivi from './imagem/vivi.png';
import Tela1 from './imagem/Tela1.jpg';
// import Perfil from './imagem/perfil.png';
import Prancheta from'./imagem/Prancheta.png';

export default function Conteudo() {
  const history = useNavigate();
  function irParaRotaAnterior() {
    history(-5);
  }
  return (
    <div>
      
      
      <button className="voltarCorredor" onClick={() => irParaRotaAnterior()}>Voltar para o corredor</button>
    
      <img src={Vivi} alt="Capi Professor" className="capi" />
      <div className="message-container">
        <div className="message-box">
        <p>Agora, imagine que você é um estagiário(a) na área de RH em uma grande empresa de tecnologia.
           Antes de começar seu trabalho, você precisa organizar as tarefas do seu dia. Seu horário de trabalho é 
           das 9h às 15h e seu horário de almoço é das 12h às 13h. Sua supervisora marcou uma reunião com a equipe das 14h às 15h.</p>
        </div>
      </div>
     
      <img src={Tela1} alt="tela5" className='tela5'/>
      <div className='exemplo'>
      <img src={Prancheta} alt="prancheta" className='prancheta'/>
       </div>
      
      <Link to="/conteudo4">
           <button className="anterior">Voltar</button>
      </Link>

      <Link to="/conteudo6">
          <button className="proximo">Proximo</button>
        </Link>




  
   
    </div>
  );
}