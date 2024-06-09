import './TerceiraTela.css';
import skin from '../../images/terceiraTela_img.png';

export default function TerceiraTela() {
  return(
    <div className='frames' id="terceiraTela">
      <section>
        <figure className='skinContainer'>
          <img src={skin}/>
        </figure>
        <div className='scrollContainer'>
          <div className='scroller'></div>
          <div className='scroller'></div>
          <div className='scroller'></div>
          <div className='scroller'></div>
        </div>
      </section>
      <article>
        <h2>Seja você do seu melhor jeito</h2>
        <p>Que tal um avatar que encaixe com sua personalidade? A Buildar oferece opções para as <span className='destaqAzul'>características únicas</span> de cada usuário.</p>
      </article>
    </div>
  );
}