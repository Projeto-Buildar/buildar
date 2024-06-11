import Logo from "./images/Logomarca_Oficial.png"
import "./Perfil.css"
import FotoPerfil from "./images/Foto Perfil.png"
import fogo from "./images/Fogo.png"
import raio from "./images/Raio.png"
import trofeu from "./images/Trofeu.png"
import Medalha from "./images/Medalha.png"
import quadrado from "./images/Quadrado.png"
import grafico1 from "./images/grafico 3.png"
import Header from "../home/HeaderHome"
import HeaderHome from "../home/HeaderHome"

import { useTranslation } from 'react-i18next';
import "../../i18n"

export default function Perfil (){
    const {t, i18n } = useTranslation();

    return (
        <main id = 'Perfil'>
            <HeaderHome/>
            <div className="Container_geral">
            
                <aside className="centro">
                    <div className="container_centro">
                        <span className="ImgPerfil"><a href="#"><img src={FotoPerfil} alt="Foto de perfil" className="Perfil" /></a></span>
                        <div className="Descricao">
                            <h3 className="nome">Nome</h3>
                            <h4 className="Tempo">{t('accountTime')}</h4>
                        </div>
                        <div className="status">
                            <div className="status_esquerda_fogo">
                            <div className="Botao_status_fogo">
                            <span className="ImgFogo"><a href="#"><img src={fogo} alt="Fogo" className="fogo" /></a></span>
                            <p className="Engajamento">{t('engagement')}</p>
                            </div>
                            <div className="Botao_status_raio">
                            <span className="ImgRaio"><a href="#"><img src={raio} alt="Raio" className="raio" /></a></span>
                            <span className="Xp">{t('totalXp')} 40435</span>
                            </div>
                            </div>
                            <div className="Status_direita_trofeu">
                            <div className="Botao_status_trofeu">
                            <span className="ImgTrofeu"><a href="#"><img src={trofeu} alt="trofeu" className="trofeu" /></a></span>
                            <span className="DescTrofeu">{t('gold')}</span> 
                            </div>
                            <div className="Botao_status_medalha">
                            <span className="ImgMedalha"><a href="#"><img src={Medalha} alt="medalha" className="raio" /></a></span>
                            <span className="podio">0 </span>
                            <span className="Total_xp"> {t('ofPodiums')}</span>
                            </div>
                            </div>

    
                        
                        </div>

                        <div className="Container_conquistas">
                            <div className="div_texto_conquista">
                            <h3 className="texto_conquistas">{t('achievements')}</h3>
                            </div>

                            <div className="Caixa_conquistas_primaria">
                                
                                <img src={quadrado} className="quadrado"></img>
                                <div className="Caixa_primaria_dentro">
                                <span className="texto_conquista">{t('sophisticated')}</span>
                                <img src={grafico1} className="grafico1"></img>
                                </div>
                            </div>

                            <div className="Caixa_conquistas_segundaria">

                            <img src={quadrado} className="quadrado"></img>
                                <div className="Caixa_segundaria_dentro">
                                <span className="texto_conquista">{t('empathyAndResilience')}</span>
                                <img src={grafico1} className="grafico1"></img>
                                </div>
                            </div>

                            <div className="Caixa_conquistas_teceiraria">

                            <img src={quadrado} className="quadrado"></img>
                                <div className="Caixa_teceiraria_dentro">
                                <span className="texto_conquista">{t('strategicGenius')} </span>
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
