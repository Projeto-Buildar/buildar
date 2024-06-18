import React from 'react';
import HeaderHome from '../home/HeaderHome';
import './Voluntario.css';
import { Link } from 'react-router-dom';
import useTypewriter from './useTypewriter';
import LoginVoluntario from './cadastroVoluntario';
import Footer from '../landingPage/components/Footer/Footer';
import bottom_back from './images/bottom_back.png';

const Voluntario = () => {
    useTypewriter('animated-title', "Seja um(a) Voluntário(a)", 100, 2000, 1000);

    return (
        <main id="voluntario">
            <HeaderHome />
            <div className='ContainerVoluntarioMain'>
                <div id="titulo">
                    <h1 id="animated-title"></h1>
                    <hr className="decorative-line" />
                    <p>
                        Quer impactar a vida dos jovens com suas habilidades? Seja voluntário e ajude a construir o futuro! Compartilhe seus conhecimentos, inspire com suas experiências e contribua para um amanhã melhor. Junte-se a nós nesta jornada transformadora!
                    </p>
                </div>
                <div id="containerVoluntario">
                    <LoginVoluntario />
                </div>
            </div>
            <img src= {bottom_back} alt='bottom_back' className='bottom_back'/>
        </main>
    );
}

const FormGroup = ({ label, component = 'input', ...props }) => (
    <div className="form-group">
        <label htmlFor={props.id}>{label}</label>
        {React.createElement(component, props)}
    </div>
);

export default Voluntario;
