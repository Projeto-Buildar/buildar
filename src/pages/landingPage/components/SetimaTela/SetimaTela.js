import './SetimaTela.css';
import logo from '../../images/setimaTela_img.png';

export default function SetimaTela() {
  return(
    <div className='frame' id="setimaTela">
      <figure>
        <img src={logo}/>
      </figure>
      <article>
        <h2>Mais que inclusão, <span className='destaqRoxo'>Integração</span></h2>
        <p>Quer mais? a Buildar conta com um sistema de promoção de <span className='destaqAzul'>eventos</span> e <span className='destaqAzul'>workshops</span> para aquela troca maneira de experiências.</p>
      </article>
    </div>
  );
}