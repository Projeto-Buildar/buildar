import Header from './HeaderHome.js';
// import fundo from './images/image_fundo.webp';
import { Outlet, Link } from "react-router-dom";
import Elevadores from "./Elevadores.js"

export default function Home() {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    return (
        <div className='home'>
            <Header />
            <div className='descanso' style={{padding: '2rem', background: '#9B33FD', position: 'fixed', top: '205', cursor: 'pointer'}}>temporario</div>
            <main>
            <Elevadores></Elevadores>
            {/* <Link to="/corredor">
                <img src={fundo} width='100%' height='100%'/>
            </Link> */}
            </main>
        </div>


    )
}