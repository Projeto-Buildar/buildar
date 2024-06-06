import './TerceiraTela.css';
import logo from '../../images/image_filler_square.png';

export default function TerceiraTela() {
  return(
    <div className='frame' id="terceiraTela">
      <section>
        <div className='skinContainer'>
          <img src={logo} className='skin'/>
        </div>
        <div className='rollContainer'>
          <img src={logo}/>
          <img src={logo}/>
          <img src={logo}/>
          <img src={logo}/>
        </div>
      </section>
      <article>
        <h2>Trabalhe onde você <span className='destaqRoxo'>quiser</span></h2>
        <p>Que tal um treinar em um ambiente <span className='destaqAzul'>inovador</span>? A Buildar oferece opções para cada usuário ir onde quiser</p>
      </article>
    </div>
  );
}