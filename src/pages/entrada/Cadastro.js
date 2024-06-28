import './Cadastro.css';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import formaCadastro1 from './images/forma-cadastro1.webp';
import formaCadastro2 from './images/forma-cadastro2.webp';
import Header from '../headersEfooters/Header/Header';
import { useTranslation } from 'react-i18next';
import "../../i18n";

export default function Cadastro() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nickname: '',
        email: '',
        password: '',
        confirm_password: '',
        aceitar_politicas: false,
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if ((name === 'nickname' || name === 'email') && value.includes(' ')) {
            setErrorMessage('O nickname e o e-mail não podem conter espaços.');
            // if ((name === 'nickname' || name === 'email') && value.includes(' ')) {
            //     setErrorMessage(`${t("NickName")}`
            //         );
            // } 
            
            // ISSO É USADO PARA COLOCAR UMA VARIAVEL DENTRO DE UMA STRING
        } 
        else {
            setFormData(prevState => ({
                ...prevState,
                [name]: type === 'checkbox' ? checked : value
            }));
            setErrorMessage('');
        
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nickname, email, password, confirm_password, aceitar_politicas } = formData;
    
        if (!nickname || !email || !password || !confirm_password || !aceitar_politicas) {
            setErrorMessage('Por favor, preencha todos os campos.');
        } else if (nickname.includes(' ') || email.includes(' ')) {
            setErrorMessage('O nickname e o e-mail não podem conter espaços.');
        } else if (password !== confirm_password) {
            setErrorMessage('As senhas não correspondem.');
        } else {
            setErrorMessage('');
            navigate('/home');
        }
    };

    return (
        <main id="Cadastro">
            <img src={formaCadastro1} alt="formaCadastro1" className='formaCadastro1' />
            <Header classe='cadastroHeader'/>
            <img src={formaCadastro2} alt="formaCadastro2" className='formaCadastro2' />

            <article>
                <div className='caixa-esquerda-cadastro'>
                    <h1>{t("BuildFuture")}</h1>
                </div>
                <div className='caixa-direita-cadastro' id='CaixaCadastro'>
                    <h1>{t("Registration")}</h1>
                    <form onSubmit={handleSubmit}>
                        <h3>{t("NickName")}</h3>
                        <input
                            type="text"
                            name="nickname"
                            placeholder={t("NickName")}
                            value={formData.nickname}
                            onChange={handleChange}
                            required
                        />
                        <h3>{t("Email")}</h3>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder={t("email")}
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <h3>{t("Password")}</h3>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder={t("InformeSenha")}
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <h3>{t("ConfirmPassword")}</h3>
                        <input
                            type="password"
                            name="confirm_password"
                            id="confirm_password"
                            placeholder={t("ConfirmPassword")}
                            value={formData.confirm_password}
                            onChange={handleChange}
                            required
                        />
                        <div className="checkbox-group">
                            <input
                                type="checkbox"
                                name="aceitar_politicas"
                                id="aceitar_politicas"
                                checked={formData.aceitar_politicas}
                                onChange={handleChange}
                                required
                            />
                            <label htmlFor="aceitar_politicas" className='termosPrivacidade'>
                                {t("PrivacyPolicy1")} <strong className='letraNegrito'> <Link to="/Termos">{t("PrivacyPolicy2")}</Link> </strong> {t("PrivacyPolicy3")} <strong className='letraNegrito'> <Link to="/Termos">{t("PrivacyPolicy4")}</Link> </strong>
                            </label>

                        </div>
                        {errorMessage && <p style={{color: 'red', margin: '10px'}}>{errorMessage}</p>}
                        <input type="submit" id="submit" name="submit" value={t("Cadastre-se")} />
                    </form>

                    <div className='conecte-se-container'>
                        <p>{t("HaveAccount")}</p>
                        <Link to="/login">
                            <button className='conecte-se'><strong className='letraNegrito'>{t("Conecte-se")}</strong></button>
                        </Link>
                    </div>
                </div>
            </article>

            <Outlet />
        </main>
    );
}
