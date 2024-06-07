import './SextaTela.css';
import event from '../../images/ticket.png';
import addBlock from '../../images/add_block.png';
import skinAvatar from '../../images/skin_avatar.png';
import previous from '../../images/arrow_back.png';
import skinScenary from '../../images/skin_scenary.png';
import energy from '../../images/energy.png';
import calendar from '../../images/calendar.png';

export default function SextaTela() {
  return(
    <div id="sextaTela" className='frame'>
      <div className='backgroundLeft'></div>
      <div className='backgroundMid'></div>
      <article>
        <h2>Que tal se tornar um CAPoiardor?</h2>
        <p>Caso queira uma experiência <span className='destaqBranco'>ainda mais imersiva</span>, aqui estão alguns caminhos.</p>
      </article>
      <section>
        <div className='offers'>
          <div className='titleCard'>
            <h3>Estagiário</h3>
            <h4>Plano mensal</h4>
          </div>
          <div>
            <span>
              <img src={event}/>
              <p>Eventos exclusivos</p>
            </span>
            <span>
              <img src={addBlock}/>
              <p>Nada de anúncios</p>
            </span>
            <span>
              <img src={skinAvatar}/>
              <p>Uma skin só sua</p>
            </span>
          </div>
          <div className='breakBar'></div>
          <p>Apenas R$12,90</p>
          <div className='offerButton'>Conferir</div>
        </div>
        <div className='offers'>
          <div className='titleCard'>
            <h3>Gerente</h3>
            <h4>Plano mensal</h4>
          </div>
          <div>
            <span>
              <img src={previous}/>
              <p>Todos os anteriores</p>
            </span>
            <span>
              <img src={skinScenary}/>
              <p>Um cenário especial</p>
            </span>
            <span>
              <img src={energy}/>
              <p>Energia adicional</p>
            </span>
          </div>
          <div className='breakBar'></div>
          <p>Apenas R$16,90</p>
          <div className='offerButton'>Conferir</div>
        </div>
        <div className='offers'>
          <div className='titleCard'>
            <h3>CEO</h3>
            <h4>Plano anual</h4>
          </div>
          <div>
            <span>
              <img src={previous}/>
              <p>Todos os anteriores</p>
            </span>
            <span>
              <img src={calendar}/>
              <p>1º mês gratuito</p>
            </span>
          </div>
          <div className='breakBar'></div>
          <p>Apenas R$14,90</p>
          <div className='offerButton'>Conferir</div>
        </div>
      </section>
      <div className='backgroundRight'></div>
    </div>
  );
}