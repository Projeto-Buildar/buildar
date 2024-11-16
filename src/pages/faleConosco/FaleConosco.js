import React from "react";
import "./FaleConosco.css";
// import logo from "./images/logo_on.webp";
import circuloesquerdo from "./images/circuloesquerdo.webp";
import circulodireito from "./images/circulodireito.webp"; 
// import { Link } from 'react-router-dom';
import Header from '../headersEfooters/Header//Header';
import { useTranslation } from 'react-i18next';


export default function FaleConosco() {
    const { t } = useTranslation();
    return (
        <div id="ConteudoFaleConosco">
            <Header classe='faleConoscoHeader'/>
            <img src={circuloesquerdo} alt="Círculo Esquerdo" className="circulo-esquerdo" />
            <div className="formulario">
                <div className="ConteudoFaleConsocoTexto">
                    <h1>{t("contactUs")}</h1>
                    <h2>{t("whatIsYourDoubt")}</h2>
                </div>
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" name="nome" placeholder={t("fullName")} required />
                    </div>
                    <div className="form-group info">
                        <input type="email" placeholder={t("email")} required />
                        <input type="tel" name="telefone" placeholder={t("phone")} required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="assunto" placeholder={t("subject")} required />
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder={t("message")} required></textarea>
                    </div>
                    <button type="submit">{t("enter")}</button>
                </form>
            </div>
            <img src={circulodireito} alt="Círculo Direito" className="circulo-direito" />
        </div>
    );
}
