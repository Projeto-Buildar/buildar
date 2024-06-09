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
    texto: "Conexões",
    // linkado: "/conexoes"
  },
  {
    texto: "Loja",
    // linkado: "/loja"
  },
  {
    texto: "Perfil",
    // linkado: "/perfil"
  },
  {
    texto: "Mais",
    // linkado: "/mais"
  }
]

export default function HeaderHome() {
  return (
    <header>
      <nav>
      <Link to="/">
        <a href='./index.html'><img src={logo} className='logo' /></a>
      </Link>
      {textoBtn.map((object) => (          
          <BtnsNav texto={object.texto} link={object.linkado}></BtnsNav>        
        ))}
      </nav>
      <Outlet/>
    </header>
  );
}