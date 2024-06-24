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
                            <h3>Run, Vivi! Run!</h3>
                            <p>Corre Vivi! Nesse jogo você controla a destemida capivara rumo a um futuro de suceso.</p>
                        </div>
                    </article>
                </a>
                <article className='onDoing'>
                    <img src={gamePic}/>
                    <div>
                        <h3>Jogo em construção</h3>
                        <p>Que pena! Esse jogo ainda está em desenvolvimento...</p>
                    </div>
                </article>
                <article className='onDoing'>
                    <img src={gamePic}/>
                    <div>
                        <h3>Jogo em construção</h3>
                        <p>Que pena! Esse jogo ainda está em desenvolvimento...</p>
                    </div>
                </article>
            </section>
            <h4 id='moreSign'>Mais jogos por vir</h4>
        </main>
    )
}