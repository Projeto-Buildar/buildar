import Header from './HeaderHome.js';
// import fundo from './images/image_fundo.webp';
import { Outlet, Link } from "react-router-dom";
import Elevadores from "./Elevadores.js"

export default function Home() {
    return (
        <div className='home'>
            <Header />
            <div>
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
                    rel="noopener noreferrer"
                >
                    temporario
                </a>
            </div>
            <main>
                <Elevadores></Elevadores>
                {/* <Link to="/corredor">
                <img src={fundo} width='100%' height='100%'/>
            </Link> */}
            </main>
        </div>


    )
}
