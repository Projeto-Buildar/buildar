
import forma from "../conexoes/images/forma branca.webp";
import "../conexoes/Conexoes.css";
import Forma2 from "./images/amarelo lilas azul.webp"
import imgFormulario from "../conexoes/images/imagem formulario.webp";
import EventSearch from "../conexoes/EventSearch"
import HeaderHome from "../home/HeaderHome";
import Footer from "../headersEfooters/footerPreLogin/Footer";
import { Outlet, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';



export default function Conexoes() {
    const { t } = useTranslation();

    return (

        <main id='Conexoes'>

            <div className="containerAmarelo">
                <img src={forma} />  
                <h2>{t("liveStream")}</h2>
            </div>
            <HeaderHome className='pesquisa'/>
            <h3 id="historico">{t("volunteerHistory")}</h3>

        <div className="Container-conexoes">
            <div className="video-container">
                <iframe
                    width="600"
                    height="300"
                    src="https://www.youtube.com/embed/PzUZsoyMXuY?si=2K-g3iGwXubhEwCc"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
            <div className="Video-Esquerdo">
                <iframe
                    width="300"
                    height="150"
                    src="https://www.youtube.com/embed/pU7bVeJ5M5c?si=32ASC7VW0jxM0rOS"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>

                <iframe
                    width="300"
                    height="150"
                    src="https://www.youtube.com/embed/i96z2ZKsCeI?si=-jb9WbvRICioN7sZ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>

            </div>
            <div className="botao">
                <button>{t("historic")}</button>
            </div>
            <img src={Forma2} alt="forma2" className="forma2" />

            <div className="Seja-voluntario">
                <img src={imgFormulario} alt="imgFormulario" className="imgFormulario" />
                <div className="textoVoluntario">
                    <h3>{t("becomeSpeaker")}</h3>
                    <p>{t("workExperiences")}</p>
                        <Link to="/inscricaoVoluntario">
                            <button>{t("becomeVolunteer")}</button>
                        </Link>
                </div>
            </div>
            <div className="Eventos-externos">
                <EventSearch />
            </div>
            <Footer/>
        </main>

    )
}

