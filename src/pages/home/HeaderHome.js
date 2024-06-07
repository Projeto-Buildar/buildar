import './headerHome.css'
import logo from './images/logo_on.png';
import BtnsNav from './BtnsNav';

const textoBtn = [
  {
    texto: "Home"
  },
  {
    texto: "Conexões"
  },
  {
    texto: "Loja"
  },
  {
    texto: "Perfil"
  },
  {
    texto: "Mais"
  }
]

export default function HeaderHome() {
  return (
    <header>
      <nav>
        <a href='./index.html'><img src={logo} className='logo' /></a>
        {textoBtn.map(object => {
          return <BtnsNav texto={object.texto}></BtnsNav>
        })}
      </nav>
      <div className='btnDinamico'>

      </div>
    </header>
  );
}