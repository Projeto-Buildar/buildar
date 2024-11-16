import './headerHome.css'
import logo from './images/logo_on.webp';
import BtnsNav from './BtnsNav';
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import "../../i18n"

export default function HeaderHome() {
  const { t } = useTranslation();

  const textoBtn = [
    {
      texto: "Home",
      linkado: "/home",
      icon: 'home'
    },
    {
      texto: t("Connect"),
      linkado: "/conexoes",
      icon: '3p'
    },
    {
      texto: t("Shop"),
      linkado: "/loja",
      icon: 'shopping_cart'
    },
    {
      texto: t("Profile"),
      linkado: "/perfil",
      icon: 'person'
    },
    {
      texto: t("Rest"),
      linkado: "/descanso",
      icon: 'gamepad'
    },
    {
      texto: '≡',
      linkado:'/home',
      icon: '≡'
    }
  ]

  return (
    <header id='headerHome'>
      <nav>
        <Link to="/home">
          <img src={logo} className='logo' />
        </Link>
        {textoBtn.map((object, index) => (
          <BtnsNav key={index} texto={object.texto} link={object.linkado} icon={object.icon}></BtnsNav>
        ))}
      </nav>
      <Outlet />
    </header>
  );
}
