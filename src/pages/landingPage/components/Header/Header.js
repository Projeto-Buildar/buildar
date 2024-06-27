import './Header.css';
import logo from '../../images/logo_on.webp';
import language from '../../images/language.webp';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import "../../../../i18n"

export default function Header(props) {
  const {t, i18n } = useTranslation();

  // Inicializa o idioma selecionado com o valor armazenado no localStorage ou o padrão
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'pt');

  useEffect(() => {
    // Atualiza o idioma no i18n e no localStorage quando o selectedLanguage muda
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('language', selectedLanguage);
  }, [selectedLanguage]);

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  }

  return (
    <header id='headerLadingPage' className={`${props.classe ? props.classe : ""}`} >
      <nav>
        <Link to="/">
          <a href='./index.html'><img src={logo} className='logo' /></a>
        </Link>
        <div>
          <div className='button'>Dê O PLAY</div>
          {/* <div className='languageButton'>
            <img src={language} />
            <select name="language" id="language" aria-placeholder='Idioma' onChange={handleLanguageChange} value={selectedLanguage}>
              <option value="pt">Português</option>
              <option value="en">Inglês</option>
              <option value="es">Espanhol</option>
            </select>
          </div> */}
        </div>
      </nav>
    </header>
  );
}
