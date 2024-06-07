import React from "react";
import "./FaleConosco.css";
import logo from "./images/Logomarca Oficial.png";
import circuloesquerdo from "./images/circuloesquerdo.png";
import circulodireito from "./images/circulodireito.png"; 

export default function FaleConosco() {
    return (
        
        <div className="App">
            <img src={logo} alt="Logo" className="logo_img" />
            <img src={circuloesquerdo} alt="Círculo Esquerdo" className="circulo-esquerdo" />
        
                
                <h1>Fale Conosco</h1>
                <h2>Qual seria sua dúvida?</h2>
                <form className="contact-form">
                    <div className="form-group">
                        <input type="text" name="nome" placeholder="Nome completo" required />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="tel" name="telefone" placeholder="Telefone" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="assunto" placeholder="Assunto" required />
                    </div>
                    <div className="form-group">
                        <textarea name="mensagem" rows="5" placeholder="Mensagem" required></textarea>
                    </div>
                    <button type="submit">Entrar</button>
                </form>
        
            <img src={circulodireito} alt="Círculo Direito" className="circulo-direito" />
        </div>
    );
}
