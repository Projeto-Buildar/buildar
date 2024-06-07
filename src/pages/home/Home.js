import Header from './HeaderHome.js';
import fundo from './images/image_fundo.png';
import { Outlet, Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Header />

            <main>
            <Link to="/corredor">
                <img src={fundo} width='100%' height='100%'/>
            </Link>
            </main>
        </div>


    )
}