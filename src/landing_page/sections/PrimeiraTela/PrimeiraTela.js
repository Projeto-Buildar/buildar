import './PrimeiraTela.css';
import logo from './images/logo_on.png';

export default function PrimeiraTela() {
  return(
      <main id="primeiraTela">
        <header>
          <nav>
            <a href='./index.html'><img src={logo} className='logo'/></a>
            <div className='button'>Dê O PLAY</div>
          </nav>
        </header>
        <h1>Primeira Tela: apresentação</h1>
      </main>
  );
}