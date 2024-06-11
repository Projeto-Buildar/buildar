import './Login.css';
import { Outlet, Link } from "react-router-dom";
import forma3 from './images/Vector-3.png';
import forma from './images/Vector.png';
import logo from './images/logo_on.png';
import forma2 from './images/forma2.png'
import forma1 from './images/forma1.png';
// import formasLogin from './images/formas-login.png';
import { useTranslation } from 'react-i18next';
import "../../i18n"

export default function Login() {
    const { t, i18n } = useTranslation();

    return (
        <main id="login">
            <div className='formas'>
                <img src={forma1} alt="forma1" className='forma1' />
            </div>
            <header>
                <Link to="/">
                    <img src={logo} alt="Logo" className="logo" />
                </Link>
                <img src={forma2} alt="forma2" className='forma2' />
            </header>

            <article>
                <div className='caixa-esquerda'>
                    <h1>{t('welcomeBack')}</h1>
                </div>
                <div className='caixa-direita'>
                    <h1>Login</h1>
                    <form action="">
                        <h3>Email</h3>
                        <input type="email" name="email" id="email" placeholder={t('emailPhonePlaceholder')} required />
                        <h3>Password</h3>
                        <input type="password" name="password" id="password" placeholder={t('enterYourPassword')} required />
                        <Link to='/home'><input type="submit" id="submit" value={t('submit')} /></Link>
                    </form>

                    <p>{t('dontHaveAccount')} <Link to='/register'><button><strong>{t('SignUp')} </strong></button></Link></p>
                </div>
            </article>

            <Outlet />
        </main>
    );
}
