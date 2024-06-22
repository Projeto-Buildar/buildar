import './Login.css';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'; // Importando Link e Outlet
import forma3 from './images/Vector-3.webp';
import forma from './images/Vector.webp';
import forma2 from './images/forma2.webp';
import forma1 from './images/forma1.webp';
import Header from '../landingPage/components/Header/Header';
import { useTranslation } from 'react-i18next';
import "../../i18n";

//NÃO APAGUE ISSO !!!
// TO DE OLHO >:C

export default function Login() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [nickname, setNickname] = useState(''); // Alterado de email para nickname
    const [password, setPassword] = useState('');
    const [formData, setFormData] = useState({
        nickname: '',
        password: '',
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
                e.preventDefault();
        
                if (nickname  === '' || password === '') {
                    setErrorMessage('Please fill in all fields.');
                } 
                else if (nickname.includes(' ')) {
                    setErrorMessage('Nickname cannot contain spaces.');
                }
                else {
                    setErrorMessage('');
                    navigate('/home');
                }
            
    };

    return (
        <main id="login">
            <img src={forma1} alt="forma1" className='forma1' />
            <Header mostrarSelectIdiomas={false} classe='loginHeader'/>
            <article>
                <div className='caixa-esquerda-login'>
                    <h1>{t('welcomeBack')}</h1>
                </div>
                <div className='caixa-direita-login' id='CaixaLogin'>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit} className='formLogin'>
                        <h3>{t("NickName")}</h3>
                        <input
                            type="text"
                            name="nickname"
                            placeholder={t("NickName")}
                            value={formData.nickname}
                            onChange={handleSubmit}
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
                    <div className='cadastre-se-container'>
                        <p>{t('dontHaveAccount')}</p>
                        <Link to="/cadastro">
                          {/* <strong>{t('SignUp')}</strong> */}
                          <button className='conecte-se'><strong className='letraNegrito'>{t('SignUp')}</strong></button>
                        </Link>
                    </div>
                </div>
            </article>

            <Outlet />
        </main>
    );
}
