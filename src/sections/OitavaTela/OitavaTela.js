import React from 'react';
import './OitavaTela.css';
import logo from './img/Logo.png'; 
import instagramIcon from './img/Instagram.png'; 
import linkedinIcon from './img/Linkedin.png'; 
import tiktokIcon from './img/Tiktok.png'; 
import githubicon from './img/github.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-column">
            <a href="#">Home</a>
            <a href="#">Sobre</a>
            <a href="#">Networking</a>
            <a href="#">Assine</a>
            <a href="#">Fale Conosco</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Ajuda e Suporte</a>
          </div>
        </div>
        <div className="footer-center">
          <img src={logo} alt="Logo" className="logo" />
          <p>Buildar © 2024 | Todos os direitos reservados</p>
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <div className="social-icons">
              <a href="https://www.instagram.com/buildar_oficial/"><img src={instagramIcon} alt="Instagram" /></a>
              <a href="https://www.linkedin.com/company/buildaroficial/"><img src={linkedinIcon} alt="LinkedIn" /></a>
              <a href="https://www.tiktok.com/@projeto_buildar"><img src={tiktokIcon} alt="TikTok" /></a>
              <a href="https://github.com/Projeto-Buildar"><img src={githubicon} alt="YouTube" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

