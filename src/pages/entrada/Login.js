import './Login.css';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'; // Importando Link e Outlet
import forma3 from './images/Vector-3.webp';
import forma from './images/Vector.webp';
import logo from './images/logo_on.webp';
import forma2 from './images/forma2.webp';
import forma1 from './images/forma1.webp';
import Header from '../headersEfooters/Header//Header';
import { useTranslation } from 'react-i18next';
import "../../i18n";
import { setNomeUsuario } from '../../shared/useNomeUsuario';

export default function Login() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '' || password === '') {
            setErrorMessage('Please fill in all fields.');
        } else {
            setErrorMessage('');
            setNomeUsuario({apelido: false, valor: email})
            navigate('/home');
        }
    };

    return (
        <main id="login">
            <img src={forma1} alt="forma1" className='forma1' />
            <Header classe='loginHeader'/>
            <article>
                <div className='caixa-esquerda'>
                    <h1>{t('welcomeBack')}</h1>
                </div>
                <div className='caixa-direita' id='CaixaLogin'>
                    <h1>{t('login')}</h1>
                    <form onSubmit={handleSubmit}>
                        <h3>{t("Email")}</h3>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder={t("email")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <h3>{t("Password")}</h3>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder={t('enterYourPassword')}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                        <input type="submit" id="submit" value={t('submit')} />
                    </form>
                    <Link to="/cadastro">
                        <p>{t('dontHaveAccount')}<strong>{t('SignUp')}</strong></p>
                    </Link>
                </div>
            </article>

            <Outlet />
        </main>
    );
}
