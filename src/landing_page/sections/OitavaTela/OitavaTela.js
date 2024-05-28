import Depoiments from './Depoiments';
import './OitavaTela.css';

export default function OitavaTela() {
  return(
    <main id="oitavaTela">
      <h2>E o que a galera ta achando da <span className='destaqRoxo'>Buildar</span>?</h2>
      <aside>
        <div className='arrow' style={{transform: 'rotateY(180deg)'}}></div>
        <Depoiments/>
        <div className='arrow'></div>
      </aside>
    </main>
  );
}