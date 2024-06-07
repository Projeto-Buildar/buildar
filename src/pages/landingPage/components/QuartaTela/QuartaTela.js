import './QuartaTela.css';
import logo from '../../images/quartaTela_img.png';

export default function QuartaTela() {
  return(
    <div className='frame' id="quartaTela">
      <div className='backgroundLeft'></div>
      <article>
        <h2>Uma plataforma acessível a <span className='destaqRoxo'>Todo Mundo</span></h2>
        <p>Pagar pra aprender? Só se quiser! Aqui contamos com uma opção <span className='destaqAzul'>100% gratuita</span> pra quem estiver afim.</p>
      </article>
      <figure>
        <img src={logo}/>
      </figure>
      <div className='backgroundRight'></div>
    </div>
  );
}