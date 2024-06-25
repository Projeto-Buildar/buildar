import './LojaCopy.css';

import HeaderHome from '../home/HeaderHome';
import Footer from '../landingPage/components/Footer/Footer';

export default function LojaCopy() {
    return (
        <div>
            <HeaderHome/>  
            <main id='loja'>
                <section className='titleTopFrame'>
                    <h1>O QUE ACHA DE DESCANSAR UM POUCO?</h1>
                </section>
                <section>
                    <div>
                        <h2>Avatares para você</h2>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    )
}