import './Login.css';
import { Outlet, Link } from "react-router-dom";
import forma3 from './images/Vector-3.webp';
import forma from './images/Vector.webp';
import logo from './images/logo_on.webp';
import forma2 from './images/forma2.webp'
import forma1 from './images/forma1.webp';
import Header from '../landingPage/components/Header/Header';

// import formasLogin from './images/formas-login.png';
import { useTranslation } from 'react-i18next';
import "../../i18n"

export default function Login() {
    const { t, i18n } = useTranslation();

    return (
        <main id="login">
                <img src={forma1} alt="forma1" className='forma1' />
                <Header mostrarSelectIdiomas={false} classe='loginHeader'/>
            <article>
                <div className='caixa-esquerda'>
                    <h1>{t('welcomeBack')}</h1>
                </div>
                <div className='caixa-direita' id='CaixaLogin'>
                    <h1>Login</h1>
                    <form action="">
                        <h3>Email</h3>
                        <input type="email" name="email" id="email" placeholder={t('emailPhonePlaceholder')} required />
                        <h3>Password</h3>
                        <input type="password" name="password" id="password" placeholder={t('enterYourPassword')} required />
                        <Link to='/home'><input type="submit" id="submit" value={t('submit')} /></Link>
                    </form>

                    <p>{t('dontHaveAccount')} <Link to='/cadastro'><button><strong>{t('SignUp')} </strong></button></Link></p>
                </div>
            </article>

            <Outlet />
        </main>
    );
}
