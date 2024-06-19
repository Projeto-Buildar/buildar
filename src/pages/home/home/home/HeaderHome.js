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
      linkado: "/Loja"
    },
    {
      texto: t("Profile"),
      linkado: "/perfil"
    },
    {
      texto: t("voluntary"),
       linkado: "/inscricaoVoluntario"
    },
    {
      texto: t("Ranked"),
      linkado: "/ranqueada"
    }
  ]

  return (
    <header id='headerHome'>
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
