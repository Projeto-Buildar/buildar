import HeaderHome from '../home/HeaderHome';
import './AreaDescanso.css';
import gamePic from './images/image_filler_square.png';

export default function AreaDescanso() {
    return (
        <main id="areaDescanso">
            <HeaderHome/>
            <section>
                <h1>O QUE ACHA DE DESCANSAR UM POUCO?</h1>
            </section>
            <section>
                <a href='https://gamebuildar-descanso.vercel.app/'>
                    <article id='trexGame'>
                        <img src={gamePic}/>
                        <div>
                            <h2>Run, Vivi! Run!</h2>
                            <p>Corre Vivi! Nesse jogo você controla a destemida capivara rumo a um futuro de suceso.</p>
                        </div>
                    </article>
                </a>
                <article className='onDoing'>
                    <img src={gamePic}/>
                    <div>
                        <h2>Jogo em construção</h2>
                        <p>Que pena! Esse jogo ainda está em desenvolvimento...</p>
                    </div>
                </article>
                <article className='onDoing'>
                    <img src={gamePic}/>
                    <div>
                        <h2>Jogo em construção</h2>
                        <p>Que pena! Esse jogo ainda está em desenvolvimento...</p>
                    </div>
                </article>
            </section>
        </main>
    )
}