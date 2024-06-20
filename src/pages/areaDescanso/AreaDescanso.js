import './AreaDescanso.css';
import gamePic from './images/image_filler_square.png';

export default function AreaDescanso() {
    return (
        <main id="areaDescanso">
            <section>
                <h1>O QUE ACHA DE DESCANSAR UM POUCO?</h1>
            </section>
            <article>
                <img src={gamePic}/>
                <div>
                    <h2>Run, Vivi! Run!</h2>
                    <p>Corre Vivi! Nesse jogo você controla a capivara determinada. Desvie de maus comportamentos, alcance as soft skills pelo caminho e venha rumo a um futuro de suceso.</p>
                </div>
            </article>
            <article>
                <img src={gamePic}/>
                <div>
                    <h2>Jogo em construção</h2>
                    <p>Que pena! Esse jogo ainda está em desenvolvimento...</p>
                </div>
            </article>
        </main>
    )
}