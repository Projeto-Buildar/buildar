import './headerHome.css'
// import logo from './images/logo_on.png';
import logo from './images/logo_on.webp';

import BtnsNav from './BtnsNav';
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../../i18n"

export default function HeaderHome() {
  const {t, i18n } = useTranslation();
  const textoBtn = [
    {
      texto: "Home",
      linkado: "/home"
    },
    {
      texto: t("Connect"),
      linkado: "/conexoes"
    },
    {
      texto: t("Shop"),
      linkado: "/loja"
    },
    {
      texto: t("Profile"),
      linkado: "/perfil"
    },
    {
      texto: t("Conteudo"),
      linkado: "/conteudo"
    }
  ]

  return (
    <header id='headerHome'>
      <nav>
      <Link to="/">
        <img src={logo} className='logo' />
      </Link>
      {textoBtn.map((object, index) => (          
          <BtnsNav key={index} texto={object.texto} link={object.linkado}></BtnsNav>        
        ))}
      </nav>
      <Outlet/>
    </header>
  );
}
