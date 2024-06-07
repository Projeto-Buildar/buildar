import Header from './HeaderHome.js';
import fundo from './images/image_fundo.png';

export default function Home() {
    return (
        <div>
            <Header />
            <main>
                <img src={fundo} width='100%' height='100%'/>
            </main>
        </div>


    )
}