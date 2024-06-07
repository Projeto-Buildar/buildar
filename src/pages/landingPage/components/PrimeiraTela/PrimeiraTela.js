import './PrimeiraTela.css';
import image from '../../images/primeiraTela_img.png';

export default function PrimeiraTela() {
  return(
      <div className='frame' id="primeiraTela">
        <article>
          <h1>TENHA UM GUIA PARA MOLDAR SUAS SOFT SKILLS</h1>
          <div className='textBar'></div>
          <section>
            <div className='buttonCadastro'><span></span>DÊ O PLAY!</div>
            <div className='buttonLogin'>Já tenho uma conta</div>
          </section>
        </article>
        <figure>
          <img src={image}/>
        </figure>
      </div>
  );
}