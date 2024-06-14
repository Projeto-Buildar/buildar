import React from "react";
import "./FaleConosco.css";
import logo from "./images/logo_on.webp";
import circuloesquerdo from "./images/circuloesquerdo.png";
import circulodireito from "./images/circulodireito.png"; 
import { Link } from 'react-router-dom';
import Header from '../landingPage/components/Header/Header';



export default function FaleConosco() {
    return (
        
        <div id="ConteudoFaleConosco">
            {/* COLOCAR A CLASSE AQUI E ESTILIZAR NADA */}
                <Header mostrarSelectIdiomas={false}/>
                <img src={circuloesquerdo} alt="Círculo Esquerdo" className="circulo-esquerdo" />
                <div className="formulario">
        
                    <div className="ConteudoFaleConsocoTexto">
                        <h1>Fale Conosco</h1>
                        <h2>Qual seria sua dúvida?</h2>
                    </div>

                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" name="nome" placeholder="Nome completo" required />
                    </div>
                    <div className="form-group info">
                        <input type="email" placeholder="Email" required />
                        <input type="tel" name="telefone" placeholder="Telefone" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="assunto" placeholder="Assunto" required />
                    </div>
                    <div className="form-group">
                        <textarea name="message" placeholder="Mensagem" required></textarea>
                    </div>
                    {/* <Link to="/"> */}
                    <button type="submit">Entrar</button>
                    {/* </Link> */}
                </form>
                </div>
        
            <img src={circulodireito} alt="Círculo Direito" className="circulo-direito" />
        </div>
    );
}
