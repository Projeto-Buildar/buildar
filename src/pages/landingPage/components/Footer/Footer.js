// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../images/logo_off.png';
import instagram from '../../images/social_instagram.png';
import tiktok from '../../images/social_tiktok.png';
import linkedin from '../../images/social_linkedin.png';
import github from '../../images/social_github.png';

import { useTranslation } from 'react-i18next';
import "../../../../i18n"

export default function Footer() {
  const {t, i18n } = useTranslation();
  return (
    <footer>
      <div className="footerTop">
        <section className="linkList">
          <div className="footer-links">
            <Link to="/sobre">{t("About")}</Link>
            <Link to="/conexoes">{t("Connect")}</Link>
            <Link to="/apoie">{t("Support")}</Link>
            <Link to="/duvidas-frequentes">{t("FAQ")}</Link>
            <Link to="/fale-conosco">{t("Contact")}</Link>
            <Link to="/suporte">{t("Suporte")}</Link>
          </div>
        </section>
        <section>
          <a href="./index.html"><img src={logo} className="logo" alt="Logo" /></a>
          <p>{t("Rights")}</p>
        </section>
      </div>
      <div className="breakBar"></div>
      <div className="footerBottom">
        <section className="linkList">
          <a href="#"><p>{t("Privacy")}</p></a>
          <a href="#"><p>{t("Terms")}</p></a>
        </section>
        <section className="social">
          <a href="https://www.instagram.com/buildar_demoday/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@projeto_buildar" target="_blank" rel="noopener noreferrer">
            <img src={tiktok} alt="TikTok" />
          </a>
          <a href="https://www.linkedin.com/company/buildaroficial/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/projeto-buildar" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
        </section>
      </div>
    </footer>
  );
}
