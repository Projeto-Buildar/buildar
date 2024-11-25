import { Link } from 'react-router-dom';

import useControleDeTraducao from '../../../shared/useControleDeTraducao';

import logo from '../images/logo_off.webp';
import instagram from '../images/social_instagram.webp';
import tiktok from '../images/social_tiktok.webp';
import linkedin from '../images/social_linkedin.webp';
import github from '../images/social_github.webp';

import './Footer.css';

export default function FooterPreLogin() {
  const { t, chaveComPrefixo } = useControleDeTraducao("footer");
  const a = 1;

  return (
    <footer id='footerPreLogin'>
      <div className='upFooter'></div>
      <section className="footerTop">
        <nav className="linkList">
          <ul>
            <Link to="/sobre">{t(chaveComPrefixo("sobre"))}</Link>
            <Link to="/apoie">{t(chaveComPrefixo("apoio"))}</Link>
            <Link to="/faleConosco">{t(chaveComPrefixo("contato"))}</Link>
          </ul>
          <ul style={{ display: a === 1 ? 'none' : 'flex' }}>
            <Link to="/conexoes">{t("Connect")}</Link>
            <Link to="/perfil">Perfil</Link>
            <Link to="/loja">Loja</Link>
          </ul>
        </nav>
        <figure>
          <Link to={a === 1 ? "/" : "/home"}><img src={logo} className="logo" alt="Logo" /></Link>
          <p>{t(chaveComPrefixo("direitos"))}</p>
        </figure>
      </section>
      <div className="breakBar"></div>
      <section className="footerBottom">
        <nav className="linkList">
          <Link to="/termos" className="footer-linkList">{t(chaveComPrefixo("privacidade"))}</Link>
          {/* <Link to="/sobre_nos_1" className="footer-linkList">{t("Privacy")}</Link> */}
          <Link to="/termos" className="footer-linkList">{t(chaveComPrefixo("termos"))}</Link>
        </nav>
        <nav className="social">
          <a href="https://www.instagram.com/buildar_demoday/" target="_blank" rel="noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@projeto_buildar" target="_blank" rel="noreferrer">
            <img src={tiktok} alt="TikTok" />
          </a>
          <a href="https://www.linkedin.com/company/buildaroficial/" target="_blank" rel="noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/projeto-buildar" target="_blank" rel="noreferrer">
            <img src={github} alt="GitHub" />
          </a>
        </nav>
      </section>
    </footer>
  );
}
