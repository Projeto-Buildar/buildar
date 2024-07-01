import "./Perfil.css";
import HeaderHome from "../home/HeaderHome";
import Conquistas from './components/Conquistas';
import Skins from './components/Skins';
import ConquistasDetails from "./components/ConquistasDetails";
import Footer from "../headersEfooters/footerPreLogin/Footer";

import profilePic from './images/profile_pic.png';
import trophy from './images/trophy.png';
import pen from './images/pen.png';
import settingsGear from './images/settings.png';
import closeButton from './images/closeButton.png';



import { useState } from "react";
import { useTranslation } from 'react-i18next';
import "../../i18n";
import Modal from "react-modal";
Modal.setAppElement('#root');

export default function Perfil() {
    const { t, i18n } = useTranslation();
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <HeaderHome />
            <main id="perfil">
                <section className="titleHead"></section>
                <section id="userCard">
                    <div className="profileImage">
                        <div className="star"></div>
                        <img src={profilePic} className="profilePic" />
                        <h3 className="jobPlan">{t("Manager")}</h3>
                    </div>
                    <div className="topCard">
                        <div className="userProfileInfo">
                            <div>
                                <h4>{t("NickNamePerfil")}</h4>
                                <p>{t("@NickNamePerfil")}</p>
                            </div>
                            <div>
                                <h4>204</h4>
                                <p>{t("Following")}</p>
                            </div>
                            <div>
                                <h4>153</h4>
                                <p>{t("Followers")}</p>
                            </div>
                        </div>
                        <div className="achievementBar">
                            <div>
                                <img src={trophy} />
                                <h3>{t("achievements")}</h3>
                            </div>
                            <Conquistas />
                            <p onClick={openModal}>{t("viewAll")}</p>
                        </div>
                        <div className="userButtons">
                            <p>{t("shareProfile")}</p>
                            <p>{t("inviteFriends")}</p>
                            <div>
                                {t("editProfile")}
                                <img src={pen} />
                            </div>
                            <div>
                                <img src={settingsGear} />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="showcaseTop">
                    <h2>{t("showCase")}</h2>
                    <div className="leftBackground"></div>
                    <div className="rightBackground"></div>
                </div>
                <section id="showcase">
                    <article className="userStats">
                        <h2>{t("statistics")}</h2>
                        <div>
                            <ul>
                                <li>{t("skins")}</li>
                                <li>{t("doorsCompleted")}</li>
                                <li>{t("accountDays")}</li>
                                <li>{t("achievementsCompleted")}</li>
                            </ul>
                            <ul>
                                <li>3</li>
                                <li>5</li>
                                <li>10</li>
                                <li>5</li>
                            </ul>
                        </div>
                    </article>
                    <Skins />
                </section>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    preventScroll={true}
                    contentLabel='Detalhamento das conquistas em forma de modal'
                    overlayClassName='achievModal-overlay'
                    className='achievModal'
                >
                    <div className="leftModalSide"></div>
                    <section>
                        <div className="topModal">
                            <div>
                                <img src={trophy} />
                                <h1>{t("achievements")}</h1>
                            </div>
                            <img src={closeButton} className="closeButton" onClick={closeModal} />
                        </div>
                        <ConquistasDetails />
                    </section>
                </Modal>

            </main>
            <Footer />
        </div>
    )
}
