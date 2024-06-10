// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../images/logo_off.png';
import instagram from '../../images/social_instagram.png';
import tiktok from '../../images/social_tiktok.png';
import linkedin from '../../images/social_linkedin.png';
import github from '../../images/social_github.png';

export default function Footer() {
  return (
    <footer>
      <div className="footerTop">
        <section className="linkList">
          <div className="footer-links">
            <Link to="/sobre">Sobre</Link>
            <Link to="/conexoes">Conexões</Link>
            <Link to="/apoie">Apoie a Buildar</Link>
            <Link to="/duvidas-frequentes">Dúvidas Frequentes</Link>
            <Link to="/fale-conosco">Fale Conosco</Link>
            <Link to="/suporte">Suporte</Link>
          </div>
        </section>
        <section>
          <a href="./index.html"><img src={logo} className="logo" alt="Logo" /></a>
          <p>Buildar © 2024 | Todos os direitos reservados</p>
        </section>
      </div>
      <div className="breakBar"></div>
      <div className="footerBottom">
        <section className="linkList">
          <a href="#"><p>Política de Privacidade</p></a>
          <a href="#"><p>Termos de Uso</p></a>
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
