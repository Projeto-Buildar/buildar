import { Link, useNavigate } from 'react-router-dom';
import './Conteudo1.css';
import Vivi from './imagem/vivi.png';
import Perfil from './imagem/perfil.png'

export default function Conteudo() {
  const history = useNavigate();
  function irParaRotaAnterior() {
    history(-1);
  }
  return (
    <div className='Container'>

      <div className='cabecalho' >

        <div className='vivi'>
          <img src={Vivi} alt="Vivi Professora" className="Vivi_img" />
        </div>

        <div className="message-box2">

          <p className='text_recepçao'>

            <h2 className='recepcao'> Olá Jovem, seja bem-vindo(a)!</h2>

            Nessa sala você aprenderá sobre a gestão de tempo, uma habilidade crucial para alcançar
            a eficiência e o sucesso em qualquer área de atuação.
          </p>

        </div>

      </div>

      <div className='container_perfil'>

        <div className='perfil_usuario'>
          <img src={Perfil} alt="perfil" className='perfil' />
        </div>

        <div className='escolha'>

          <div className='botao1'>
            <Link to="/conteudo2">
              <button className='escolha1'>Estou ansioso para começar!</button>
            </Link>
          </div>

          <div className='botao2'>
            <Link to="/conteudo2">
              <button className='escolha2'>Que começem os jogos</button>
            </Link>
          </div>
        </div>

      </div>

    </div>


  );
}