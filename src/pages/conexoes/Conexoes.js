import React from 'react';
import { Link } from 'react-router-dom';
import HeaderHome from '../home/HeaderHome';
import Footer from '../headersEfooters/footerPreLogin/Footer';
import EventSearch from '../conexoes/EventSearch';
import forma from '../conexoes/images/forma branca.webp';
import Forma2 from './images/amarelo lilas azul.webp';
import imgFormulario from '../conexoes/images/imagem formulario.webp';
import useControleDeTraducao from '../../shared/useControleDeTraducao';

import '../conexoes/Conexoes.css'; // Certifique-se de que este arquivo CSS está no caminho correto

export default function Conexoes() {
    const { t, tFormatado } = useControleDeTraducao();

    return (
        <main id='Conexoes'>
            <div className="containerAmarelo">
                <img src={forma} alt="forma" />
                <h2>{t("liveStream")}</h2>
            </div>
            <HeaderHome/>
            <h3 id="historico">{t("volunteerHistory")}</h3>

            <div className="Container-conexoes">
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/PzUZsoyMXuY?si=2K-g3iGwXubhEwCc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="Video-Esquerdo">
                    <iframe
                        width="300"
                        height="150"
                        src="https://www.youtube.com/embed/pU7bVeJ5M5c?si=32ASC7VW0jxM0rOS"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <iframe
                        src="https://www.youtube.com/embed/i96z2ZKsCeI?si=-jb9WbvRICioN7sZ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="botao">
                <button>{t("historic")}</button>
            </div>

            <img src={Forma2} alt="forma2" className="forma2" />

            <div className="Seja-voluntario">
                <img src={imgFormulario} alt="imgFormulario" className="imgFormulario" />
                <div className="textoVoluntario">
                    <h3>{tFormatado("becomeSpeaker")}</h3>
                    <p>{t("workExperiences")}</p>
                    <Link to="/inscricaoVoluntario">
                        <button>{t("becomeVolunteer")}</button>
                    </Link>
                </div>
            </div>

            <div className="Eventos-externos">
                <EventSearch />
            </div>

            <Footer />
        </main>
    );
}
