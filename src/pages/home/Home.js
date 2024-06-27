import './banner.css';
import Header from './HeaderHome.js';
// import fundo from './images/image_fundo.webp';
import { Outlet, Link } from "react-router-dom";
import Elevadores from "./Elevadores.js"
import Footer from '../headersEfooters/footerPreLogin/Footer.js';

export default function Home() {
    return (
        <div className='home'>
            <Header/>
            <section className='titleTopFrame'>
                <h1>PARA QUAL ANDAR HOJE?</h1>
            </section>
            {/* <div>
                <a
                    className='descanso'
                    style={{
                        padding: '2rem',
                        background: '#9B33FD',
                        position: 'fixed',
                        top: '205px',
                        cursor: 'pointer'
                    }}
                    href="https://gamebuildar-descanso.vercel.app/"
                    target="_blank"
                    rel="noopener"
                >
                    temporario
                </a>
            </div> */}
            <Link to='/descanso' style={{
                width: '4rem',
                background: '#9B33FD',
                padding: '2rem',
                position: 'absolute',
                top: '40vh',
                zIndex: '2',
                borderRadius: ' 0 1rem 1rem 0',
                fontFamily: 'Passion One, sans-serif',
                textAlign: 'center'
                }}>SALA DE DESCANSO</Link>
            <main style={{marginBottom: '5vh'}}>
                <Elevadores></Elevadores>
                {/* <Link to="/corredor">
                <img src={fundo} width='100%' height='100%'/>
            </Link> */}
            </main>
            <Footer/>
        </div>


    )
}
