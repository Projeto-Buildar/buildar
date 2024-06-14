import Header from './HeaderHome.js';
// import fundo from './images/image_fundo.webp';
import { Outlet, Link } from "react-router-dom";
import Elevadores from "./Elevadores.js"

export default function Home() {
    return (
        <div className='home'>
            <Header />

            <main>
            <Elevadores></Elevadores>
            {/* <Link to="/corredor">
                <img src={fundo} width='100%' height='100%'/>
            </Link> */}
            </main>
        </div>


    )
}