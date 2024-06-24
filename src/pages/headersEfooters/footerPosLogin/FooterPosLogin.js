import './FooterPosLogin.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "../../../../i18n";

import logo from '../../images/logo_off.webp';
import instagram from '../../images/social_instagram.webp';
import tiktok from '../../images/social_tiktok.webp';
import linkedin from '../../images/social_linkedin.webp';
import github from '../../images/social_github.webp';

export default function FooterPosLogin() {
    const {t, i18n } = useTranslation();

    return (
        <footer id='footerPosLogin'>
            <nav>
                <div className='linkList'>
                    <ul>
                        <Link to="/sobre">{t("About")}</Link>
                        <Link to="/faleConosco">{t("Contact")}</Link>
                        <Link to='/'><li>Apoie a Buildar</li></Link>
                    </ul>
                    <ul>
                        <Link to="/conexoes">{t("Connect")}</Link>
                        <Link to='/'><li>Perfil</li></Link>
                        <Link to='/'><li>Loja</li></Link>
                    </ul>
                </div>
                <div>
                    <Link to="/"><img src={logo} className="logo" alt="logomarca da plataforma" /></Link>
                    <p className="footer-rigth">{t("Rights")}</p>
                </div>
            </nav>
            <div></div>
            <nav>
                <div className="linkList">
                    <Link to="/termos"  className="footer-linkList">{t("Privacy")}</Link>
                    <Link to="/termos" className="footer-linkList">{t("Terms")}</Link>
                </div>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/buildar_demoday/" target="_blank"><img src={instagram} alt="Instagram"/></a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@projeto_buildar" target="_blank"><img src={tiktok} alt="TikTok"/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/buildaroficial/" target="_blank"><img src={linkedin} alt="LinkedIn"/></a>
                    </li>
                    <li>
                        <a href="https://github.com/projeto-buildar" target="_blank"><img src={github} alt="GitHub"/></a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}