import './LojaCopy.css';

import HeaderHome from '../home/HeaderHome';
import Footer from '../headersEfooters/footerPreLogin/Footer';

import energyImage from './images/energia.png';
import moneyImage from './images/builDollars.png';
import plusImage from './images/fundo.png';
import lojaImage from './images/vivi.png';

export default function LojaCopy() {
    return (
        <div>
            <HeaderHome/>  
            <main id='loja'>
                <section className='titleTopFrame'>
                    <h1>PERSONALIZAÇÃO</h1>
                    <div></div>
                </section>
                <section id='skinCarousel'>
                    <div className='carouselContainer'>
                        <h2>Avatares para você</h2>
                        <div className='carousel'>
                            Aqui vai ficar o carrosel
                        </div>
                    </div>
                </section>
                <section>
                    <div className='carouselContainer'>
                        <h2>Energia sem parar</h2>
                        <div className='carousel'>
                            <div>
                                <figure>
                                    <img alt=''></img>
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>
                <section id='chalengeCarousel'>
                    <div className='carouselContainer'>
                        <h2>Desafios</h2>
                        <div className='carousel'>
                            Aqui vai ficar o carrosel
                        </div>
                    </div>
                    <figure>
                        <img alt='' src={lojaImage}/>
                    </figure>
                </section>
            </main>
            <Footer/>

            <div id='energyBar'>
                <div className='bar'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <figure>
                    <img alt='' src={energyImage}/>
                </figure>
            </div>

            <div id='moneyBar'>
                <img alt='' src={plusImage}/>
                <div>
                    <p>20</p>
                </div>
                <figure>
                    <img alt='' src={moneyImage}/>
                </figure>
            </div>
        </div>
    )
}