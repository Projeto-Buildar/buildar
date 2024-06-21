import './Cadastro.css';
import { useState } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from './images/logo_on.webp';
import GroupFormas from './images/Group-formas.webp';
import formaCadastro1 from './images/forma-cadastro1.webp';
import formaCadastro2 from './images/forma-cadastro2.webp';
import Header from '../landingPage/components/Header/Header';
import { useTranslation } from 'react-i18next';
import "../../i18n";

export default function Cadastro() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        password: '',
        confirm_password: '',
        aceitar_politicas: false,
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nome, email, password, confirm_password, aceitar_politicas } = formData;

        if (!nome || !email || !password || !confirm_password || !aceitar_politicas) {
            setErrorMessage('Please fill in all fields.');
        } else if (password !== confirm_password) {
            setErrorMessage('Passwords do not match.');
        } else {
            setErrorMessage('');
            navigate('/home');
        }
    };

    return (
        <main id="Cadastro">
            <img src={formaCadastro1} alt="formaCadastro1" className='formaCadastro1' />
            <Header mostrarSelectIdiomas={false} classe='cadastroHeader'/>
            <img src={formaCadastro2} alt="formaCadastro2" className='formaCadastro2' />

            <article>
                <div className='caixa-esquerda-cadastro'>
                    <h1>{t("BuildFuture")}</h1>
                </div>
                <div className='caixa-direita-cadastro' id='CaixaCadastro'>
                    <h1>{t("Registration")}</h1>
                    <form onSubmit={handleSubmit}>
                        <h3>{t("Name")}</h3>
                        <input
                            type="text"
                            name="nome"
                            placeholder={t("Name")}
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                        <h3>{t("EmailPhone")}</h3>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder={t("EmailPhone")}
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
                            <label htmlFor="aceitar_politicas">
                                {t("PrivacyPolicy1")}<a href="/politicas-de-privacidade" target="_blank">{t("PrivacyPolicy2")}</a>
                            </label>
                        </div>
                        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                        <input type="submit" id="submit" name="submit" value={t("Cadastre-se")} />
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
