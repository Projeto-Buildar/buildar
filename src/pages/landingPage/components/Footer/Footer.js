// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../../../../i18n"

import logo from '../../images/logo_off.webp';
import instagram from '../../images/social_instagram.webp';
import tiktok from '../../images/social_tiktok.webp';
import linkedin from '../../images/social_linkedin.webp';
import github from '../../images/social_github.webp';

import './Footer.css';

export default function Footer() {
  const {t, i18n } = useTranslation();
  return (
    <footer id='footer'>
      <div className="footerTop">
        <section className="linkList">
          <div className="footer-links">
            <div className="link-group">
              {/* <Link to="#">{t("Quem somos")}</Link> */}
              <Link to="/sobre">{t("About")}</Link>
              <Link to="/conexoes">{t("Connect")}</Link>
              <Link to="/apoie">{t("Support")}</Link>
            </div>
          <div className="link-group">
              {/* <Link to="#">{t("Perguntas Frequentes")}</Link> */}
              <Link to="/duvidas-frequentes">{t("FAQ")}</Link>
              <Link to="/faleConosco">{t("Contact")}</Link>
              <Link to="/suporte">{t("Suporte")}</Link>
              </div>
          </div>
        </section>
        {/* <section >
          <a href="./index.html"><img src={logo} className="logo" alt="Logo" /></a>
          <p className="footer-rigth">{t("Rights")}</p>
        </section> */}
        <Link to="/">
          <img src={logo} className="logo" alt="Logo" />
          <p className="footer-rigth">{t("Rights")}</p>
        </Link>
      </div>
      <div className="breakBar"></div>
      <div className="footerBottom">
        <section className="linkList">
          <Link to="/termos"  className="footer-linkList">{t("Privacy")}</Link>
          <Link to="/termos" className="footer-linkList">{t("Terms")}</Link>
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
