import "./Perfil.css";
import HeaderHome from "../home/HeaderHome";
import profilePic from './images/image_filler_square.png';
import trophy from './images/trophy.png';
import pen from './images/pen.png';
import settingsGear from './images/settings.png';
import Conquistas from './components/Conquistas';
import Skins from './components/Skins';

import { useTranslation } from 'react-i18next';
import "../../i18n"

export default function Perfil() {
    const {t, i18n } = useTranslation();

    return (
        <main id="perfil">
            <HeaderHome/>
            <div className="titleHead"></div>
            <section id="userCard">
                <div className="profileImage">
                    <div className="star"></div>
                    <img src={profilePic} className="profilePic"/>
                    <div className="jobPlan">Gerente</div>
                </div>
                <div className="topCard">
                    <div className="userInfo">
                        <div>
                            <h3>Nome de Usuário</h3>
                            <p>@nomedeusuario_</p>
                        </div>
                        <div>
                            <h3>204</h3>
                            <p>Seguindo</p>
                        </div>
                        <div>
                            <h3>153</h3>
                            <p>Seguidores</p>
                        </div>
                    </div>
                    <div className="achievementBar">
                        <div>
                            <img src={trophy}/>
                            <h3>Conquistas</h3>
                        </div>
                        <Conquistas/>
                        <p>Ver todas</p>
                    </div>
                    <div className="userButtons">
                        <p>Compartilhar perfil</p>
                        <p>Convidar amigos</p>
                        <div>
                            Editar perfil
                            <img src={pen}/>
                        </div>
                        <div>
                            <img src={settingsGear}/>
                        </div>
                    </div>
                </div>
            </section>
            <div className="topBox"></div>
            <section id="showcase">
                <div className="userStats">
                    <h3>Estatísticas</h3>
                    <div>
                        <ul>
                            <li>Skins:</li>
                            <li>Portas concluídas:</li>
                            <li>Dias de conta:</li>
                            <li>Conquistas:</li>
                        </ul>
                        <ul>
                            <li>4</li>
                            <li>5</li>
                            <li>10</li>
                            <li>3</li>
                        </ul>
                    </div>
                </div>
                <Skins/>
            </section>
        </main>

// import FotoPerfil from "./images/Foto Perfil.png"
// import fogo from "./images/Fogo.png"
// import raio from "./images/Raio.png"
// import trofeu from "./images/Trofeu.png"
// import Medalha from "./images/Medalha.png"
// import quadrado from "./images/Quadrado.png"
// import grafico1 from "./images/grafico 3.png"

        // <main id = 'Perfil'>
        //     <HeaderHome/>
        //     <div className="Container_geral">
            
        //         <aside className="centro">
        //             <div className="container_centro">
        //                 <span className="ImgPerfil"><a href="#"><img src={FotoPerfil} alt="Foto de perfil" className="Perfil" /></a></span>
        //                 <div className="Descricao">
        //                     <h3 className="nome">Nome</h3>
        //                     <h4 className="Tempo">{t('accountTime')}</h4>
        //                 </div>
        //                 <div className="status">
        //                     <div className="status_esquerda_fogo">
        //                     <div className="Botao_status_fogo">
        //                     <span className="ImgFogo"><a href="#"><img src={fogo} alt="Fogo" className="fogo" /></a></span>
        //                     <p className="Engajamento">{t('engagement')}</p>
        //                     </div>
        //                     <div className="Botao_status_raio">
        //                     <span className="ImgRaio"><a href="#"><img src={raio} alt="Raio" className="raio" /></a></span>
        //                     <span className="Xp">{t('totalXp')} 40435</span>
        //                     </div>
        //                     </div>
        //                     <div className="Status_direita_trofeu">
        //                     <div className="Botao_status_trofeu">
        //                     <span className="ImgTrofeu"><a href="#"><img src={trofeu} alt="trofeu" className="trofeu" /></a></span>
        //                     <span className="DescTrofeu">{t('gold')}</span> 
        //                     </div>
        //                     <div className="Botao_status_medalha">
        //                     <span className="ImgMedalha"><a href="#"><img src={Medalha} alt="medalha" className="raio" /></a></span>
        //                     <span className="podio">0 </span>
        //                     <span className="Total_xp"> {t('ofPodiums')}</span>
        //                     </div>
        //                     </div>

    
                        
        //                 </div>

        //                 <div className="Container_conquistas">
        //                     <div className="div_texto_conquista">
        //                     <h3 className="texto_conquistas">{t('achievements')}</h3>
        //                     </div>

        //                     <div className="Caixa_conquistas_primaria">
                                
        //                         <img src={quadrado} className="quadrado"></img>
        //                         <div className="Caixa_primaria_dentro">
        //                         <span className="texto_conquista">{t('sophisticated')}</span>
        //                         <img src={grafico1} className="grafico1"></img>
        //                         </div>
        //                     </div>

        //                     <div className="Caixa_conquistas_segundaria">

        //                     <img src={quadrado} className="quadrado"></img>
        //                         <div className="Caixa_segundaria_dentro">
        //                         <span className="texto_conquista">{t('empathyAndResilience')}</span>
        //                         <img src={grafico1} className="grafico1"></img>
        //                         </div>
        //                     </div>

        //                     <div className="Caixa_conquistas_teceiraria">

        //                     <img src={quadrado} className="quadrado"></img>
        //                         <div className="Caixa_teceiraria_dentro">
        //                         <span className="texto_conquista">{t('strategicGenius')} </span>
        //                         <img src={grafico1} className="grafico1"></img>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </aside>
        //     </div>
        // </main>
    )
}
