import React, { useState } from 'react';
import './cadastroVoluntario.css';

const LoginVoluntario = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nome, setNome] = useState('');
    const [assunto, setAssunto] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [data, setData] = useState('');

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };

    const handleNomeChange = (e) => {
        setNome(e.target.value);
    };

    const handleAssuntoChange = (e) => {
        setAssunto(e.target.value);
    };

    const handleLinkedinChange = (e) => {
        setLinkedin(e.target.value);
    };

    const handleDataChange = (e) => {
        setData(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Nome:', nome);
        console.log('Assunto:', assunto);
        console.log('LinkedIn:', linkedin);
        console.log('Data:', data);
    };

    return (
        <main id="voluntarioCadastro">
            <div className="login-wrapper">
                <section className="form-wrapper">
                    <div className="form-container">
                        {/* Login */}
                        <div className="form-messages">
                            <h2>Cadastro Voluntário</h2>
                        </div>
                        {/* Formulário */}
                        <form onSubmit={handleSubmit} className="formVoluntario">
                            <input
                                type="text"
                                name="user-nome"
                                id="user-nome"
                                placeholder="Nome"
                                value={nome}
                                onChange={handleNomeChange}
                                required
                            />
                            <input
                                type="text"
                                name="user-assunto"
                                id="user-assunto"
                                placeholder="Assunto"
                                value={assunto}
                                onChange={handleAssuntoChange}
                                required
                            />
                            <input
                                type="text"
                                name="user-linkedin"
                                id="user-linkedin"
                                placeholder="LinkedIn"
                                value={linkedin}
                                onChange={handleLinkedinChange}
                                required
                            />
                            <input
                                type="datetime-local"
                                name="user-data"
                                id="user-data"
                                placeholder="Data e hora"
                                value={data}
                                onChange={handleDataChange}
                                required
                            />
                            <a href="#!" className="forgot-pass" onClick={(e) => e.preventDefault()} aria-disabled="true">Esqueci minha senha</a>
                            <p className="politicaVoluntarios">Ao se cadastrar, você concorda com nossos Termos, Política de Privacidade e Política de Cookies.</p>
                            <button type="submit" className="login-button">Entrar</button>
                        </form>
                    </div>
                </section>
                <section className="image-wrapper">
                    {/* contém a imagem do lado direito, não apagar! */}
                </section>
            </div>
        </main>
    );
};

export default LoginVoluntario;
