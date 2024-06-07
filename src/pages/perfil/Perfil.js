import Logo from "./images/Logomarca_Oficial.png"
import "./Perfil.css"
import FotoPerfil from "./images/Foto Perfil.png"
import fogo from "./images/Fogo.png"
import raio from "./images/Raio.png"
import trofeu from "./images/Trofeu.png"
import Medalha from "./images/Medalha.png"
import quadrado from "./images/Quadrado.png"
import grafico1 from "./images/grafico 3.png"


export default function Perfil (){
    return (
        <main>
            <div className="Container_geral">
            
                <section className="lado_esquerdo">
                    <div className="ContainerLadoEsquedo">
                    <span className="ImgLogo"><a href="#"><img src={Logo} alt="Logo" className="logo" /></a></span>
                        <div className="Botoes">
                        <a href="#"><div className="Botao">
                            <h3>Praticar</h3>
                            </div></a>
                            <a href="#"><div className="Botao">
                            <h3>Ligas</h3>
                            </div></a>
                            <a href="#"><div className="Botao">
                            <h3>Lojas</h3>
                            </div></a>
                            <a href="#"><div className="Botao">
                            <h3>Perfil</h3>
                            </div></a>
                            <a href="#"><div className="Botao">
                            <h3>Ajuda</h3>
                            </div></a>
                        </div>
                    </div>
                </section>
                <aside className="centro">
                    <div className="container_centro">
                        <span className="ImgPerfil"><a href="#"><img src={FotoPerfil} alt="Foto de perfil" className="Perfil" /></a></span>
                        <div className="Descricao">
                            <h3 className="nome">Nome</h3>
                            <h4 className="Tempo">Tempo de conta</h4>
                        </div>
                        <div className="status">
                            <div className="status_esquerda_fogo">
                            <div className="Botao_status_fogo">
                            <span className="ImgFogo"><a href="#"><img src={fogo} alt="Fogo" className="fogo" /></a></span>
                            <p className="Engajamento">Engajamento</p>
                            </div>
                            <div className="Botao_status_raio">
                            <span className="ImgRaio"><a href="#"><img src={raio} alt="Raio" className="raio" /></a></span>
                            <span className="Xp">Total de xp: 40435</span>
                            </div>
                            </div>
                            <div className="Status_direita_trofeu">
                            <div className="Botao_status_trofeu">
                            <span className="ImgTrofeu"><a href="#"><img src={trofeu} alt="trofeu" className="trofeu" /></a></span>
                            <span className="DescTrofeu">Ouro</span>
                            </div>
                            <div className="Botao_status_medalha">
                            <span className="ImgMedalha"><a href="#"><img src={Medalha} alt="medalha" className="raio" /></a></span>
                            <span className="podio">0 </span>
                            <span className="Total_xp"> de podios</span>
                            </div>
                            </div>

    
                        
                        </div>

                        <div className="Container_conquistas">
                            <div className="div_texto_conquista">
                            <h3 className="texto_conquistas">Conquistas</h3>
                            </div>

                            <div className="Caixa_conquistas_primaria">
                                
                                <img src={quadrado} className="quadrado"></img>
                                <div className="Caixa_primaria_dentro">
                                <span className="texto_conquista">Sofisticado</span>
                                <img src={grafico1} className="grafico1"></img>
                                </div>
                            </div>

                            <div className="Caixa_conquistas_segundaria">

                            <img src={quadrado} className="quadrado"></img>
                                <div className="Caixa_segundaria_dentro">
                                <span className="texto_conquista">Empatia e Resiliência.</span>
                                <img src={grafico1} className="grafico1"></img>
                                </div>
                            </div>

                            <div className="Caixa_conquistas_teceiraria">

                            <img src={quadrado} className="quadrado"></img>
                                <div className="Caixa_teceiraria_dentro">
                                <span className="texto_conquista">Gênio estratégico </span>
                                <img src={grafico1} className="grafico1"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )
}