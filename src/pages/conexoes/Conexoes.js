
import forma from "../conexoes/images/forma branca.png";
import "../conexoes/Conexoes.css";
import Forma2 from "../conexoes/images/amarelo lilas azul.png";
import imgFormulario from "../conexoes/images/imagem formulario.png";
import EventSearch from "../conexoes/Pesquisa"
import HeaderHome from "../home/HeaderHome";

export default function Conexoes() {
    return (

        <main id='Conexoes'>

            <div className="containerAmarelo">
                <img src={forma} />  <h2>TRANSMISSÕES E EVENTOS</h2>
            </div>
            <HeaderHome />
            <h3 id="historico">Histórico de transimissões com voluntários</h3>

            <div className="Container-conexoes">
                <div className="video-container">
                    <iframe
                        width="600"
                        height="300"
                        src="https://www.youtube.com/watch?v=PzUZsoyMXuY"
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
                        src="https://www.youtube.com/watch?v=PzUZsoyMXuY"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>

                    <iframe
                        width="300"
                        height="150"
                        src="https://www.youtube.com/watch?v=PzUZsoyMXuY"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>

            </div>
            <div className="botao">
                <button> VER HISTORICO COMPLETO </button>
            </div>
            <img src={Forma2} alt="forma2" className="forma2" />

            <div className="Seja-voluntario">
                <img src={imgFormulario} alt="imgFormulario" className="imgFormulario" />
                <div className="textoVoluntario">
                    <h3>Seja voluntário como palestrante da Buildar</h3>
                    <p>O que acha de compartilhar suas experiências no mercado de trabalho?
                        Acesse o formulário e venha buildar com a gente.</p>
                    <button>Venha fazer parte</button>
                </div>
            </div>
            <div className="Eventos-externos">
                <EventSearch />
            </div>
        </main>

    )
}

