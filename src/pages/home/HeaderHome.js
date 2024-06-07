import './headerHome.css'
import logo from './images/logo_on.png';
import BtnsNav from './BtnsNav';
import { Outlet, Link } from "react-router-dom";

const textoBtn = [
  {
    texto: "Home",
    linkado: "/home"
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
      <Link to="/">
        <a href='./index.html'><img src={logo} className='logo' /></a>
      </Link>
      {textoBtn.map((object, index) => (          
          <BtnsNav texto={object.texto} link={object.linkado}></BtnsNav>        
        ))}
      </nav>
      <div className='btnDinamico'>

      </div>
      <Outlet/>
    </header>
  );
}