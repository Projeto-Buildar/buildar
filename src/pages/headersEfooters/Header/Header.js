import './Header.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import useControleDeTraducao from '../../../shared/useControleDeTraducao';

import logo from '../images/logo_on.webp';

export default function Header() {
  const { t } = useControleDeTraducao();
  const [isVisible, setIsVisible] = useState(false);

  function checkScroll() {
    if (window.scrollY >= window.innerHeight * 0.67) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  useEffect(() => {
    checkScroll();
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <header id='headerLadingPage'>
      <nav>
        <Link to='/'>
          <img alt='Logo da Buildar' src={logo} className='logo'/>
        </Link>
        <Link to="/cadastro">
          <div id='button' style={{opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s', visibility: isVisible ? 'visible' : 'hidden'}}>{t("cadastrar")}</div>
        </Link>
      </nav>
    </header>
  );
}
