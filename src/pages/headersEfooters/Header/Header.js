import './Header.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "../../../i18n"

import logo from '../images/logo_on.webp';

export default function Header() {
  const { t, i18n } = useTranslation();
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
          <img src={logo} className='logo'/>
        </Link>
        <Link to="/cadastro">
          <div id='button' style={{opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s', visibility: isVisible ? 'visible' : 'hidden'}}>{t("Play")}</div>
        </Link>
      </nav>
    </header>
  );
}
