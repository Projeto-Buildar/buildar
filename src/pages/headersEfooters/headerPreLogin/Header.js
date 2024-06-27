import './headerPreLogin.css';
import logo from '../../images/logo_on.webp';
import language from '../../images/language.webp';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import { useTranslation } from 'react-i18next';
import "../../../../i18n"

export default function HeaderPreLogin(props) {
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
    <header id='headerPreLogin' className={`${props.classe ? props.classe : ""}`} >
      <nav>
        <Link to="/">
          <img src={logo} className='logo' />
        </Link>
        <div>
          <div className='button'>Dê O PLAY</div>
        </div>
      </nav>
    </header>
  );
}
