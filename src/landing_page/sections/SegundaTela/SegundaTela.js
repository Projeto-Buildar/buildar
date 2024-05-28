import './SegundaTela.css';
import logo from '../../images/image_filler_square.png';

export default function SegundaTela() {
  return(
    <main id="segundaTela">
        <article>
          <h2>Pratique de uma forma <span className='destaqRoxo'>Diferenciada</span></h2>
          <p>Com simulações de ambientes profissionais, você consegue crescer! Dê um up em suas soft skills de maneira <span className='destaqAzul'>fácil</span> e <span className='destaqAzul'>divertida</span>.</p>
        </article>
        <aside>
          <img src={logo}/>
        </aside>
    </main>
  );
}