import HeaderHome from '../home/HeaderHome';
import Footer from '../headersEfooters/footerPreLogin/Footer';
import './AreaDescanso.css';

// import gamePic from './images/image_filler_square.png';

import { Link } from 'react-router-dom';
import useControleDeTraducao from '../../shared/useControleDeTraducao';

export default function AreaDescanso() {
    const { t, tFormatado } = useControleDeTraducao();

    return (
        <div>
            <HeaderHome />
            <main id="areaDescanso">
                <section className='titleTopFrame'>
                    <h1>{t("restQuestion")}</h1>
                </section>
                <section>
                    <a href='https://game-descanso-buildar.vercel.app/'>
                        <article id='trexGame'>
                            <span></span>
                            <div>
                                <h3>{t("runViviRun")}</h3>
                                <p>{tFormatado("runViviDescription")}</p>
                            </div>
                        </article>
                    </a>
                    <Link to='/quiz'>
                        <article id='quizGame'>
                            <span></span>
                            <div>
                                <h3>{t("capQuiz")}</h3>
                                <p>{tFormatado("capQuizDescription")}</p>
                            </div>
                        </article>
                    </Link>
                    <article className='onDoing'>
                        <span></span>
                        <div>
                            <h3>{t("gameUnderConstruction")}</h3>
                            <p>{tFormatado("gameUnderConstructionDescription")}</p>
                        </div>
                    </article>
                </section>
                <h4 id='moreSign'>{t("moreGamesComing")}</h4>
            </main>
            <Footer />
        </div>

    )
}