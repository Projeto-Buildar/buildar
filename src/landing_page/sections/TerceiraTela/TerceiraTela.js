import './TerceiraTela.css';
import logo from '../../images/image_filler_square.png';

export default function TerceiraTela() {
  return(
    <main id="terceiraTela">
      <aside>
        <div>
          <img src={logo} className='skin'/>
        </div>
        <section>
          <img src={logo}/>
          <img src={logo}/>
          <img src={logo}/>
          <img src={logo}/>
        </section>
      </aside>
      <article>
        <h2>Trabalhe onde você <span className='destaqRoxo'>quiser</span></h2>
        <p>Que tal um treinar em um ambiente <span className='destaqAzul'>inovador</span>? A Buildar oferece opções para cada usuário ir onde quiser</p>
      </article>
    </main>
  );
}