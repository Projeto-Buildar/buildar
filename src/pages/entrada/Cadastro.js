import './Cadastro.css';
import { Outlet, Link } from "react-router-dom";
import logo from './images/logo_on.png';
import GroupFormas from './images/Group-formas.png';
import formaCadastro1 from './images/forma-cadastro1.png';
import formaCadastro2 from './images/forma-cadastro2.png';

import { useTranslation } from 'react-i18next';
import "../../i18n"

export default function Cadastro() {
    const { t, i18n } = useTranslation();
    return (
        <main id="Cadastro">
            <div className='formas'>

                <img src={formaCadastro1} alt="formaCadastro1" className='formaCadastro1' />

            </div>
            <header>
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>

            </header>
            <img src={formaCadastro2} alt="formaCadastro2" className='formaCadastro2' />

            <article>
                <div className='caixa-esquerda-cadastro'>
                    <h1>{t("BuildFuture")}</h1>
                </div>
                <div className='caixa-direita-cadastro' id='CaixaCadastro'>
                    <h1>{t("Registration")}</h1>
                    <form action="">
                        <h3>{t("Name")}</h3>
                        <input type="text" name="nome" placeholder={t("Name")} required />
                        <h3>{t("EmailPhone")}</h3>
                        <input type="email" name="email" id="email" placeholder={t("EmailPhone")} required />
                        <h3>{t("Password")}</h3>
                        <input type="password" name="password" id="password" placeholder={t("InformeSenha")} required />
                        <h3>{t("ConfirmPassword")}</h3>
                        <input type="password" name="confirm_password" id="confirm_password" placeholder={t("ConfirmPassword")} required />
                        <div className="checkbox-group">
                            <input type="checkbox" name="aceitar_politicas" id="aceitar_politicas" required />
                            <label htmlFor="aceitar_politicas">
                                {t("PrivacyPolicy1")}<a href="/politicas-de-privacidade" target="_blank">{t("PrivacyPolicy2")}</a>
                            </label>
                        </div>

                        <Link to='/home'><input type="submit" id="submit" name="submit" value={t("Cadastre-se")} /></Link>
                    </form>

                   
                    <div className='conecte-se-container'>
                        <p>{t("HaveAccount")}</p>
                        <Link to="/login">
                            <button className='conecte-se'><strong>{t("Conecte-se")}</strong></button>
                        </Link>
                    </div>

                </div>
            </article>

            <Outlet />
        </main>
    );
}
