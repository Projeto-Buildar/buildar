import Depoiments from './Depoiments';
import './OitavaTela.css';

export default function OitavaTela() {
  return(
    <div className='frame' id="oitavaTela">
      <h2>E o que a galera ta achando da <span className='destaqRoxo'>Buildar</span>?</h2>
      <section>
        <div className='arrow' style={{transform: 'rotateY(180deg)', left: '2%'}}></div>
        <Depoiments/>
        <div className='arrow'></div>
      </section>
    </div>
  );
}