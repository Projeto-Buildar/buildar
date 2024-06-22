import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './headertermos.css';

export default function HeaderTermos() {
    const location = useLocation();
    const textoBtn = [
        {
            texto: "Termos de uso",
            linkado: "/Termos"
        },
        {
            texto: "Políticas de privacidade",
            linkado: "/politicas-de-privacidade"
        },
        {
            texto: "Informações legais",
            linkado: "/informacoes-legais"
        }
    ];

    return (
        <header id='headerTermos'>
            <nav>
                {textoBtn.map((object, index) => (
                    <BtnsNav
                        key={index}
                        texto={object.texto}
                        link={object.linkado}
                        isActive={location.pathname === object.linkado}
                    />
                ))}
            </nav>
            <Outlet />
        </header>
    );
}

function BtnsNav({ texto, link, isActive }) {
    return (
        <div className="btnsNav">
            <Link to={link} className={`btnContainer ${isActive ? 'active' : ''}`}>
                {texto}
                <div className="after-element"></div>
            </Link>
        </div>
    );
}
